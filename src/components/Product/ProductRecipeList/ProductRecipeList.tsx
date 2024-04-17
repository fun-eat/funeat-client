import { Link } from 'react-router-dom';

import { container, moreIcon, moreIconWrapper, moreItem, moreLink } from './productRecipeList.css';

import { SvgIcon, Text } from '@/components/Common';
import { DefaultRecipeItem } from '@/components/Recipe';
import RecipeItemProvider from '@/contexts/RecipeItemContext';
import { useInfiniteProductRecipesQuery } from '@/hooks/queries/product';
import { vars } from '@/styles/theme.css';
import displaySlice from '@/utils/displaySlice';

interface ProductRecipeListProps {
  productId: number;
}

const ProductRecipeList = ({ productId }: ProductRecipeListProps) => {
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
          <RecipeItemProvider recipe={recipe}>
            <DefaultRecipeItem />
          </RecipeItemProvider>
        </li>
      ))}
      {recipeToDisplay.length < recipes.length && (
        <li className={moreItem}>
          {/*링크는 상품이 포함된 꿀조합 검색결과로 가는 것이 맞을듯?*/}
          <Link to={''} className={moreLink}>
            <div className={moreIconWrapper}>
              <SvgIcon variant="arrowLeft" className={moreIcon} fill="none" stroke={vars.colors.gray5} />
            </div>
            <Text as="span" color="info" weight="semiBold" size="caption2">
              전체보기
            </Text>
          </Link>
        </li>
      )}
    </ul>
  );
};

export default ProductRecipeList;
