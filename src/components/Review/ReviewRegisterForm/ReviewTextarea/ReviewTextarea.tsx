import { useState } from 'react';
import type { FocusEventHandler, ChangeEventHandler } from 'react';

import { container, currentLength, errorMessage, reviewTextarea, statusWrapper } from './reviewTextarea.css';
import { itemTitle, requiredMark } from '../reviewRegisterForm.css';

import { Text } from '@/components/Common';
import { useReviewFormActionContext } from '@/hooks/context';

const MIN_LENGTH = 10;
const MAX_LENGTH = 500;

interface ReviewTextareaProps {
  content: string;
}

const ReviewTextarea = ({ content }: ReviewTextareaProps) => {
  const { handleReviewFormValue } = useReviewFormActionContext();
  const [isTouched, setIsTouched] = useState(false);

  const handleReviewText: ChangeEventHandler<HTMLTextAreaElement> = (event) => {
    handleReviewFormValue({ target: 'content', value: event.currentTarget.value });
  };

  const handleFocus: FocusEventHandler<HTMLTextAreaElement> = () => {
    setIsTouched(false);
  };

  const handleBlur: FocusEventHandler<HTMLTextAreaElement> = () => {
    setIsTouched(true);
  };

  const isValid = content.trim().length >= MIN_LENGTH || !isTouched;

  return (
    <div className={container}>
      <h2 className={itemTitle} tabIndex={0}>
        설명
        <sup className={requiredMark} aria-label="필수 작성">
          *
        </sup>
      </h2>

      <textarea
        className={reviewTextarea}
        rows={5}
        placeholder="조합된 상품, 조리 방법 등 만든 꿀조합에 대한 설명을 자유롭게 작성해주세요"
        minLength={MIN_LENGTH}
        maxLength={MAX_LENGTH}
        value={content}
        onChange={handleReviewText}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
      <div className={statusWrapper}>
        <Text color="disabled" size="caption3" weight="medium" tabIndex={0}>
          <strong className={currentLength}>{content.length}</strong>/{MAX_LENGTH}
        </Text>
      </div>

      <Text size="caption3" weight="medium" className={isValid ? errorMessage.hidden : errorMessage.show}>
        다른 사람들을 위해 {MIN_LENGTH}자 이상의 리뷰를 작성해보는 건 어떨까요?
      </Text>
    </div>
  );
};

export default ReviewTextarea;
