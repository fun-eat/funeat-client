import { categoryFoodListWrapper } from './categoryFoodList.css';
import CategoryItem from '../CategoryItem/CategoryItem';

import { CATEGORY_TYPE } from '@/constants';
import { useCategoryFoodQuery } from '@/hooks/queries/product/useCategoryQuery';

interface CategoryFoodListProps {
  hasName?: boolean;
  isCircular?: boolean;
  location?: 'home' | 'products';
}

const categoryType = CATEGORY_TYPE.FOOD;

const imgSize = {
  home: {
    width: 51,
    height: 51,
  },
  products: {
    width: 68,
    height: 68,
  },
};

const CategoryFoodList = ({ hasName = false, isCircular = false, location = 'home' }: CategoryFoodListProps) => {
  const { data: categories } = useCategoryFoodQuery(categoryType);

  return (
    <div className={categoryFoodListWrapper}>
      {categories.map((category) => (
        <CategoryItem
          key={category.id}
          category={category}
          width={imgSize[location].width}
          height={imgSize[location].height}
          categoryType={categoryType}
          hasName={hasName}
          isCircular={isCircular}
        />
      ))}
    </div>
  );
};

export default CategoryFoodList;
