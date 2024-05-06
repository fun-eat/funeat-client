import { useRef } from 'react';

import { notFound, notFoundContainer } from './memberReviewList.css';
import MemberReviewItem from '../MemberReviewItem/MemberReviewItem';

import ReviewNotFoundImage from '@/assets/review-notfound.png';
import { Text } from '@/components/Common';
import { useIntersectionObserver } from '@/hooks/common';
import { useInfiniteMemberReviewQuery } from '@/hooks/queries/members';
import displaySlice from '@/utils/displaySlice';

interface MemberReviewListProps {
  isPreview?: boolean;
}

const MemberReviewList = ({ isPreview = false }: MemberReviewListProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { fetchNextPage, hasNextPage, data } = useInfiniteMemberReviewQuery();
  const memberReviews = data.pages.flatMap((page) => page.reviews);
  const reviewsToDisplay = displaySlice(isPreview, memberReviews);

  const totalReviewCount = data?.pages[0].page.totalDataCount;

  useIntersectionObserver<HTMLDivElement>(fetchNextPage, scrollRef, hasNextPage);

  if (totalReviewCount === 0) {
    return (
      <div className={notFoundContainer}>
        <div className={notFound}>
          <img src={ReviewNotFoundImage} width={100} alt="꿀조합이 없을 때 사진" />
          <Text size="headline" weight="semiBold" color="sub">
            작성한 리뷰가 없어요
          </Text>
          <Text size="caption4" weight="medium" color="disabled">
            새로운 리뷰를 작성해보세요
          </Text>
        </div>
      </div>
    );
  }

  return (
    <>
      <ul>
        {reviewsToDisplay.map((review) => (
          <>
            <li key={review.reviewId}>
              <MemberReviewItem review={review} />
            </li>
            <div style={{ height: '40px' }} />
          </>
        ))}
      </ul>
      <div ref={scrollRef} aria-hidden />
    </>
  );
};

export default MemberReviewList;
