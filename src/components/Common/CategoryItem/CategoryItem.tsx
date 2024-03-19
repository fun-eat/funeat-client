import cx from 'classnames';
import { useNavigate } from 'react-router-dom';

import { imageWrapper, categoryImage, categoryName, circle, bordered } from './categoryItem.css';

import { PATH } from '@/constants/path';
import { useGA } from '@/hooks/common';
import { useCategoryActionContext } from '@/hooks/context';
import type { Category } from '@/types/common';

interface CategoryItemProps {
  category: Category;
  width?: number;
  height?: number;
  isCircular?: boolean;
  hasName?: boolean;
  isBordered?: boolean;
  categoryType: 'food' | 'store';
}

const CategoryItem = ({
  category,
  width,
  height,
  categoryType,
  hasName = false,
  isCircular = false,
  isBordered = false,
}: CategoryItemProps) => {
  const navigate = useNavigate();
  const { selectCategory } = useCategoryActionContext();
  const { id: categoryId, name, image } = category;

  const { gaEvent } = useGA();

  const handleCategoryItemClick = (categoryId: number) => {
    selectCategory(categoryType, categoryId);
    navigate(PATH.PRODUCT_LIST + '/' + categoryType);

    gaEvent({
      category: 'button',
      action: `${name} 카테고리 링크 클릭`,
      label: '카테고리',
    });
  };

  return (
    <button type="button" onClick={() => handleCategoryItemClick(categoryId)}>
      <div className={cx(imageWrapper, { [bordered]: isBordered })}>
        <img
          className={cx(categoryImage, { [circle]: isCircular })}
          src={image}
          width={width}
          height={height}
          alt={name}
        />
      </div>
      {hasName && <span className={categoryName}>{name}</span>}
    </button>
  );
};

export default CategoryItem;
