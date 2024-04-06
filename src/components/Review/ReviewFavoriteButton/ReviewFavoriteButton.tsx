import { useState } from 'react';

import { count, favoriteButton } from './reviewFavoriteButton.css';

import { SvgIcon, Text } from '@/components/Common';
import { useTimeout } from '@/hooks/common';
import { useReviewFavoriteMutation } from '@/hooks/queries/review';
import { vars } from '@/styles/theme.css';

interface ReviewFavoriteButtonProps {
  productId: number;
  reviewId: number;
  favorite: boolean;
  favoriteCount: number;
}

const ReviewFavoriteButton = ({ productId, reviewId, favorite, favoriteCount }: ReviewFavoriteButtonProps) => {
  const initialFavoriteState = {
    isFavorite: favorite,
    currentFavoriteCount: favoriteCount,
  };

  const [favoriteInfo, setFavoriteInfo] = useState(initialFavoriteState);
  const { isFavorite, currentFavoriteCount } = favoriteInfo;

  const { mutate } = useReviewFavoriteMutation(productId, reviewId);

  const handleToggleFavorite = async () => {
    setFavoriteInfo((prev) => ({
      isFavorite: !prev.isFavorite,
      currentFavoriteCount: isFavorite ? prev.currentFavoriteCount - 1 : prev.currentFavoriteCount + 1,
    }));

    mutate(
      { favorite: !isFavorite },
      {
        onError: () => {
          setFavoriteInfo(initialFavoriteState);
        },
      }
    );
  };

  const [debouncedToggleFavorite] = useTimeout(handleToggleFavorite, 200);

  return (
    <button
      type="button"
      className={favoriteButton}
      onClick={debouncedToggleFavorite}
      aria-label={`좋아요 ${currentFavoriteCount}개`}
    >
      <SvgIcon variant="favorite2" width={16} fill={isFavorite ? vars.colors.error : vars.colors.icon.light} />
      <Text as="span" className={isFavorite ? count.favorite : count.default}>
        {currentFavoriteCount}
      </Text>
    </button>
  );
};

export default ReviewFavoriteButton;
