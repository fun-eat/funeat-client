import { date, ratingInfo, ratingNumber, ratingWrapper } from './starRating.css';
import SvgIcon from '../Svg/SvgIcon';
import Text from '../Text/Text';

import { vars } from '@/styles/theme.css';
import { getRelativeDate } from '@/utils/date';

interface StarRatingProps {
  rating: number;
  createdAt: string;
}

const StarRating = ({ rating, createdAt }: StarRatingProps) => {
  return (
    <div className={ratingWrapper}>
      <div className={ratingInfo}>
        <Text as="span" size="caption3" weight="medium" className={ratingNumber}>
          {rating.toFixed(1)}
        </Text>
        {Array.from({ length: 5 }, (_, index) => (
          <SvgIcon
            key={`rating-${index}`}
            variant="star2"
            fill={index < rating ? vars.colors.icon.fill : vars.colors.icon.light}
            width={13}
            height={13}
          />
        ))}
      </div>
      <Text as="span" size="caption4" color="disabled" className={date}>
        {getRelativeDate(createdAt)}
      </Text>
    </div>
  );
};

export default StarRating;
