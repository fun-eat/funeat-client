import { Spacing, Text, useTheme } from '@fun-eat/design-system';
import { memo } from 'react';
import styled from 'styled-components';

import { SvgIcon } from '@/components/Common';
import type { ReviewRanking } from '@/types/ranking';
import { getRelativeDate } from '@/utils/date';

interface ReviewRankingItemProps {
  reviewRanking: ReviewRanking;
}

const ReviewRankingItem = ({ reviewRanking }: ReviewRankingItemProps) => {
  const theme = useTheme();

  const { productName, content, tags, image } = reviewRanking;

  return (
    <ReviewRankingItemContainer>
      <Text size="sm" weight="bold">
        {productName}
      </Text>
    </ReviewRankingItemContainer>
  );
};

export default memo(ReviewRankingItem);

const ReviewRankingItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 12px;
  border: ${({ theme }) => `1px solid ${theme.borderColors.disabled}`};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
`;

const ReviewText = styled(Text)`
  display: -webkit-inline-box;
  text-overflow: ellipsis;
  overflow: hidden;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

const FavoriteStarWrapper = styled.div`
  display: flex;
  gap: 4px;
`;

const FavoriteIconWrapper = styled.div`
  display: flex;
  gap: 4px;
  align-items: center;
`;

const RatingIconWrapper = styled.div`
  display: flex;
  gap: 2px;
  align-items: center;

  & > svg {
    padding-bottom: 2px;
  }
`;

const ReviewDate = styled(Text)`
  margin-left: auto;
`;
