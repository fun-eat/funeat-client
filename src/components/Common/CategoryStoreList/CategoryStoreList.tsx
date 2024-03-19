import { categoryStoreListWrapper } from './categoryStoreList.css';
import CategoryItem from '../CategoryItem/CategoryItem';

import { CATEGORY_TYPE } from '@/constants';
import { useCategoryStoreQuery } from '@/hooks/queries/product';

interface CategoryStoreListProps {
  hasName?: boolean;
  isCircular?: boolean;
  isBordered?: boolean;
  location?: 'home' | 'products';
}

const categoryType = CATEGORY_TYPE.STORE;

const imgSize = {
  home: {
    width: 78,
    height: 58,
  },
  products: {
    width: 76,
    height: 58,
  },
};

const CategoryStoreList = ({
  hasName = false,
  isCircular = false,
  isBordered = false,
  location = 'home',
}: CategoryStoreListProps) => {
  const { data: categories } = useCategoryStoreQuery();

  return (
    <div className={categoryStoreListWrapper}>
      {categories.map((category) => (
        <CategoryItem
          key={category.id}
          category={category}
          width={imgSize[location].width}
          height={imgSize[location].height}
          categoryType={categoryType}
          hasName={hasName}
          isCircular={isCircular}
          isBordered={isBordered}
        />
      ))}
    </div>
  );
};

export default CategoryStoreList;
