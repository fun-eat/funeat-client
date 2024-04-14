import { container, registerButton, registerButtonWrapper, section } from './reviewTagSheet.css';
import ReviewTagList from '../ReviewTagList/ReviewTagList';

import { MAX_DISPLAYED_TAGS_LENGTH, MIN_DISPLAYED_TAGS_LENGTH } from '@/constants';
import { useReviewFormValueContext } from '@/hooks/context';

interface ReviewTagSheetProps {
  close: () => void;
}

const ReviewTagSheet = ({ close }: ReviewTagSheetProps) => {
  const { tags } = useReviewFormValueContext();

  const isValid = tags.length >= MIN_DISPLAYED_TAGS_LENGTH && tags.length <= MAX_DISPLAYED_TAGS_LENGTH;

  return (
    <div className={container}>
      <section className={section}>
        <ReviewTagList />
      </section>
      <div className={registerButtonWrapper}>
        <button
          type="button"
          className={isValid ? registerButton.active : registerButton.disabled}
          disabled={!isValid}
          onClick={() => close()}
        >
          태그 선택 완료 {tags.length}/{MAX_DISPLAYED_TAGS_LENGTH}
        </button>
      </div>
    </div>
  );
};

export default ReviewTagSheet;