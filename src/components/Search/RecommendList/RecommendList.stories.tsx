import type { Meta, StoryObj } from '@storybook/react';

import RecommendList from './RecommendList';

const meta: Meta<typeof RecommendList> = {
  title: 'search/RecommendList',
  component: RecommendList,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    searchQuery: '꼬북칩',
  },
};
