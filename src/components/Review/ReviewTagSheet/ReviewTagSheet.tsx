import { registerButton, registerButtonWrapper, section } from './reviewTagSheet.css';
import ReviewTagList from '../ReviewTagList/ReviewTagList';

import { MIN_DISPLAYED_TAGS_LENGTH } from '@/constants';
import { useReviewFormValueContext } from '@/hooks/context';

const ReviewTagSheet = () => {
  const { tags } = useReviewFormValueContext();

  const isValid = tags.length === MIN_DISPLAYED_TAGS_LENGTH;

  return (
    <>
      <section className={section}>
        <ReviewTagList />
      </section>
      <div className={registerButtonWrapper}>
        <button type="button" className={isValid ? registerButton.active : registerButton.disabled}>
          태그 선택 완료 {tags.length}/{MIN_DISPLAYED_TAGS_LENGTH}
        </button>
      </div>
    </>
  );
};

export default ReviewTagSheet;
