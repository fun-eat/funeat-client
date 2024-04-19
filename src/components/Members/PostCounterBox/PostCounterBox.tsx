import { border, box, container } from './postCounterBox.css';

import { Text } from '@/components/Common';

interface PostCounterBoxProps {
  recipeCount: number;
  reviewCount: number;
}

const PostCounterBox = ({ recipeCount, reviewCount }: PostCounterBoxProps) => {
  return (
    <div className={container}>
      <div className={box}>
        <Text size="caption1" weight="medium" color="disabled">
          작성한 꿀조합
        </Text>
        <Text size="headline" weight="medium" color="sub">
          {recipeCount}개
        </Text>
      </div>
      <div className={border} />
      <div className={box}>
        <Text size="caption1" weight="medium" color="disabled">
          작성한 리뷰
        </Text>
        <Text size="headline" weight="medium" color="sub">
          {reviewCount}개
        </Text>
      </div>
    </div>
  );
};

export default PostCounterBox;
