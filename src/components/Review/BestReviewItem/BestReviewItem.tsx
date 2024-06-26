import { Spacing, Text, useTheme } from '@fun-eat/design-system';
import styled from 'styled-components';

import { SvgIcon } from '@/components/Common';
import { MemberImage } from '@/components/Members';
import { useBestReviewQuery } from '@/hooks/queries/rank';

interface BestReviewItemProps {
  productId: number;
}

const BestReviewItem = ({ productId }: BestReviewItemProps) => {
  const { data: bestReview } = useBestReviewQuery(productId);

  if (!bestReview) {
    return null;
  }

  const { profileImage, userName, rating, favoriteCount, content } = bestReview;

  const theme = useTheme();

  return (
    <>
      <Text weight="bold" align="center">
        ⭐️ 베스트 리뷰 ⭐️
      </Text>
      <Spacing size={10} />
      {Object.keys(bestReview).length !== 0 && (
        <BestReviewItemContainer>
          <ReviewRateFavoriteWrapper>
            <ReviewerInfoWrapper>
              <MemberImage src={profileImage} width={32} height={32} />
              <div>
                <Text size="sm" weight="bold">
                  {userName} 님
                </Text>
                {Array.from({ length: 5 }, (_, index) => (
                  <SvgIcon
                    key={`rating-${index}`}
                    variant="star"
                    fill={index < rating ? theme.colors.secondary : theme.colors.gray2}
                    width={16}
                    height={16}
                  />
                ))}
              </div>
            </ReviewerInfoWrapper>
            <FavoriteWrapper>
              <SvgIcon variant="favoriteFilled" fill="red" width={13} height={13} />
              <Text size="xs" color={theme.textColors.default} weight="bold">
                {favoriteCount}
              </Text>
            </FavoriteWrapper>
          </ReviewRateFavoriteWrapper>
          <Spacing size={12} />
          <ReviewText size="sm" color={theme.textColors.info}>
            {content}
          </ReviewText>
        </BestReviewItemContainer>
      )}
    </>
  );
};

export default BestReviewItem;

const BestReviewItemContainer = styled.div`
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.borderColors.disabled};
  border-radius: 5px;
`;

const ReviewRateFavoriteWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

const ReviewerInfoWrapper = styled.div`
  display: flex;
  align-items: center;
  column-gap: 10px;
`;

const FavoriteWrapper = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;

const ReviewText = styled(Text)`
  display: -webkit-inline-box;
  text-overflow: ellipsis;
  overflow: hidden;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;
