import type { FormEventHandler } from 'react';

import RecipeNameInput from '../RecipeNameInput/RecipeNameInput';
import RecipeUsedProducts from '../RecipeUsedProducts/RecipeUsedProducts';

import { FormTextarea, ImageUploader } from '@/components/Common';
import { useToastActionContext } from '@/components/Common/Toast/context';
import { useImageUploader, useFormData } from '@/hooks/common';
import { useRecipeFormValueContext, useRecipeFormActionContext } from '@/hooks/context';
import { useRecipeRegisterFormMutation } from '@/hooks/queries/recipe';
import { itemTitle } from '@/styles/form.css';
import type { RecipeRequest } from '@/types/recipe';

const RecipeRegisterForm = () => {
  const { previewImage, imageFile, uploadImage, deleteImage } = useImageUploader();

  const { formValue: recipeFormValue } = useRecipeFormValueContext();
  const { resetRecipeFormValue, handleRecipeFormValue } = useRecipeFormActionContext();
  const { toast } = useToastActionContext();

  const formData = useFormData<RecipeRequest>({
    imageKey: 'images',
    imageFile: imageFile === null ? imageFile : [imageFile],
    formContentKey: 'recipeRequest',
    formContent: recipeFormValue,
  });

  const { mutate } = useRecipeRegisterFormMutation();

  const resetAndCloseForm = () => {
    deleteImage();
    resetRecipeFormValue();
  };

  const handleRecipeFormSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();

    mutate(formData, {
      onSuccess: () => {
        resetAndCloseForm();
        toast.success('🍯 꿀조합이 등록 됐어요');
      },
      onError: (error) => {
        resetAndCloseForm();
        if (error instanceof Error) {
          toast.error(error.message);
          return;
        }

        toast.error('꿀조합 등록을 다시 시도해주세요');
      },
    });
  };

  return (
    <form id="recipe-form" onSubmit={handleRecipeFormSubmit}>
      <div>
        <h2 className={itemTitle} tabIndex={0}>
          사진 등록
        </h2>
        <ImageUploader previewImage={previewImage} uploadImage={uploadImage} deleteImage={deleteImage} />
      </div>
      <div style={{ height: 32 }} />

      <RecipeUsedProducts />
      <div style={{ height: 32 }} />

      <RecipeNameInput recipeName={recipeFormValue.title} />
      <div style={{ height: 32 }} />

      <FormTextarea
        content={recipeFormValue.content}
        onFormValue={handleRecipeFormValue}
        placeholder="조합된 상품, 조리 방법 등 만든 꿀조합에 대한 설명을 자유롭게 작성해주세요"
      />
    </form>
  );
};

export default RecipeRegisterForm;
