import cx from 'classnames';
import { memo } from 'react';

import { container, reviewContent, reviewImage, reviewTitle, tagList, tag, tagExtra } from './reviewRankingItem.css';

import { REVIEW_CARD_DEFAULT_IMAGE_URL } from '@/constants/image';
import type { ReviewRanking } from '@/types/ranking';
import useDisplaySlice from '@/utils/displaySlice';

interface ReviewRankingItemProps {
  reviewRanking: ReviewRanking;
}

const TAG_DISPLAY_LIMIT = 2;

const ReviewRankingItem = ({ reviewRanking }: ReviewRankingItemProps) => {
  const { productName, content, tags, image } = reviewRanking;
  const tagToDisplay = useDisplaySlice(true, tags, TAG_DISPLAY_LIMIT);

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
        {tagToDisplay.map(({ id, name }) => (
          <li key={id} className={tag}>
            <span>{name}</span>
          </li>
        ))}
        {tags.length > TAG_DISPLAY_LIMIT && (
          <li className={cx(tag, tagExtra)}>
            <span>+</span>
          </li>
        )}
      </ul>
    </div>
  );
};

export default memo(ReviewRankingItem);
