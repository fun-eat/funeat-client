import { tag, tagList } from './tagList.css';
import Text from '../Text/Text';

import type { Tag } from '@/types/common';

interface TagListProps {
  tags: Tag[];
}

const TagList = ({ tags }: TagListProps) => {
  return (
    <ul className={tagList}>
      {tags.map(({ id, name }) => (
        <li key={id} className={tag}>
          <Text as="span" color="info" size="caption2" weight="medium">
            {name}
          </Text>
        </li>
      ))}
    </ul>
  );
};

export default TagList;
