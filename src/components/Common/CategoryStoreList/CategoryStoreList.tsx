import { categoryStoreListWrapper } from './categoryStoreList.css';
import CategoryItem from '../CategoryItem/CategoryItem';

import { CATEGORY_TYPE } from '@/constants';
import { useCategoryStoreQuery } from '@/hooks/queries/product';

interface CategoryStoreListProps {
  hasName?: boolean;
  isCircular?: boolean;
  isBordered?: boolean;
}

const categoryType = CATEGORY_TYPE.STORE;

const CategoryStoreList = ({ hasName = false, isCircular = false, isBordered = false }: CategoryStoreListProps) => {
  const { data: categories } = useCategoryStoreQuery();

  return (
    <div className={categoryStoreListWrapper}>
      {categories.map((category) => (
        <CategoryItem
          key={category.id}
          category={category}
          width={68}
          height={51}
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
