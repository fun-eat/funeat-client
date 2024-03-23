import { commentItem, container } from './commentItem.css';

import type { Comment } from '@/types/recipe';

interface CommentItemProps {
  recipeComment: Comment;
}

const CommentItem = ({ recipeComment }: CommentItemProps) => {
  const { author, comment } = recipeComment;

  return (
    <li className={container}>
      <span className={commentItem['nickname']}>{author.nickname}</span>
      <p className={commentItem['content']}>{comment}</p>
    </li>
  );
};

export default CommentItem;
