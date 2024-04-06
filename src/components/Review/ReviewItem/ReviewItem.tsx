import { memo } from 'react';
import styled from 'styled-components';

import {
  date,
  favoriteWrapper,
  memberImage,
  memberInfo,
  memberName,
  ratingInfo,
  ratingNumber,
  ratingWrapper,
} from './reviewItem.css';
import ReviewFavoriteButton from '../ReviewFavoriteButton/ReviewFavoriteButton';

import { Badge, SvgIcon, TagList, Text } from '@/components/Common';
import { vars } from '@/styles/theme.css';
import type { Review } from '@/types/review';
import { getRelativeDate } from '@/utils/date';

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
        <p className={memberName}>{userName}</p>
        {rebuy && (
          <Badge color={vars.colors.black} textColor={vars.colors.secondary1}>
            또 살래요
          </Badge>
        )}
        <div className={favoriteWrapper}>
          <ReviewFavoriteButton productId={productId} reviewId={id} favorite={favorite} favoriteCount={favoriteCount} />
        </div>
      </div>

      <div className={ratingWrapper}>
        <div className={ratingInfo}>
          <Text as="span" className={ratingNumber}>
            {rating.toFixed(1)}
          </Text>
          {Array.from({ length: 5 }, (_, index) => (
            <SvgIcon
              key={`rating-${index}`}
              variant="star2"
              fill={index < rating ? vars.colors.icon.fill : vars.colors.icon.light}
              width={13}
              height={13}
            />
          ))}
        </div>
        <Text as="span" className={date}>
          {getRelativeDate(createdAt)}
        </Text>
      </div>

      {image && <ReviewImage src={image} height={150} alt={`${userName}의 리뷰`} />}

      <ReviewContent>{content}</ReviewContent>

      <TagList tags={tags} />
    </div>
  );
};

export default memo(ReviewItem);

const ReviewImage = styled.img`
  align-self: center;
`;

const ReviewContent = styled(Text)`
  white-space: pre-wrap;
`;
