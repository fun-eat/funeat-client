import { useRef } from 'react';

import { container } from './reviewList.css';
import ReviewItem from '../ReviewItem/ReviewItem';

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
    return <Text>상품의 첫 리뷰를 작성해주세요</Text>;
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
