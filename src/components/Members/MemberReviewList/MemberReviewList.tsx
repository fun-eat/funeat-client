import { useRef } from 'react';

import MemberReviewItem from '../MemberReviewItem/MemberReviewItem';

import { useIntersectionObserver } from '@/hooks/common';
import { useInfiniteMemberReviewQuery } from '@/hooks/queries/members';
import useDisplaySlice from '@/utils/displaySlice';

interface MemberReviewListProps {
  isPreview?: boolean;
}

const MemberReviewList = ({ isPreview = false }: MemberReviewListProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { fetchNextPage, hasNextPage, data } = useInfiniteMemberReviewQuery();
  const memberReviews = data.pages.flatMap((page) => page.reviews);
  const reviewsToDisplay = useDisplaySlice(isPreview, memberReviews);

  useIntersectionObserver<HTMLDivElement>(fetchNextPage, scrollRef, hasNextPage);

  // 추후 디자인 추가에 따라 변경 예정
  // if (totalReviewCount === 0) {
  //   return (
  //     <ErrorContainer>
  //       <Text size="lg" weight="bold">
  //         앗, 작성한 리뷰가 없네요 🥲
  //       </Text>
  //       <Spacing size={16} />
  //       <ReviewLink as={RouterLink} to={`${PATH.PRODUCT_LIST}/food`} block>
  //         리뷰 작성하러 가기
  //       </ReviewLink>
  //     </ErrorContainer>
  //   );
  // }

  return (
    <section>
      <div style={{ height: '20px' }} />
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
    </section>
  );
};

export default MemberReviewList;
