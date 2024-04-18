import { useToastActionContext } from '@fun-eat/design-system';
import type { ChangeEventHandler, FormEventHandler, RefObject } from 'react';
import { useRef, useState } from 'react';

import { commentForm, commentTextarea, container, profileImage, sendButton } from './commentForm.css';

import { SvgIcon, Text } from '@/components/Common';
import { useScroll } from '@/hooks/common';
import { useMemberQuery } from '@/hooks/queries/members';
import { useRecipeCommentMutation } from '@/hooks/queries/recipe';
import { vars } from '@/styles/theme.css';

interface CommentFormProps {
  recipeId: number;
  scrollTargetRef: RefObject<HTMLElement>;
}

const MAX_COMMENT_LENGTH = 200;

const CommentForm = ({ recipeId, scrollTargetRef }: CommentFormProps) => {
  const { data: member } = useMemberQuery();

  const [commentValue, setCommentValue] = useState('');
  const { mutate } = useRecipeCommentMutation(recipeId);

  const { toast } = useToastActionContext();

  const { scrollToPosition } = useScroll();

  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  const autoResizeTextarea = () => {
    if (textAreaRef.current) {
      textAreaRef.current.style.height = 'auto';
      textAreaRef.current.style.height = textAreaRef.current.scrollHeight + 'px';
    }
  };

  const handleCommentInput: ChangeEventHandler<HTMLTextAreaElement> = (e) => {
    setCommentValue(e.target.value);
    autoResizeTextarea();
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
      <img
        className={profileImage}
        src={member?.profileImage}
        width={29}
        height={29}
        alt={`${member?.nickname}의 프로필 사진`}
      />
      <>
        <form className={commentForm} onSubmit={handleSubmitComment}>
          <textarea
            className={commentTextarea}
            placeholder="댓글을 남겨보세요! (200자)"
            value={commentValue}
            onChange={handleCommentInput}
            maxLength={MAX_COMMENT_LENGTH}
            rows={1}
            ref={textAreaRef}
          />
          <Text size="caption4" color="disabled">
            {commentValue.length}/200
          </Text>
          <button className={commentValue.length === 0 ? sendButton['disabled'] : sendButton['active']}>
            <SvgIcon variant="plane" width={14} height={14} fill={vars.colors.white} />
          </button>
        </form>
      </>
    </div>
  );
};

export default CommentForm;
