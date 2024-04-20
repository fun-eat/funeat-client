import { Link } from 'react-router-dom';

import { container, moreItem, notFound, recipeLink } from './productRecipeList.css';

import SearchNotFoundImage from '@/assets/search-notfound.png';
import { Text, ShowAllButton } from '@/components/Common';
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
    return (
      <div className={notFound}>
        <img src={SearchNotFoundImage} width={335} alt="검색 결과 없음" />
        <Text color="disabled" size="caption4">
          아직 작성된 꿀조합이 없어요
        </Text>
        <div style={{ height: '6px' }} />
        <Link to={PATH.RECIPE} className={recipeLink}>
          <Text as="span" color="sub" weight="semiBold" size="caption2">
            꿀조합 작성하러 가기
          </Text>
        </Link>
      </div>
    );
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
