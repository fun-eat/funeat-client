import { memo } from 'react';

import { reviewImage, tagList, tag, tagName, reviewContent } from './reviewRankingItem.css';

import { Text } from '@/components/Common';
import { REVIEW_CARD_DEFAULT_IMAGE_URL } from '@/constants/image';
import { ellipsis } from '@/styles/common.css';
import type { ReviewRanking } from '@/types/ranking';
import displaySlice from '@/utils/displaySlice';

interface ReviewRankingItemProps {
  productName: ReviewRanking['productName'];
  content: ReviewRanking['content'];
  tags: ReviewRanking['tags'];
  image: ReviewRanking['image'];
}

const TAG_DISPLAY_LIMIT = 2;

const ReviewRankingItem = ({ productName, content, tags, image }: ReviewRankingItemProps) => {
  const tagToDisplay = displaySlice(true, tags, TAG_DISPLAY_LIMIT);

  return (
    <div>
      {image !== null && (
        <img src={image === '' ? REVIEW_CARD_DEFAULT_IMAGE_URL : image} className={reviewImage} alt={productName} />
      )}
      <div style={{ height: '8px' }} />
      <Text className={ellipsis} color="sub" size="caption2" weight="semiBold">
        {productName}
      </Text>
      <div style={{ height: '4px' }} />
      <Text color="info" size="caption4" className={reviewContent}>
        {content}
      </Text>
      <div style={{ height: '10px' }} />
      <ul className={tagList}>
        {tagToDisplay.map(({ id, name }) => (
          <li key={id} className={tag}>
            <Text as="span" size="caption4" weight="medium" className={tagName}>
              {name}
            </Text>
          </li>
        ))}
        {tags.length > TAG_DISPLAY_LIMIT && (
          <li className={tag}>
            <Text as="span" size="caption4" weight="medium" className={tagName}>
              +
            </Text>
          </li>
        )}
      </ul>
    </div>
  );
};

export default memo(ReviewRankingItem);
