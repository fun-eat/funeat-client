import { useState } from 'react';

import { favoriteButton } from './reviewFavoriteButton.css';

import { SvgIcon, Text } from '@/components/Common';
import { useToastActionContext } from '@/components/Common/Toast/context';
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

  const { toast } = useToastActionContext();
  const { mutate } = useReviewFavoriteMutation(productId, reviewId);

  const handleToggleFavorite = async () => {
    setFavoriteInfo((prev) => ({
      isFavorite: !prev.isFavorite,
      currentFavoriteCount: isFavorite ? prev.currentFavoriteCount - 1 : prev.currentFavoriteCount + 1,
    }));

    mutate(
      { favorite: !isFavorite },
      {
        onError: (error) => {
          setFavoriteInfo(initialFavoriteState);
          if (error instanceof Error) {
            toast.error(error.message);
            return;
          }

          toast.error('좋아요를 다시 시도해주세요.');
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
      <SvgIcon variant="favorite2" width={16} fill={isFavorite ? vars.colors.semantic.red : vars.colors.icon.light} />
      <Text as="span" color={isFavorite ? 'sub' : 'info'} size="caption1" weight="medium">
        {currentFavoriteCount}
      </Text>
    </button>
  );
};

export default ReviewFavoriteButton;
