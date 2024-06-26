import { memo } from 'react';

import { favoriteWrapper, memberInfo } from './reviewItem.css';
import ReviewFavoriteButton from '../ReviewFavoriteButton/ReviewFavoriteButton';
import ReviewItemInfo from '../ReviewItemInfo/ReviewItemInfo';

import { Badge, Text } from '@/components/Common';
import { MemberImage } from '@/components/Members';
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
        <MemberImage src={profileImage} width={36} height={36} />
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
