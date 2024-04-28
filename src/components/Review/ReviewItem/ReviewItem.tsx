import { memo } from 'react';

import { favoriteWrapper, memberImage, memberInfo } from './reviewItem.css';
import ReviewFavoriteButton from '../ReviewFavoriteButton/ReviewFavoriteButton';
import ReviewItemInfo from '../ReviewItemInfo/ReviewItemInfo';

import { Badge, Text } from '@/components/Common';
import { vars } from '@/styles/theme.css';
import type { Review } from '@/types/review';

interface ReviewItemProps {
  productId: number;
  review: Review;
}

const ReviewItem = ({ productId, review }: ReviewItemProps) => {
  const { id, userName, profileImage, image, rating, tags, content, createdAt, rebuy, favorite, favoriteCount } =
    review;

  return (
    <div>
      <div className={memberInfo}>
        <img src={profileImage} className={memberImage} width={36} height={36} alt={`${userName}의 프로필`} />
        <Text weight="semiBold">{userName}</Text>
        {rebuy && (
          <Badge color={vars.colors.black} textColor={vars.colors.secondary1}>
            또 살래요
          </Badge>
        )}
        <div className={favoriteWrapper}>
          <ReviewFavoriteButton productId={productId} reviewId={id} favorite={favorite} favoriteCount={favoriteCount} />
        </div>
      </div>
      <div style={{ height: '12px' }} />

      <ReviewItemInfo rating={rating} createdAt={createdAt} image={image} content={content} tags={tags} />
    </div>
  );
};

export default memo(ReviewItem);
