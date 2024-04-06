import { Text, useTheme } from '@fun-eat/design-system';
import { memo } from 'react';
import styled from 'styled-components';

import { favoriteWrapper, memberImage, memberInfo, memberName } from './reviewItem.css';
import ReviewFavoriteButton from '../ReviewFavoriteButton/ReviewFavoriteButton';

import { Badge, SvgIcon, TagList } from '@/components/Common';
import { vars } from '@/styles/theme.css';
import type { Review } from '@/types/review';
import { getRelativeDate } from '@/utils/date';

interface ReviewItemProps {
  productId: number;
  review: Review;
}

const ReviewItem = ({ productId, review }: ReviewItemProps) => {
  const theme = useTheme();

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

      <ReviewerInfoWrapper>
        <RatingIconWrapper>
          {Array.from({ length: 5 }, (_, index) => (
            <SvgIcon
              key={`rating-${index}`}
              variant="star"
              fill={index < rating ? theme.colors.secondary : theme.colors.gray2}
              width={16}
              height={16}
            />
          ))}
          <Text as="span" size="sm" color={theme.textColors.info}>
            {getRelativeDate(createdAt)}
          </Text>
        </RatingIconWrapper>
      </ReviewerInfoWrapper>

      {image && <ReviewImage src={image} height={150} alt={`${userName}의 리뷰`} />}

      <ReviewContent>{content}</ReviewContent>

      <TagList tags={tags} />
    </div>
  );
};

export default memo(ReviewItem);

const ReviewItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
`;

const ReviewerWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ReviewerInfoWrapper = styled.div`
  display: flex;
  align-items: center;
  column-gap: 10px;
`;

const RatingIconWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: -2px;

  & > span {
    margin-left: 12px;
  }
`;

const ReviewImage = styled.img`
  align-self: center;
`;

const ReviewContent = styled(Text)`
  white-space: pre-wrap;
`;
