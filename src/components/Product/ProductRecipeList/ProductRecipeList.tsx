import { container, moreItem } from './productRecipeList.css';

import { ShowAllButton } from '@/components/Common';
import { DefaultRecipeItem } from '@/components/Recipe';
import { PATH } from '@/constants/path';
import { useInfiniteProductRecipesQuery } from '@/hooks/queries/product';
import displaySlice from '@/utils/displaySlice';

interface ProductRecipeListProps {
  productId: number;
  productName: string;
}

const ProductRecipeList = ({ productId, productName }: ProductRecipeListProps) => {
  // 상품에서 보여줄 꿀조합 정렬 조건
  const { data } = useInfiniteProductRecipesQuery(productId, 'favoriteCount,desc');

  const recipes = data.pages.flatMap((page) => page.recipes);
  const recipeToDisplay = displaySlice(true, recipes, 3);

  if (recipes.length === 0) {
    return null;
  }

  return (
    <ul className={container}>
      {recipeToDisplay.map((recipe) => (
        <li key={recipe.id}>
          <DefaultRecipeItem recipe={recipe} />
        </li>
      ))}
      {recipeToDisplay.length < recipes.length && (
        <li className={moreItem}>
          <ShowAllButton link={`${PATH.SEARCH}/recipes?query=${productName}`} />
        </li>
      )}
    </ul>
  );
};

export default ProductRecipeList;
