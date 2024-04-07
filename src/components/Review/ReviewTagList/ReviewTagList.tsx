import { checkbox, container, itemTitle, tagLabel, tagList } from './reviewTagList.css';

import { TAG_TITLE } from '@/constants';
import { useReviewFormActionContext } from '@/hooks/context';
import { useReviewTagsQuery } from '@/hooks/queries/review';

const ReviewTagList = () => {
  const { data: tagsData } = useReviewTagsQuery();
  const { handleReviewFormValue } = useReviewFormActionContext();

  const handleTagSelect = (tagId: number) => () => {
    handleReviewFormValue({ target: 'tagIds', value: tagId });
  };

  return (
    <div className={container}>
      {tagsData.map(({ tagType, tags }) => (
        <div key={tagType}>
          <h2 className={itemTitle} tabIndex={0}>
            {TAG_TITLE[tagType]}
          </h2>
          <ul className={tagList}>
            {tags.map(({ id, name }) => (
              <li key={id}>
                <label>
                  <input type="checkbox" className={checkbox} onChange={handleTagSelect(id)} />
                  <span className={tagLabel}>{name}</span>
                </label>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default ReviewTagList;
