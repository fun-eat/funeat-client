import type { ChangeEventHandler } from 'react';
import styled from 'styled-components';

import { container, currentLength, reviewTextarea, status, statusWrapper } from './reviewTextarea.css';
import { itemTitle, requiredMark } from '../reviewRegisterForm.css';

import { Text } from '@/components/Common';
import { useReviewFormActionContext } from '@/hooks/context';

const MAX_LENGTH = 200;

interface ReviewTextareaProps {
  content: string;
}

const ReviewTextarea = ({ content }: ReviewTextareaProps) => {
  const { handleReviewFormValue } = useReviewFormActionContext();

  const handleReviewText: ChangeEventHandler<HTMLTextAreaElement> = (event) => {
    handleReviewFormValue({ target: 'content', value: event.currentTarget.value });
  };

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
        maxLength={MAX_LENGTH}
        value={content}
        onChange={handleReviewText}
      />
      <div className={statusWrapper}>
        <Text className={status} tabIndex={0}>
          <strong className={currentLength}>{content.length}</strong>/{MAX_LENGTH}
        </Text>
      </div>
    </div>
  );
};

export default ReviewTextarea;

const ReviewTextareaContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const RequiredMark = styled.sup`
  color: ${({ theme }) => theme.colors.error};
`;
