import { categoryFoodListWrapper } from './categoryFoodList.css';
import CategoryItem from '../CategoryItem/CategoryItem';

import { CATEGORY_TYPE } from '@/constants';
import { useCategoryFoodQuery } from '@/hooks/queries/product';

interface CategoryFoodListProps {
  hasName?: boolean;
  isCircular?: boolean;
  location?: 'home' | 'products';
}

const categoryType = CATEGORY_TYPE.FOOD;

const imgSize = {
  home: {
    width: 52,
    height: 52,
  },
  products: {
    width: 56,
    height: 56,
  },
};

const CategoryFoodList = ({ hasName = false, isCircular = false, location = 'home' }: CategoryFoodListProps) => {
  const { data: categories } = useCategoryFoodQuery();

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
