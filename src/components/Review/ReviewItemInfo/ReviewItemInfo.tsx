import { reviewImage } from './reviewItemInfo.css';

import { StarRating, TagList, Text } from '@/components/Common';
import type { Tag } from '@/types/common';

interface ReviewItemInfoProps {
  rating: number;
  createdAt: string;
  image: string | null;
  content: string;
  tags: Tag[];
}

const ReviewItemInfo = ({ rating, createdAt, image, content, tags }: ReviewItemInfoProps) => {
  return (
    <>
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

export default ReviewItemInfo;
