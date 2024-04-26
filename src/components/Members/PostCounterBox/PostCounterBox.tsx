import { Link } from 'react-router-dom';

import { border, box, container } from './postCounterBox.css';

import { Text } from '@/components/Common';
import { PATH } from '@/constants/path';

interface PostCounterBoxProps {
  recipeCount: number;
  reviewCount: number;
}

const PostCounterBox = ({ recipeCount, reviewCount }: PostCounterBoxProps) => {
  return (
    <div className={container}>
      <Link to={`${PATH.MEMBER}/post`} state="recipe">
        <div className={box}>
          <Text size="caption1" weight="medium" color="disabled">
            작성한 꿀조합
          </Text>
          <Text size="headline" weight="medium" color="sub">
            {recipeCount}개
          </Text>
        </div>
      </Link>
      <div className={border} />
      <Link to={`${PATH.MEMBER}/post`} state="review">
        <div className={box}>
          <Text size="caption1" weight="medium" color="disabled">
            작성한 리뷰
          </Text>
          <Text size="headline" weight="medium" color="sub">
            {reviewCount}개
          </Text>
        </div>
      </Link>
    </div>
  );
};

export default PostCounterBox;
