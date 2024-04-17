import { Link } from 'react-router-dom';

import {
  container,
  moreIcon,
  moreIconWrapper,
  moreItem,
  moreLink,
  notFound,
  recipeLink,
} from './productRecipeList.css';

import SearchNotFoundImage from '@/assets/search-notfound.png';
import { SvgIcon, Text } from '@/components/Common';
import { RecipeItem } from '@/components/Recipe';
import { PATH } from '@/constants/path';
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
          <RecipeItem recipe={recipe} hasFavoriteButton />
        </li>
      ))}
      {recipeToDisplay.length < recipes.length && (
        <li className={moreItem}>
          {/*링크는 상품이 포함된 꿀조합 검색결과로 가는 것이 맞을듯?*/}
          <Link to={''} className={moreLink}>
            <div className={moreIconWrapper}>
              <SvgIcon
                variant="arrowLeft"
                className={moreIcon}
                width={16}
                height={16}
                fill="none"
                stroke={vars.colors.gray5}
              />
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
