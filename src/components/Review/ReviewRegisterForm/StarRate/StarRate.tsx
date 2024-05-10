import { starIcon, starWrapper } from './starRate.css';

import { SvgIcon } from '@/components/Common';
import { useReviewFormActionContext } from '@/hooks/context';
import { useStarRatingHover } from '@/hooks/review';
import { itemTitle, requiredMark } from '@/styles/form.css';
import { vars } from '@/styles/theme.css';

const starList = Array.from({ length: 5 }, (_, index) => index + 1);

interface StarRateProps {
  rating: number;
}

const StarRate = ({ rating }: StarRateProps) => {
  const { hovering, handleMouseEnter, handleMouseLeave } = useStarRatingHover();
  const { handleReviewFormValue } = useReviewFormActionContext();

  const handleRating = (star: number) => {
    handleReviewFormValue({ target: 'rating', value: star });
  };

  return (
    <div>
      <h2 className={itemTitle} tabIndex={0}>
        별점
        <sup className={requiredMark} aria-label="필수 작성">
          *
        </sup>
      </h2>
      <div className={starWrapper}>
        {starList.map((star) => (
          <button
            type="button"
            key={star}
            onClick={() => handleRating(star)}
            onMouseEnter={() => handleMouseEnter(star)}
            onMouseLeave={handleMouseLeave}
            aria-label={`별점 ${star}점`}
          >
            <SvgIcon
              className={starIcon}
              variant="star2"
              width={30}
              height={30}
              fill={star <= (hovering || rating) ? vars.colors.icon.default : vars.colors.icon.light}
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default StarRate;
