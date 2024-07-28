import { useToastActionContext } from '@fun-eat/design-system';
import type { FormEventHandler } from 'react';
import { useNavigate } from 'react-router-dom';

import { tagAddButton, tagButton, tagList } from './reviewRegisterForm.css';
import StarRate from './StarRate/StarRate';
import RebuyCheckbox from '../RebuyCheckbox/RebuyCheckbox';

import { FormTextarea, ImageUploader, Spacing, SvgIcon, Text } from '@/components/Common';
import type { TagValue } from '@/contexts/ReviewFormContext';
import { useFormData, useImageUploader } from '@/hooks/common';
import { useReviewFormActionContext, useReviewFormValueContext } from '@/hooks/context';
import { useReviewRegisterFormMutation } from '@/hooks/queries/review';
import { itemTitle, requiredMark } from '@/styles/form.css';
import { vars } from '@/styles/theme.css';
import type { ReviewRequest } from '@/types/review';

interface ReviewRegisterFormProps {
  productId: number;
  openBottomSheet: () => void;
}

const ReviewRegisterForm = ({ productId, openBottomSheet }: ReviewRegisterFormProps) => {
  const { previewImage, imageFile, uploadImage, deleteImage } = useImageUploader();
  const navigate = useNavigate();

  const { formValue: reviewFormValue } = useReviewFormValueContext();
  const { handleReviewFormValue, resetReviewFormValue } = useReviewFormActionContext();
  const { toast } = useToastActionContext();

  const { mutate } = useReviewRegisterFormMutation(productId);

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
    <form id="review-form" onSubmit={handleSubmit}>
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
                <Text as="span" size="caption2" weight="medium">
                  {tag.name}
                </Text>
                <SvgIcon variant="close2" width={8} height={8} fill="none" stroke={vars.colors.gray4} />
              </button>
            </li>
          ))}
        </ul>
      </div>
      <Spacing size={32} />
      <FormTextarea
        content={reviewFormValue.content}
        onFormValue={handleReviewFormValue}
        placeholder="상품에 대한 솔직한 리뷰를 자유롭게 작성해주세요"
      />
      <Spacing size={32} />
      <RebuyCheckbox isRebuy={reviewFormValue.rebuy} />
    </form>
  );
};

export default ReviewRegisterForm;
