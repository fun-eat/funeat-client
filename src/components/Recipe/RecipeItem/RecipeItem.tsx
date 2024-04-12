import { BottomSheet, Skeleton, useBottomSheet } from '@fun-eat/design-system';
import type { MouseEventHandler, PropsWithChildren} from 'react';
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
  recipeProductWrapper,
  recipeProductsCount,
  thirdProductImage,
} from './recipeItem.css';
import RecipeFavoriteButton from '../RecipeFavoriteButton/RecipeFavoriteButton';
import RecipeProductButton from '../RecipeProductButton/RecipeProductButton';

import { Text } from '@/components/Common';
import { ProductOverviewList } from '@/components/Product';
import { RECIPE_CARD_DEFAULT_IMAGE_URL } from '@/constants/image';
import RecipeItemProvider from '@/contexts/RecipeItemContext';
import { useRecipeItemValueContext } from '@/hooks/context';
import { getRelativeDate } from '@/utils/date';
import displaySlice from '@/utils/displaySlice';

const RecipeItem = ({ children }: PropsWithChildren) => {
  const { recipe } = useRecipeItemValueContext();
  const { id } = recipe;

  return (
    <RecipeItemProvider recipe={recipe}>
      <Link to={`${id}`}>{children}</Link>
    </RecipeItemProvider>
  );
};

const ImageAndFavoriteButton = ({ children }: PropsWithChildren) => {
  const { recipe } = useRecipeItemValueContext();
  const { id, image, title, favorite } = recipe;
  const [isImageLoading, setIsImageLoading] = useState(true);

  return (
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
      {children}
    </div>
  );
};

const ProductButton = () => {
  const { recipe } = useRecipeItemValueContext();
  const { products } = recipe;
  const { isOpen, isClosing, handleOpenBottomSheet, handleCloseBottomSheet } = useBottomSheet();

  const handleOpenProductSheet: MouseEventHandler<HTMLDivElement> = (event) => {
    event.preventDefault();
    handleOpenBottomSheet();
  };

  return (
    <>
      <div className={productButtonWrapper} onClick={(e) => handleOpenProductSheet(e)}>
        <RecipeProductButton isTranslucent />
      </div>

      <BottomSheet isOpen={isOpen} isClosing={isClosing} maxWidth="400px" close={handleCloseBottomSheet}>
        <div className={recipeProductWrapper}>
          <ProductOverviewList products={products} />
        </div>
      </BottomSheet>
    </>
  );
};

const ProductCircleButton = () => {
  const { recipe } = useRecipeItemValueContext();
  const { products } = recipe;

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
  const { recipe } = useRecipeItemValueContext();
  const { title } = recipe;

  return (
    <Text className={ellipsis} size="caption1" weight="semiBold" color="default">
      {title}
    </Text>
  );
};

const Author = () => {
  const { recipe } = useRecipeItemValueContext();
  const { author } = recipe;

  return <Text size="caption3" color="sub">{`${author.nickname} 님`}</Text>;
};

const CreatedDate = () => {
  const { recipe } = useRecipeItemValueContext();
  const { createdAt } = recipe;

  return (
    <Text size="caption3" color="sub">
      · {getRelativeDate(createdAt)}
    </Text>
  );
};

const Content = () => {
  const { recipe } = useRecipeItemValueContext();
  const { content } = recipe;

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
RecipeItem.CreatedDate = CreatedDate;
RecipeItem.Content = Content;

export default RecipeItem;
