import { Spacing, useToastActionContext } from '@fun-eat/design-system';
import type { FormEventHandler } from 'react';
import { useNavigate } from 'react-router-dom';

import { itemTitle, requiredMark, tagAddButton, tagButton, tagList } from './reviewRegisterForm.css';
import ReviewTextarea from './ReviewTextarea/ReviewTextarea';
import StarRate from './StarRate/StarRate';
import RebuyCheckbox from '../RebuyCheckbox/RebuyCheckbox';

import { ImageUploader, SvgIcon } from '@/components/Common';
import { MAX_DISPLAYED_TAGS_LENGTH } from '@/constants';
import type { TagValue } from '@/contexts/ReviewFormContext';
import { useFormData, useImageUploader } from '@/hooks/common';
import { useReviewFormActionContext, useReviewFormValueContext } from '@/hooks/context';
import { useReviewRegisterFormMutation } from '@/hooks/queries/review';
import { vars } from '@/styles/theme.css';
import type { ReviewRequest } from '@/types/review';

const MIN_RATING_SCORE = 0;
const MIN_SELECTED_TAGS_COUNT = 1;
const MIN_CONTENT_LENGTH = 0;

interface ReviewRegisterFormProps {
  productId: number;
  openBottomSheet: () => void;
}

const ReviewRegisterForm = ({ productId, openBottomSheet }: ReviewRegisterFormProps) => {
  const { isImageUploading, previewImage, imageFile, uploadImage, deleteImage } = useImageUploader();
  const navigate = useNavigate();

  const reviewFormValue = useReviewFormValueContext();
  const { handleReviewFormValue, resetReviewFormValue } = useReviewFormActionContext();
  const { toast } = useToastActionContext();

  const { mutate } = useReviewRegisterFormMutation(productId);

  const isValid =
    reviewFormValue.rating > MIN_RATING_SCORE &&
    reviewFormValue.tags.length >= MIN_SELECTED_TAGS_COUNT &&
    reviewFormValue.tags.length <= MAX_DISPLAYED_TAGS_LENGTH &&
    reviewFormValue.content.length > MIN_CONTENT_LENGTH &&
    !isImageUploading;

  const formValue: ReviewRequest = { ...reviewFormValue, tagIds: reviewFormValue.tags.map(({ id }) => id) };

  const formData = useFormData<ReviewRequest>({
    imageKey: 'image',
    imageFile: imageFile,
    formContentKey: 'reviewRequest',
    formContent: formValue,
  });

  const resetAndCloseForm = () => {
    deleteImage();
    resetReviewFormValue();
  };

  const handleTagSelect = (currentTag: TagValue) => () => {
    handleReviewFormValue({ target: 'tags', value: currentTag });
  };

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();

    mutate(formData, {
      onSuccess: () => {
        resetAndCloseForm();
        toast.success('📝 리뷰가 등록 됐어요');
        navigate(-1);
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
      <div>
        <h2 className={itemTitle} tabIndex={0}>
          태그
          <sup className={requiredMark} aria-label="필수 작성">
            *
          </sup>
        </h2>
        <button type="button" className={tagAddButton} onClick={openBottomSheet}>
          태그를 골라주세요 +
        </button>
        <ul className={tagList}>
          {reviewFormValue.tags.map((tag) => (
            <li key={tag.id}>
              <button type="button" onClick={handleTagSelect(tag)} className={tagButton}>
                <span>{tag.name}</span>
                <SvgIcon variant="close2" width={8} height={8} fill="none" stroke={vars.colors.gray4} />
              </button>
            </li>
          ))}
        </ul>
      </div>
      <Spacing size={32} />
      <ReviewTextarea content={reviewFormValue.content} />
      <Spacing size={32} />
      <RebuyCheckbox isRebuy={reviewFormValue.rebuy} />
    </form>
  );
};

export default ReviewRegisterForm;
