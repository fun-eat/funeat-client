import { useToastActionContext } from '@fun-eat/design-system';
import type { MouseEventHandler } from 'react';
import { Link } from 'react-router-dom';

import { titleWrapper } from './memberReviewItem.css';

import { SvgIcon, Text } from '@/components/Common';
import { ReviewItemInfo } from '@/components/Review';
import { PATH } from '@/constants/path';
import { useDeleteReview } from '@/hooks/queries/members';
import { vars } from '@/styles/theme.css';
import type { MemberReview } from '@/types/review';

interface MemberReviewItemProps {
  review: MemberReview;
}

const MemberReviewItem = ({ review }: MemberReviewItemProps) => {
  const { mutate } = useDeleteReview();

  const { toast } = useToastActionContext();

  const { reviewId, productId, productName, rating, createdAt, image, content, tags } = review;

  const handleReviewDelete: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();

    const result = window.confirm('리뷰를 삭제하시겠습니까?');
    if (!result) {
      return;
    }

    mutate(reviewId, {
      onSuccess: () => {
        toast.success('리뷰를 삭제했습니다.');
      },
      onError: (error) => {
        if (error instanceof Error) {
          toast.error(error.message);
          return;
        }

        toast.error('리뷰 좋아요를 다시 시도해주세요.');
      },
    });
  };

  return (
    <>
      <div className={titleWrapper}>
        <Link to={`${PATH.PRODUCT_LIST}/detail/${productId}`}>
          <Text weight="semiBold">
            {productName}
            <SvgIcon variant="arrowRight" fill={vars.colors.gray5} width={16} height={12} />
          </Text>
        </Link>
        <button onClick={handleReviewDelete}>
          <Text as="span" size="caption4" weight="medium" color="disabled">
            삭제
          </Text>
        </button>
      </div>
      <div style={{ height: '11px' }} />

      <ReviewItemInfo rating={rating} createdAt={createdAt} image={image} content={content} tags={tags} />
    </>
  );
};

export default MemberReviewItem;
