import { useToastActionContext } from '@fun-eat/design-system';
import type { PropsWithChildren } from 'react';
import { createContext, useState } from 'react';

import { MAX_DISPLAYED_TAGS_LENGTH } from '@/constants';
import type { ReviewRequest } from '@/types/review';

export interface TagValue {
  id: number;
  name: string;
}

type ReviewFormValue = Omit<ReviewRequest, 'tagIds'> & { tags: TagValue[] };
type ReviewFormValues = Exclude<ReviewFormValue[keyof ReviewFormValue], TagValue[]> | TagValue;

interface ReviewFormActionParams {
  target: keyof ReviewFormValue;
  value: ReviewFormValues;
}

interface ReviewFormAction {
  handleReviewFormValue: (params: ReviewFormActionParams) => void;
  resetReviewFormValue: () => void;
}

const initialReviewFormValue: ReviewFormValue = {
  rating: 0,
  tags: [],
  content: '',
  rebuy: false,
};

const MIN_RATING_SCORE = 0;
const MIN_SELECTED_TAGS_COUNT = 1;
const MIN_CONTENT_LENGTH = 0;

const isTagValue = (value: ReviewFormValues): value is TagValue =>
  typeof value === 'object' && 'id' in value && 'name' in value;
const isSelectedTag = (tags: TagValue[], selectedTag: TagValue) => tags.some(({ id }) => id === selectedTag.id);

export const ReviewFormValueContext = createContext<ReviewFormValue | null>(null);
export const ReviewFormActionContext = createContext<ReviewFormAction | null>(null);

const ReviewFormProvider = ({ children }: PropsWithChildren) => {
  const [reviewFormValue, setReviewFormValue] = useState(initialReviewFormValue);
  const { toast } = useToastActionContext();

  const isValid =
    reviewFormValue.rating > MIN_RATING_SCORE &&
    reviewFormValue.tags.length >= MIN_SELECTED_TAGS_COUNT &&
    reviewFormValue.tags.length <= MAX_DISPLAYED_TAGS_LENGTH &&
    reviewFormValue.content.length > MIN_CONTENT_LENGTH;

  const handleReviewFormValue = ({ target, value }: ReviewFormActionParams) => {
    setReviewFormValue((prev) => {
      const targetValue = prev[target];

      if (isTagValue(value) && Array.isArray(targetValue)) {
        if (targetValue.length >= MAX_DISPLAYED_TAGS_LENGTH && !isSelectedTag(targetValue, value)) {
          toast.error(`태그는 ${MAX_DISPLAYED_TAGS_LENGTH}개까지 선택할 수 있습니다`);
          return prev;
        }

        if (isSelectedTag(targetValue, value)) {
          return { ...prev, [target]: targetValue.filter((tagId) => tagId !== value) };
        }

        return { ...prev, [target]: [...targetValue, value] };
      }

      return { ...prev, [target]: value };
    });
  };

  const resetReviewFormValue = () => {
    setReviewFormValue(initialReviewFormValue);
  };

  const reviewFormAction = {
    handleReviewFormValue,
    resetReviewFormValue,
  };

  return (
    <ReviewFormActionContext.Provider value={reviewFormAction}>
      <ReviewFormValueContext.Provider value={reviewFormValue}>{children}</ReviewFormValueContext.Provider>
    </ReviewFormActionContext.Provider>
  );
};

export default ReviewFormProvider;
