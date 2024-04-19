import type { ChangeEvent } from 'react';

import { checkbox, container, itemTitle, tagLabel, tagList } from './reviewTagList.css';

import { Text } from '@/components/Common';
import { MAX_DISPLAYED_TAGS_LENGTH, TAG_TITLE } from '@/constants';
import type { TagValue } from '@/contexts/ReviewFormContext';
import { useReviewFormActionContext, useReviewFormValueContext } from '@/hooks/context';
import { useReviewTagsQuery } from '@/hooks/queries/review';

const ReviewTagList = () => {
  const { data: tagsData } = useReviewTagsQuery();
  const {
    formValue: { tags: selectedTags },
  } = useReviewFormValueContext();
  const { handleReviewFormValue } = useReviewFormActionContext();

  const isChecked = (tag: TagValue) => selectedTags.some(({ id }) => id === tag.id);

  const handleTagSelect = (currentTag: TagValue) => (event: ChangeEvent<HTMLInputElement>) => {
    handleReviewFormValue({ target: 'tags', value: currentTag });

    if (selectedTags.length >= MAX_DISPLAYED_TAGS_LENGTH) {
      event.target.checked = false;
    }
  };

  return (
    <div className={container}>
      {tagsData.map(({ tagType, tags }) => (
        <div key={tagType}>
          <h2 className={itemTitle} tabIndex={0}>
            {TAG_TITLE[tagType]}
          </h2>
          <ul className={tagList}>
            {tags.map((tag) => (
              <li key={tag.id}>
                <label>
                  <input
                    type="checkbox"
                    className={checkbox}
                    checked={isChecked(tag)}
                    onChange={handleTagSelect(tag)}
                  />
                  <Text as="span" size="caption1" weight="medium" className={tagLabel}>
                    {tag.name}
                  </Text>
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
