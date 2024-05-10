import { useState } from 'react';
import type { FocusEventHandler, ChangeEventHandler } from 'react';

import { container, currentLength, formTextarea, statusWrapper } from './formTextarea.css';

import { SvgIcon, Text } from '@/components/Common';
import { errorMessage, errorWrapper, itemTitle, requiredMark } from '@/styles/form.css';

const MIN_LENGTH = 10;
const MAX_LENGTH = 500;

interface FormActionParams<T> {
  target: keyof T;
  value: T[keyof T];
}

interface FormTextareaProps<T> {
  content: string;
  onFormValue: (params: FormActionParams<T>) => void;
  placeholder?: string;
}

const FormTextarea = <T,>({ content, onFormValue, placeholder }: FormTextareaProps<T>) => {
  const [isTouched, setIsTouched] = useState(false);

  const handleFormText: ChangeEventHandler<HTMLTextAreaElement> = (event) => {
    onFormValue({ target: 'content', value: event.currentTarget.value } as FormActionParams<T>);
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
        className={formTextarea}
        rows={5}
        placeholder={placeholder}
        minLength={MIN_LENGTH}
        maxLength={MAX_LENGTH}
        value={content}
        onChange={handleFormText}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
      <div className={statusWrapper}>
        <Text color="disabled" size="caption3" weight="medium" tabIndex={0}>
          <strong className={currentLength}>{content.length}</strong>/{MAX_LENGTH}
        </Text>
      </div>

      <div className={isValid ? errorWrapper.hidden : errorWrapper.show}>
        <SvgIcon variant="error" width={12} height={12} fill="currentColor" />
        <Text size="caption4" weight="medium" className={errorMessage}>
          다른 사람들을 위해 {MIN_LENGTH}자 이상의 리뷰를 작성해보는 건 어떨까요?
        </Text>
      </div>
    </div>
  );
};

export default FormTextarea;
