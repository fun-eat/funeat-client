import { useRef } from 'react';

import { container, notFound } from './reviewList.css';
import ReviewItem from '../ReviewItem/ReviewItem';

import ReviewNotFoundImage from '@/assets/review-notfound.png';
import { Loading, Text } from '@/components/Common';
import { useIntersectionObserver } from '@/hooks/common';
import { useInfiniteProductReviewsQuery } from '@/hooks/queries/product';
import type { SortOption } from '@/types/common';

interface ReviewListProps {
  productId: number;
  selectedOption: SortOption;
}

const ReviewList = ({ productId, selectedOption }: ReviewListProps) => {
  const { fetchNextPage, hasNextPage, data, isFetchingNextPage } = useInfiniteProductReviewsQuery(
    productId,
    selectedOption.value
  );
  const scrollRef = useRef<HTMLDivElement>(null);
  useIntersectionObserver<HTMLDivElement>(fetchNextPage, scrollRef, hasNextPage);

  const reviews = data.pages.flatMap((page) => page.reviews);

  if (reviews.length === 0) {
    return (
      <div className={notFound}>
        <div style={{ height: 52 }} />
        <img src={ReviewNotFoundImage} width={117} alt="검색 결과 없음" />
        <div style={{ height: 25 }} />
        <Text color="disabled" size="caption4">
          새로운 리뷰를 작성해주세요
        </Text>
        <div style={{ height: 20 }} />
      </div>
    );
  }

  return (
    <>
      <ul className={container}>
        {reviews.map((review) => (
          <li key={review.id}>
            <ReviewItem productId={productId} review={review} />
          </li>
        ))}
      </ul>
      <div ref={scrollRef} aria-hidden />
      {isFetchingNextPage && <Loading />}
    </>
  );
};

export default ReviewList;
