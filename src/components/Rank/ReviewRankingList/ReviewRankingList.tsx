import { Link } from 'react-router-dom';

import { container, reviewItemWrapper } from './reviewRankingList.css';
import ReviewRankingItem from '../ReviewRankingItem/ReviewRankingItem';

import { PATH } from '@/constants/path';
import { useGA } from '@/hooks/common';
import { useReviewRankingQuery } from '@/hooks/queries/rank';

const ReviewRankingList = () => {
  const {
    data: { reviews },
  } = useReviewRankingQuery();
  const { gaEvent } = useGA();

  const handleReviewRankingLinkClick = () => {
    gaEvent({ category: 'link', action: '리뷰 랭킹 링크 클릭', label: '랭킹' });
  };

  return (
    <ul className={container}>
      {reviews.map(({ reviewId, productName, content, tags, image }) => (
        <li key={reviewId} className={reviewItemWrapper}>
          <Link to={`${PATH.REVIEW}/${reviewId}`} onClick={handleReviewRankingLinkClick}>
            <ReviewRankingItem productName={productName} content={content} tags={tags} image={image} />
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default ReviewRankingList;
