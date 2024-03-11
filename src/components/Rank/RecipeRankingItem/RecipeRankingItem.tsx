import type { RecipeRanking } from '@/types/ranking';
import { getRelativeDate } from '@/utils/date';
import {
  recipeRankingImageWrapper,
  recipeRankingImage,
  recipeRankingButtonWrapper,
  recipeRankingTitle,
  recipeRankingInfo,
} from './recipeRankingItem.css';
import { RecipeFavoriteButton } from '@/components/Recipe';

interface RecipeRankingItemProps {
  recipe: RecipeRanking;
}

const RecipeRankingItem = ({ recipe }: RecipeRankingItemProps) => {
  const { id, image, title, author, favorite, createdAt } = recipe;

  return (
    <>
      {/* 이미지 값을 필수값으로 받을지 선택값으로 받을지에 따라 타입 수정 (현재는 대체 이미지로 인해 'string|null'임*/}
      <div className={recipeRankingImageWrapper}>
        {image && <img className={recipeRankingImage} src={image} alt={title} />}
        <div className={recipeRankingButtonWrapper}>
          <RecipeFavoriteButton recipeId={id} favorite={favorite} />
        </div>
      </div>
      <div style={{ height: '8px' }} />
      <p className={recipeRankingTitle}>{title}</p>
      <div style={{ height: '2px' }} />
      <p className={recipeRankingInfo}>
        {author} 님 · {getRelativeDate(createdAt)}
      </p>
    </>
  );
};

export default RecipeRankingItem;
