import { tag, tagList } from './tagList.css';

import type { Tag } from '@/types/common';

interface TagListProps {
  tags: Tag[];
}

const TagList = ({ tags }: TagListProps) => {
  return (
    <ul className={tagList}>
      {tags.map(({ id, name }) => (
        <li key={id} className={tag}>
          <span>{name}</span>
        </li>
      ))}
    </ul>
  );
};

export default TagList;
