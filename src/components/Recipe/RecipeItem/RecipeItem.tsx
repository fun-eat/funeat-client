import { Skeleton } from '@fun-eat/design-system';
import { memo, useState } from 'react';

import type { MemberRecipe, Recipe } from '@/types/recipe';
import {
  buttonWrapper,
  imageWrapper,
  recipeAuthor,
  recipeDescription,
  recipeImage,
  recipeTitle,
} from './recipeItem.css';
import { RECIPE_CARD_DEFAULT_IMAGE_URL } from '@/constants/image';
import RecipeFavoriteButton from '../RecipeFavoriteButton/RecipeFavoriteButton';

interface RecipeItemProps {
  recipe: Recipe | MemberRecipe;
  isMemberPage?: boolean;
}

const RecipeItem = ({ recipe, isMemberPage = false }: RecipeItemProps) => {
  const { id, image, title, content, favorite } = recipe;
  const author = 'author' in recipe ? recipe.author : null;
  const [isImageLoading, setIsImageLoading] = useState(true);

  return (
    <>
      {!isMemberPage && (
        <div className={imageWrapper}>
          <img
            className={recipeImage}
            src={image !== null ? image : RECIPE_CARD_DEFAULT_IMAGE_URL}
            alt={`조리된 ${title}`}
            loading="lazy"
            onLoad={() => image && setIsImageLoading(false)}
          />
          {isImageLoading && image && <Skeleton width={163} height={200} />}
          <div className={buttonWrapper}>
            <RecipeFavoriteButton recipeId={id} favorite={favorite} />
          </div>
        </div>
      )}
      <div style={{ height: '8px' }} />
      <p className={recipeTitle}>{title}</p>
      <p className={recipeAuthor}>{author && `${author.nickname} 님`}</p>
      {/* 아직 이 부분에 대한 논의가 없어 임시로 content 끼워 넣음. 만약 content가 맞다면 말줄임표 적용 예정 */}
      <p className={recipeDescription}>{content}</p>
    </>
  );
};

export default memo(RecipeItem);
