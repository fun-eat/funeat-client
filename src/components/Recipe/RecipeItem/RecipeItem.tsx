import { Skeleton } from '@fun-eat/design-system';
import type { PropsWithChildren } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import {
  ellipsis,
  favoriteButtonWrapper,
  imageWrapper,
  productButtonWrapper,
  productCircleListWrapper,
  productCircleWrapper,
  productImage,
  recipeImage,
  recipeProductsCount,
  thirdProductImage,
} from './recipeItem.css';
import RecipeFavoriteButton from '../RecipeFavoriteButton/RecipeFavoriteButton';
import RecipeProductButton from '../RecipeProductButton/RecipeProductButton';

import { Text } from '@/components/Common';
import {
  RECIPE_CARD_DEFAULT_IMAGE_URL_1,
  RECIPE_CARD_DEFAULT_IMAGE_URL_2,
  RECIPE_CARD_DEFAULT_IMAGE_URL_3,
  RECIPE_CARD_DEFAULT_IMAGE_URL_4,
  RECIPE_CARD_DEFAULT_IMAGE_URL_5,
} from '@/constants/image';
import RecipeItemProvider from '@/contexts/RecipeItemContext';
import { useRecipeItemValueContext } from '@/hooks/context';
import type { Recipe } from '@/types/recipe';
import { getRelativeDate } from '@/utils/date';
import displaySlice from '@/utils/displaySlice';

const defaultImages = [
  RECIPE_CARD_DEFAULT_IMAGE_URL_1,
  RECIPE_CARD_DEFAULT_IMAGE_URL_2,
  RECIPE_CARD_DEFAULT_IMAGE_URL_3,
  RECIPE_CARD_DEFAULT_IMAGE_URL_4,
  RECIPE_CARD_DEFAULT_IMAGE_URL_5,
];

interface RecipeItemProps {
  recipe: Recipe;
  children?: React.ReactNode;
}

const RecipeItem = ({ recipe, children }: RecipeItemProps) => {
  const { id } = recipe;

  return (
    <RecipeItemProvider recipe={recipe}>
      <Link to={`${id}`}>{children}</Link>
    </RecipeItemProvider>
  );
};

const ImageAndFavoriteButton = ({ children }: PropsWithChildren) => {
  const {
    recipe: { id, image, title, favorite },
  } = useRecipeItemValueContext();
  const [isImageLoading, setIsImageLoading] = useState(true);

  const randomIndex = Math.floor(Math.random() * defaultImages.length);
  const defaultImage = defaultImages[randomIndex];

  return (
    <div className={imageWrapper}>
      <img
        className={recipeImage}
        src={image ?? defaultImage}
        alt={`조리된 ${title}`}
        loading="lazy"
        onLoad={() => image && setIsImageLoading(false)}
      />
      {isImageLoading && image && <Skeleton width={163} height={200} />}
      <div className={favoriteButtonWrapper} onClick={(e) => e.preventDefault()}>
        <RecipeFavoriteButton recipeId={id} favorite={favorite} />
      </div>
      {children}
    </div>
  );
};

const ProductButton = () => {
  const {
    recipe: { products },
  } = useRecipeItemValueContext();

  if (!products) {
    return null;
  }

  return (
    <>
      <div className={productButtonWrapper} onClick={(e) => e.preventDefault()}>
        <RecipeProductButton isTranslucent products={products} />
      </div>
    </>
  );
};

const ProductCircleButton = () => {
  const {
    recipe: { products },
  } = useRecipeItemValueContext();

  if (!products) {
    return null;
  }

  return (
    <ul className={productCircleWrapper}>
      {displaySlice(true, products, 3).map(({ id, image }, idx) => (
        <li key={id} className={productCircleListWrapper}>
          <img
            src={image}
            alt="사용한 상품"
            className={products.length > 3 && idx === 2 ? thirdProductImage : productImage}
          />
          {idx === 2 && (
            <Text size="caption3" weight="medium" className={recipeProductsCount}>
              +{products.length - 3}
            </Text>
          )}
        </li>
      ))}
    </ul>
  );
};

const Title = () => {
  const {
    recipe: { title },
  } = useRecipeItemValueContext();

  return (
    <Text className={ellipsis} size="caption1" weight="semiBold" color="default">
      {title}
    </Text>
  );
};

const Author = () => {
  const {
    recipe: { author },
  } = useRecipeItemValueContext();

  return <Text size="caption3" color="sub">{`${author.nickname} 님`}</Text>;
};

const AuthorAndCreatedDate = () => {
  const {
    recipe: { author, createdAt },
  } = useRecipeItemValueContext();

  return (
    <Text size="caption3" color="sub">
      {`${author.nickname} 님 · ${getRelativeDate(createdAt)}`}
    </Text>
  );
};

const Content = () => {
  const {
    recipe: { content },
  } = useRecipeItemValueContext();

  return (
    <Text className={ellipsis} size="caption4" color="disabled">
      {content}
    </Text>
  );
};

RecipeItem.ImageAndFavoriteButton = ImageAndFavoriteButton;
RecipeItem.ProductButton = ProductButton;
RecipeItem.ProductCircleButton = ProductCircleButton;
RecipeItem.Title = Title;
RecipeItem.Author = Author;
RecipeItem.AuthorAndCreatedDate = AuthorAndCreatedDate;
RecipeItem.Content = Content;

export default RecipeItem;

export const DefaultRecipeItem = ({ recipe }: RecipeItemProps) => {
  return (
    <RecipeItem recipe={recipe}>
      <RecipeItem.ImageAndFavoriteButton />
      <div style={{ height: '8px' }} />
      <RecipeItem.Title />
      <RecipeItem.AuthorAndCreatedDate />
    </RecipeItem>
  );
};

export const RecipeItemWithDiskIcon = ({ recipe }: RecipeItemProps) => {
  return (
    <RecipeItem recipe={recipe}>
      <RecipeItem.ImageAndFavoriteButton>
        <RecipeItem.ProductButton />
      </RecipeItem.ImageAndFavoriteButton>
      <div style={{ height: '8px' }} />
      <RecipeItem.Title />
      <RecipeItem.AuthorAndCreatedDate />
    </RecipeItem>
  );
};

export const RecipeItemWithProductDetailImage = ({ recipe }: RecipeItemProps) => {
  return (
    <RecipeItem recipe={recipe}>
      <RecipeItem.ImageAndFavoriteButton>
        <RecipeItem.ProductCircleButton />
      </RecipeItem.ImageAndFavoriteButton>
      <div style={{ height: '8px' }} />
      <RecipeItem.Title />
      <RecipeItem.Author />
      <RecipeItem.Content />
    </RecipeItem>
  );
};

export const RecipeItemWithDiskIconAndContent = ({ recipe }: RecipeItemProps) => {
  return (
    <RecipeItem recipe={recipe}>
      <RecipeItem.ImageAndFavoriteButton>
        <RecipeItem.ProductButton />
      </RecipeItem.ImageAndFavoriteButton>
      <div style={{ height: '8px' }} />
      <RecipeItem.Title />
      <RecipeItem.AuthorAndCreatedDate />
      <RecipeItem.Content />
    </RecipeItem>
  );
};
