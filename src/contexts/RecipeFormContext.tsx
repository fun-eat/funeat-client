import type { PropsWithChildren } from 'react';
import { createContext, useState } from 'react';

import type { RecipeProduct, RecipeRequest } from '@/types/recipe';

type FormValue = Omit<RecipeRequest, 'productIds'> & { products: RecipeProduct[] };
type FormValues = Exclude<FormValue[keyof FormValue], RecipeProduct[]> | RecipeProduct;

interface RecipeFormActionParams {
  target: keyof FormValue;
  value: FormValues;
  action?: 'add' | 'remove';
}

interface RecipeFormValue {
  isValid: boolean;
  formValue: FormValue;
}

interface RecipeFormAction {
  handleRecipeFormValue: (params: RecipeFormActionParams) => void;
  resetRecipeFormValue: () => void;
}

const initialFormValue: FormValue = {
  title: '',
  products: [],
  content: '',
};

const MIN_USED_PRODUCTS = 1;
const MIN_TITLE_LENGTH = 2;
const MIN_CONTENT_LENGTH = 10;

const isProductValue = (value: FormValues): value is RecipeProduct => typeof value === 'object';

export const RecipeFormValueContext = createContext<RecipeFormValue | null>(null);
export const RecipeFormActionContext = createContext<RecipeFormAction | null>(null);

const RecipeFormProvider = ({ children }: PropsWithChildren) => {
  const [formValue, setFormValue] = useState(initialFormValue);

  const isValid =
    formValue.products.length >= MIN_USED_PRODUCTS &&
    formValue.title.length >= MIN_TITLE_LENGTH &&
    formValue.content.length >= MIN_CONTENT_LENGTH;

  const handleRecipeFormValue = ({ target, value, action }: RecipeFormActionParams) => {
    setFormValue((prev) => {
      const targetValue = prev[target];

      if (isProductValue(value) && Array.isArray(targetValue)) {
        if (action === 'remove') {
          return { ...prev, [target]: targetValue.filter((id) => id !== value) };
        }

        return { ...prev, [target]: [...targetValue, value] };
      }

      return { ...prev, [target]: value };
    });
  };

  const resetRecipeFormValue = () => {
    setFormValue(initialFormValue);
  };

  const value = {
    isValid,
    formValue,
  };

  const recipeFormAction = {
    handleRecipeFormValue,
    resetRecipeFormValue,
  };

  return (
    <RecipeFormActionContext.Provider value={recipeFormAction}>
      <RecipeFormValueContext.Provider value={value}>{children}</RecipeFormValueContext.Provider>
    </RecipeFormActionContext.Provider>
  );
};

export default RecipeFormProvider;
