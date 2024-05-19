import { useRef } from 'react';

import { container, notFound } from './reviewList.css';
import ReviewItem from '../ReviewItem/ReviewItem';

import SearchNotFoundImage from '@/assets/search-notfound.png';
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
        <img src={SearchNotFoundImage} width={335} alt="검색 결과 없음" />
        <Text color="disabled" size="caption4">
          아직 작성된 리뷰가 없어요
        </Text>
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
