import { BottomSheet, Skeleton, useBottomSheet } from '@fun-eat/design-system';
import { memo, useState } from 'react';

import type { MemberRecipe, Recipe } from '@/types/recipe';
import {
  favoriteButtonWrapper,
  imageWrapper,
  productButtonWrapper,
  recipeAuthor,
  recipeContent,
  recipeImage,
  recipeProductWrapper,
  recipeTitle,
} from './recipeItem.css';
import { RECIPE_CARD_DEFAULT_IMAGE_URL } from '@/constants/image';
import RecipeFavoriteButton from '../RecipeFavoriteButton/RecipeFavoriteButton';
import RecipeProductButton from '../RecipeProductButton/RecipeProductButton';
import { ProductOverviewList } from '@/components/Product';

interface RecipeItemProps {
  recipe: Recipe | MemberRecipe;
  isMemberPage?: boolean;
}

const RecipeItem = ({ recipe, isMemberPage = false }: RecipeItemProps) => {
  const { id, image, title, content, favorite, products } = recipe;
  const { isOpen, isClosing, handleOpenBottomSheet, handleCloseBottomSheet } = useBottomSheet();

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
          <div className={favoriteButtonWrapper}>
            <RecipeFavoriteButton recipeId={id} favorite={favorite} />
          </div>
          <div className={productButtonWrapper} onClick={handleOpenBottomSheet}>
            <RecipeProductButton isTranslucent />
          </div>
        </div>
      )}
      <div style={{ height: '8px' }} />
      <p className={recipeTitle}>{title}</p>
      <p className={recipeAuthor}>{author && `${author.nickname} 님`}</p>
      <p className={recipeContent}>{content}</p>

      <BottomSheet isOpen={isOpen} isClosing={isClosing} maxWidth="400px" close={handleCloseBottomSheet}>
        <div className={recipeProductWrapper}>
          <ProductOverviewList products={products} />
        </div>
      </BottomSheet>
    </>
  );
};

export default memo(RecipeItem);
