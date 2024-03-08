import { memo } from 'react';

import {
  reviewRankingItemContainer,
  reviewRankingItemContent,
  reviewRankingItemImage,
  reviewRankingItemProductName,
  reviewRankingItemTag,
  reviewRankingItemTagList,
} from './reviewRankingItem.css';

import { REVIEW_CARD_DEFAULT_IMAGE_URL } from '@/constants/image';
import type { ReviewRanking } from '@/types/ranking';

interface ReviewRankingItemProps {
  reviewRanking: ReviewRanking;
}

const ReviewRankingItem = ({ reviewRanking }: ReviewRankingItemProps) => {
  const { productName, content, tags, image } = reviewRanking;

  return (
    <div className={reviewRankingItemContainer}>
      <img
        src={image ?? REVIEW_CARD_DEFAULT_IMAGE_URL}
        className={reviewRankingItemImage}
        width={166}
        height={90}
        alt={productName}
      />
      <div style={{ height: '8px' }} />
      <p className={reviewRankingItemProductName}>{productName}</p>
      <div style={{ height: '6px' }} />
      <p className={reviewRankingItemContent}>{content}</p>
      <div style={{ height: '10px' }} />
      <ul className={reviewRankingItemTagList}>
        {tags.map((tag) => (
          <li key={tag.id} className={reviewRankingItemTag}>
            <span>{tag.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default memo(ReviewRankingItem);
