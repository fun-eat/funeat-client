import { buttonWrapper, imageWrapper, recipeImage, recipeTitle, info } from './recipeRankingItem.css';

import { RecipeFavoriteButton } from '@/components/Recipe';
import { RECIPE_CARD_DEFAULT_IMAGE_URL } from '@/constants/image';
import type { RecipeRanking } from '@/types/ranking';
import { getRelativeDate } from '@/utils/date';

interface RecipeRankingItemProps {
  recipe: RecipeRanking;
}

const RecipeRankingItem = ({ recipe }: RecipeRankingItemProps) => {
  const { id, image, title, author, favorite, createdAt } = recipe;

  return (
    <>
      <div className={imageWrapper}>
        <img className={recipeImage} src={image ?? RECIPE_CARD_DEFAULT_IMAGE_URL} alt={title} />
        <div className={buttonWrapper} onClick={(e) => e.preventDefault()}>
          <RecipeFavoriteButton recipeId={id} favorite={favorite} />
        </div>
      </div>
      <div style={{ height: '8px' }} />
      <p className={recipeTitle}>{title}</p>
      <div style={{ height: '2px' }} />
      <p className={info}>
        {author} 님 · {getRelativeDate(createdAt)}
      </p>
    </>
  );
};

export default RecipeRankingItem;
