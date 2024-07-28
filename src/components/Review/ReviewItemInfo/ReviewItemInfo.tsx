import { reviewImage } from './reviewItemInfo.css';

import { Spacing, StarRating, TagList, Text } from '@/components/Common';
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
      <Spacing size={8} />

      {image && <img className={reviewImage} src={image} alt="작성한 리뷰" />}
      <Spacing size={8} />

      <Text size="caption2" color="sub">
        {content}
      </Text>
      <Spacing size={8} />

      <TagList tags={tags} />
    </>
  );
};

export default ReviewItemInfo;
