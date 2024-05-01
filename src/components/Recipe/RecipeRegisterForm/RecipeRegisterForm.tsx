import { useToastActionContext } from '@fun-eat/design-system';
import type { FormEventHandler } from 'react';
import { Link } from 'react-router-dom';

import { addProduct } from './recipeRegisterForm.css';

import { FormTextarea, ImageUploader, Text } from '@/components/Common';
import { PATH } from '@/constants/path';
import { useImageUploader, useFormData } from '@/hooks/common';
import { useRecipeFormValueContext, useRecipeFormActionContext } from '@/hooks/context';
import { useRecipeRegisterFormMutation } from '@/hooks/queries/recipe';
import { itemTitle, requiredMark } from '@/styles/form.css';
import type { RecipeRequest } from '@/types/recipe';

const RecipeRegisterForm = () => {
  const { previewImage, imageFile, uploadImage, deleteImage } = useImageUploader();

  const recipeFormValue = useRecipeFormValueContext();
  const { resetRecipeFormValue, handleRecipeFormValue } = useRecipeFormActionContext();
  const { toast } = useToastActionContext();

  const formData = useFormData<RecipeRequest>({
    imageKey: 'images',
    imageFile: imageFile === null ? imageFile : [imageFile],
    formContentKey: 'recipeRequest',
    formContent: recipeFormValue,
  });

  const { mutate, isLoading } = useRecipeRegisterFormMutation();

  const isValid =
    recipeFormValue.title.length > 0 && recipeFormValue.content.length > 0 && recipeFormValue.productIds.length > 0;

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

      <h2 className={itemTitle} tabIndex={0}>
        사용한 상품
        <sup className={requiredMark} aria-label="필수 작성">
          *
        </sup>
      </h2>
      <div style={{ height: 8 }} />
      <Link to={`${PATH.SEARCH}`} className={addProduct}>
        <Text size="caption1" weight="medium" color="info">
          상품 추가
        </Text>
      </Link>
      <div style={{ height: 32 }} />

      <h2 className={itemTitle} tabIndex={0}>
        꿀조합 이름
        <sup className={requiredMark} aria-label="필수 작성">
          *
        </sup>
      </h2>
      <div style={{ height: 32 }} />

      <FormTextarea content={recipeFormValue.content} onFormValue={handleRecipeFormValue} />
    </form>
  );
};

export default RecipeRegisterForm;
