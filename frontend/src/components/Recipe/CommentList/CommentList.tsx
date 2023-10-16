import { Heading, Spacing, Text, theme } from '@fun-eat/design-system';
import { useRef } from 'react';

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

  const comments = data.pages.flatMap((page) => page.comments);

  return (
    <section>
      <Heading as="h3" size="lg">
        댓글 ({comments.length}개)
      </Heading>
      <Spacing size={12} />
      {comments.length === 0 && <Text color={theme.textColors.info}>꿀조합의 첫번째 댓글을 달아보세요!</Text>}
      {comments.map((comment) => (
        <CommentItem key={comment.id} recipeComment={comment} />
      ))}
      <div ref={scrollRef} style={{ height: '1px' }} aria-hidden />
    </section>
  );
};

export default CommentList;
