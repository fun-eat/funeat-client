import cx from 'classnames';
import { Link } from 'react-router-dom';

import { categoryImage, circle, link } from './categoryItem.css';
import Text from '../Typography/Text/Text';

import { PATH } from '@/constants/path';
import { useGA } from '@/hooks/common';
import type { Category } from '@/types/common';

interface CategoryItemProps {
  category: Category;
  width?: number;
  height?: number;
  isCircular?: boolean;
  hasName?: boolean;
  categoryType: 'food' | 'store';
}

const CategoryItem = ({
  category,
  width,
  height,
  categoryType,
  hasName = false,
  isCircular = false,
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
      <div>
        <img
          className={cx(category, { [circle]: isCircular })}
          src={image}
          width={width}
          height={height}
          alt={name}
        />
      </div>
      {hasName && (
        <Text as="span" color="info" size="caption4" weight="semiBold">
          {name}
        </Text>
      )}
    </Link>
  );
};

export default CategoryItem;
