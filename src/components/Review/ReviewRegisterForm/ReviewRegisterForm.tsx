import { Spacing, useToastActionContext } from '@fun-eat/design-system';
import type { FormEventHandler, RefObject } from 'react';

import { itemTitle } from './reviewRegisterForm.css';
import ReviewTextarea from './ReviewTextarea/ReviewTextarea';
import StarRate from './StarRate/StarRate';
import RebuyCheckbox from '../RebuyCheckbox/RebuyCheckbox';
import ReviewTagList from '../ReviewTagList/ReviewTagList';

import { ImageUploader } from '@/components/Common';
import { MIN_DISPLAYED_TAGS_LENGTH } from '@/constants';
import { useFormData, useImageUploader, useScroll } from '@/hooks/common';
import { useReviewFormActionContext, useReviewFormValueContext } from '@/hooks/context';
import { useProductDetailQuery } from '@/hooks/queries/product';
import { useReviewRegisterFormMutation } from '@/hooks/queries/review';
import type { ReviewRequest } from '@/types/review';

const MIN_RATING_SCORE = 0;
const MIN_SELECTED_TAGS_COUNT = 1;
const MIN_CONTENT_LENGTH = 0;

interface ReviewRegisterFormProps {
  productId: number;
  targetRef: RefObject<HTMLElement>;
  closeReviewDialog: () => void;
  initTabMenu: () => void;
}

const ReviewRegisterForm = ({ productId, targetRef, closeReviewDialog, initTabMenu }: ReviewRegisterFormProps) => {
  const { scrollToPosition } = useScroll();
  const { isImageUploading, previewImage, imageFile, uploadImage, deleteImage } = useImageUploader();

  const reviewFormValue = useReviewFormValueContext();
  const { resetReviewFormValue } = useReviewFormActionContext();
  const { toast } = useToastActionContext();

  const { data: productDetail } = useProductDetailQuery(productId);
  const { mutate, isLoading } = useReviewRegisterFormMutation(productId);

  const isValid =
    reviewFormValue.rating > MIN_RATING_SCORE &&
    reviewFormValue.tagIds.length >= MIN_SELECTED_TAGS_COUNT &&
    reviewFormValue.tagIds.length <= MIN_DISPLAYED_TAGS_LENGTH &&
    reviewFormValue.content.length > MIN_CONTENT_LENGTH &&
    !isImageUploading;

  const formData = useFormData<ReviewRequest>({
    imageKey: 'image',
    imageFile: imageFile,
    formContentKey: 'reviewRequest',
    formContent: reviewFormValue,
  });

  const resetAndCloseForm = () => {
    deleteImage();
    resetReviewFormValue();
    closeReviewDialog();
  };

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();

    mutate(formData, {
      onSuccess: () => {
        resetAndCloseForm();
        initTabMenu();
        scrollToPosition(targetRef);
        toast.success('📝 리뷰가 등록 됐어요');
      },
      onError: (error) => {
        resetAndCloseForm();
        if (error instanceof Error) {
          toast.error(error.message);
          return;
        }

        toast.error('리뷰 등록을 다시 시도해주세요');
      },
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <h2 className={itemTitle} tabIndex={0}>
          사진 등록
        </h2>
        <ImageUploader previewImage={previewImage} uploadImage={uploadImage} deleteImage={deleteImage} />
      </div>
      <Spacing size={32} />
      <StarRate rating={reviewFormValue.rating} />
      <Spacing size={32} />
      <ReviewTagList selectedTags={reviewFormValue.tagIds} />
      <Spacing size={32} />
      <ReviewTextarea content={reviewFormValue.content} />
      <Spacing size={32} />
      <RebuyCheckbox isRebuy={reviewFormValue.rebuy} />
    </form>
  );
};

export default ReviewRegisterForm;
