import { categoryStoreListWrapper } from './categoryStoreList.css';
import CategoryItem from '../CategoryItem/CategoryItem';

import { CATEGORY_TYPE } from '@/constants';
import { useCategoryStoreQuery } from '@/hooks/queries/product';

const categoryType = CATEGORY_TYPE.STORE;

const CategoryStoreList = () => {
  const { data: categories } = useCategoryStoreQuery(categoryType);

  return (
    <div className={categoryStoreListWrapper}>
      {categories.map(({ id, name, image }) => (
        <CategoryItem
          key={id}
          categoryId={id}
          image={{ src: image, width: 78, height: 58 }}
          categoryType={categoryType}
        />
      ))}
    </div>
  );
};

export default CategoryStoreList;
