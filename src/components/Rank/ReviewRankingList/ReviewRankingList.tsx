import { BottomSheet, useBottomSheet } from '@fun-eat/design-system';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import { bottomSheetWrapper, container, productLink, reviewItemWrapper } from './reviewRankingList.css';
import ReviewRankingItem from '../ReviewRankingItem/ReviewRankingItem';

import { Text } from '@/components/Common';
import { ReviewItem } from '@/components/Review';
import { PATH } from '@/constants/path';
import { useReviewRankingQuery } from '@/hooks/queries/rank';
import { vars } from '@/styles/theme.css';
import type { ReviewDetail } from '@/types/review';

const ReviewRankingList = () => {
  const {
    data: { reviews },
  } = useReviewRankingQuery();
  const { isOpen, isClosing, handleOpenBottomSheet, handleCloseBottomSheet } = useBottomSheet();

  const [selectedReview, setSelectedReview] = useState<{ productId: number; review: ReviewDetail }>();

  const handleReviewRankingItemClick = (productId: number, review: ReviewDetail) => {
    handleOpenBottomSheet();
    setSelectedReview({ productId, review });
  };

  return (
    <>
      <ul className={container}>
        {reviews.map((review) => (
          <li
            key={review.id}
            className={reviewItemWrapper}
            onClick={() => handleReviewRankingItemClick(review.productId, review)}
          >
            <ReviewRankingItem
              productName={review.productName}
              content={review.content}
              tags={review.tags}
              image={review.image}
            />
          </li>
        ))}
      </ul>
      {selectedReview && (
        <BottomSheet isOpen={isOpen} isClosing={isClosing} close={handleCloseBottomSheet}>
          <div className={bottomSheetWrapper}>
            <ReviewItem productId={selectedReview.productId} review={selectedReview.review} />
            <hr style={{ height: '1px', background: `${vars.colors.border.default}`, border: 0, margin: '12px 0' }} />
            <Link to={`${PATH.PRODUCT_LIST}/detail/${selectedReview?.productId}`} className={productLink}>
              <Text weight="semiBold" color="white">
                상품 바로가기
              </Text>
            </Link>
          </div>
        </BottomSheet>
      )}
    </>
  );
};

export default ReviewRankingList;
