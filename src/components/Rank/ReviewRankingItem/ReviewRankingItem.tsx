import { memo } from 'react';

import { container, reviewContent, reviewImage, reviewTitle, tagList, tag } from './reviewRankingItem.css';

import { REVIEW_CARD_DEFAULT_IMAGE_URL } from '@/constants/image';
import type { ReviewRanking } from '@/types/ranking';

interface ReviewRankingItemProps {
  reviewRanking: ReviewRanking;
}

const ReviewRankingItem = ({ reviewRanking }: ReviewRankingItemProps) => {
  const { productName, content, tags, image } = reviewRanking;

  return (
    <div className={container}>
      <img
        src={image ?? REVIEW_CARD_DEFAULT_IMAGE_URL}
        className={reviewImage}
        width={166}
        height={90}
        alt={productName}
      />
      <div style={{ height: '8px' }} />
      <p className={reviewTitle}>{productName}</p>
      <div style={{ height: '6px' }} />
      <p className={reviewContent}>{content}</p>
      <div style={{ height: '10px' }} />
      <ul className={tagList}>
        {tags.map(({ id, name }) => (
          <li key={id} className={tag}>
            <span>{name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default memo(ReviewRankingItem);
