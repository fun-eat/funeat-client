import cx from 'classnames';
import { Link } from 'react-router-dom';

import { imageWrapper, categoryImage, categoryName, circle, bordered, link } from './categoryItem.css';

import { PATH } from '@/constants/path';
import { useGA } from '@/hooks/common';
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
  const { id: categoryId, name, image } = category;

  const { gaEvent } = useGA();

  const handleCategoryItemClick = () => {
    gaEvent({
      category: 'button',
      action: `${name} 카테고리 링크 클릭`,
      label: '카테고리',
    });
  };

  return (
    <Link
      to={`${PATH.PRODUCT_LIST}/${categoryType}`}
      className={link}
      state={categoryId}
      onClick={handleCategoryItemClick}
    >
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
    </Link>
  );
};

export default CategoryItem;
