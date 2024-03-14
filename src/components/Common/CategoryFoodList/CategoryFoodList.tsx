import { categoryFoodListWrapper } from './categoryFoodList.css';
import CategoryItem from '../CategoryItem/CategoryItem';

import { CATEGORY_TYPE } from '@/constants';
import { useCategoryFoodQuery } from '@/hooks/queries/product';

const categoryType = CATEGORY_TYPE.FOOD;

const CategoryFoodList = () => {
  const { data: categories } = useCategoryFoodQuery(categoryType);

  return (
    <div className={categoryFoodListWrapper}>
      {categories.map(({ id, name, image }) => (
        <CategoryItem
          key={id}
          categoryId={id}
          name={name}
          image={{ src: image, width: 51, height: 51 }}
          categoryType={categoryType}
        />
      ))}
    </div>
  );
};

export default CategoryFoodList;
