import { useRef } from 'react';

import { commentCount } from './commentList.css';
import CommentItem from '../CommentItem/CommentItem';

import { useIntersectionObserver } from '@/hooks/common';
import { useInfiniteRecipeCommentQuery } from '@/hooks/queries/recipe';

interface CommentListProps {
  recipeId: number;
}

const CommentList = ({ recipeId }: CommentListProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const { fetchNextPage, hasNextPage, data } = useInfiniteRecipeCommentQuery(Number(recipeId));
  useIntersectionObserver<HTMLDivElement>(fetchNextPage, scrollRef, hasNextPage);

  const [{ totalElements }] = data.pages.flatMap((page) => page);
  const comments = data.pages.flatMap((page) => page.comments);

  return (
    <>
      <p className={commentCount}>댓글 {totalElements}개</p>
      {comments.map((comment) => (
        <CommentItem key={comment.id} recipeComment={comment} />
      ))}
      <div ref={scrollRef} style={{ height: '1px' }} aria-hidden />
    </>
  );
};

export default CommentList;
