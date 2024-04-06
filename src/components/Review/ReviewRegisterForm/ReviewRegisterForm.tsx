import { Button, Heading, Spacing, Text, theme, useToastActionContext } from '@fun-eat/design-system';
import type { FormEventHandler, RefObject } from 'react';
import styled from 'styled-components';

import { itemTitle } from './reviewRegisterForm.css';
import StarRate from './StarRate/StarRate';
import RebuyCheckbox from '../RebuyCheckbox/RebuyCheckbox';
import ReviewTagList from '../ReviewTagList/ReviewTagList';
import ReviewTextarea from '../ReviewTextarea/ReviewTextarea';

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
      <Spacing size={60} />
      <ReviewTagList selectedTags={reviewFormValue.tagIds} />
      <Spacing size={60} />
      <ReviewTextarea content={reviewFormValue.content} />
      <Spacing size={80} />
      <RebuyCheckbox />
      <Spacing size={16} />
      <Text size="sm" color={theme.textColors.disabled}>
        [작성시 유의사항] 신뢰성 확보에 저해되는 게시물은 삭제하거나 보이지 않게 할 수 있습니다.
      </Text>
    </form>
  );
};

export default ReviewRegisterForm;

const ReviewRegisterFormContainer = styled.div`
  position: relative;
  height: 100%;
`;

const ReviewHeading = styled(Heading)`
  height: 80px;
  font-size: 2.4rem;
  line-height: 80px;
  text-align: center;
`;

const CloseButton = styled(Button)`
  position: absolute;
  top: 24px;
  right: 32px;
`;

const ProductOverviewItemWrapper = styled.div`
  margin: 15px 0;
`;

const RegisterForm = styled.form`
  padding: 50px 20px;
`;

const ReviewImageUploaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FormButton = styled(Button)`
  color: ${({ theme, disabled }) => (disabled ? theme.colors.white : theme.colors.black)};
  background: ${({ theme, disabled }) => (disabled ? theme.colors.gray3 : theme.colors.primary)};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
`;
