import { useToastActionContext } from '@fun-eat/design-system';
import type { ChangeEventHandler, FormEventHandler, RefObject } from 'react';
import { useState } from 'react';

import { commentForm, commentTextarea, container } from './commentForm.css';

import CommentImage from '@/assets/comment.png';
import { useScroll } from '@/hooks/common';
import { useRecipeCommentMutation } from '@/hooks/queries/recipe';

interface CommentFormProps {
  recipeId: number;
  scrollTargetRef: RefObject<HTMLElement>;
}

const MAX_COMMENT_LENGTH = 200;

const CommentForm = ({ recipeId, scrollTargetRef }: CommentFormProps) => {
  const [commentValue, setCommentValue] = useState('');
  const { mutate } = useRecipeCommentMutation(recipeId);

  const { toast } = useToastActionContext();

  const { scrollToPosition } = useScroll();

  const handleCommentInput: ChangeEventHandler<HTMLTextAreaElement> = (e) => {
    setCommentValue(e.target.value);
  };

  const handleSubmitComment: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    mutate(
      { comment: commentValue },
      {
        onSuccess: () => {
          setCommentValue('');
          scrollToPosition(scrollTargetRef);
          toast.success('댓글이 등록되었습니다.');
        },
        onError: (error) => {
          if (error instanceof Error) {
            toast.error(error.message);
            return;
          }

          toast.error('댓글을 등록하는데 오류가 발생했습니다.');
        },
      }
    );
  };

  return (
    <div className={container}>
      <img src={CommentImage} width={29} height={29} />
      <form className={commentForm} onSubmit={handleSubmitComment}>
        <textarea
          className={commentTextarea}
          placeholder="댓글을 남겨보세요! (200자)"
          value={commentValue}
          onChange={handleCommentInput}
          maxLength={MAX_COMMENT_LENGTH}
        />
      </form>
    </div>
  );
};

export default CommentForm;
