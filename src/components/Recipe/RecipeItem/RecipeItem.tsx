import { Skeleton } from '@fun-eat/design-system';
import { memo, useState } from 'react';
import { Link } from 'react-router-dom';

import {
  favoriteButtonWrapper,
  imageWrapper,
  productButtonWrapper,
  recipeAuthor,
  recipeContent,
  recipeImage,
  recipeTitle,
} from './recipeItem.css';
import RecipeFavoriteButton from '../RecipeFavoriteButton/RecipeFavoriteButton';
import RecipeProductButton from '../RecipeProductButton/RecipeProductButton';

import { RECIPE_CARD_DEFAULT_IMAGE_URL } from '@/constants/image';
import { PATH } from '@/constants/path';
import type { MemberRecipe, Recipe } from '@/types/recipe';

interface RecipeItemProps {
  recipe: Recipe | MemberRecipe;
  isMemberPage?: boolean;
}

const RecipeItem = ({ recipe, isMemberPage = false }: RecipeItemProps) => {
  const [isImageLoading, setIsImageLoading] = useState(true);

  const { id, image, title, content, favorite, products } = recipe;
  const author = 'author' in recipe ? recipe.author : null;

  return (
    <>
      <Link to={`${PATH.RECIPE}/${id}`}>
        {!isMemberPage && (
          <div className={imageWrapper}>
            <img
              className={recipeImage}
              src={image ?? RECIPE_CARD_DEFAULT_IMAGE_URL}
              alt={`조리된 ${title}`}
              loading="lazy"
              onLoad={() => image && setIsImageLoading(false)}
            />
            {isImageLoading && image && <Skeleton width={163} height={200} />}
            <div className={favoriteButtonWrapper} onClick={(e) => e.preventDefault()}>
              <RecipeFavoriteButton recipeId={id} favorite={favorite} />
            </div>
            <div className={productButtonWrapper} onClick={(e) => e.preventDefault()}>
              <RecipeProductButton isTranslucent products={products} />
            </div>
          </div>
        )}
        <div style={{ height: '8px' }} />
        <p className={recipeTitle}>{title}</p>
        <p className={recipeAuthor}>{author && `${author.nickname} 님`}</p>
        <p className={recipeContent}>{content}</p>
      </Link>
    </>
  );
};

export default memo(RecipeItem);
