import { container, nickname } from './commentItem.css';

import { Text } from '@/components/Common';
import type { Comment } from '@/types/recipe';

interface CommentItemProps {
  recipeComment: Comment;
}

const CommentItem = ({ recipeComment }: CommentItemProps) => {
  const { author, comment } = recipeComment;

  return (
    <li className={container}>
      <Text as="span" size="caption3" weight="semiBold" color="sub" className={nickname}>
        {author.nickname}
      </Text>
      <Text size="caption3" color="sub">
        {comment}
      </Text>
    </li>
  );
};

export default CommentItem;
