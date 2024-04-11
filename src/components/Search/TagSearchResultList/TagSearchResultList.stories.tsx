import type { Meta, StoryObj } from '@storybook/react';

import TagSearchResultList from './TagSearchResultList';

const meta: Meta<typeof TagSearchResultList> = {
  title: 'search/TagSearchResultList',
  component: TagSearchResultList,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    searchQuery: '꼬북칩',
  },
};
