import { useState } from 'react';
import type { FocusEventHandler, ChangeEventHandler } from 'react';

import { formInput } from './recipeNameInput.css';

import { SvgIcon, Text } from '@/components/Common';
import { useRecipeFormActionContext } from '@/hooks/context';
import { errorMessage, errorWrapper, itemTitle, requiredMark } from '@/styles/form.css';

const MIN_LENGTH = 1;
const MAX_LENGTH = 15;

interface RecipeNameInputProps {
  recipeName: string;
}

const RecipeNameInput = ({ recipeName }: RecipeNameInputProps) => {
  const { handleRecipeFormValue } = useRecipeFormActionContext();

  const [isTouched, setIsTouched] = useState(false);

  const handleRecipeName: ChangeEventHandler<HTMLInputElement> = (e) => {
    handleRecipeFormValue({ target: 'title', value: e.currentTarget.value });
  };

  const handleFocus: FocusEventHandler<HTMLInputElement> = () => {
    setIsTouched(false);
  };

  const handleBlur: FocusEventHandler<HTMLInputElement> = () => {
    setIsTouched(true);
  };

  const isValid = recipeName.trim().length >= MIN_LENGTH || !isTouched;

  return (
    <>
      <h2 className={itemTitle} tabIndex={0}>
        꿀조합 이름
        <sup className={requiredMark} aria-label="필수 작성">
          *
        </sup>
      </h2>
      <input
        className={formInput}
        placeholder="재치있는 이름을 지어주세요!"
        minLength={MIN_LENGTH}
        maxLength={MAX_LENGTH}
        value={recipeName}
        onChange={handleRecipeName}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
      <div style={{ height: 5 }} />

      <div className={isValid ? errorWrapper.hidden : errorWrapper.show}>
        <SvgIcon variant="error" width={12} height={12} fill="currentColor" />
        <Text size="caption4" weight="medium" className={errorMessage}>
          {MIN_LENGTH}자 이상의 제목을 입력해주세요!
        </Text>
      </div>
    </>
  );
};

export default RecipeNameInput;
