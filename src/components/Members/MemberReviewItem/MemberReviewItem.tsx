import { useToastActionContext } from '@fun-eat/design-system';
import type { MouseEventHandler } from 'react';
import { Link } from 'react-router-dom';

import { reviewImage, titleWrapper } from './memberReviewItem.css';

import { StarRating, SvgIcon, TagList, Text } from '@/components/Common';
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

      <StarRating rating={rating} createdAt={createdAt} />
      <div style={{ height: '8px' }} />

      {image && <img className={reviewImage} src={image} alt="작성한 리뷰" />}
      <div style={{ height: '8px' }} />

      <Text size="caption2" color="sub">
        {content}
      </Text>
      <div style={{ height: '8px' }} />

      <TagList tags={tags} />
    </>
  );
};

export default MemberReviewItem;
