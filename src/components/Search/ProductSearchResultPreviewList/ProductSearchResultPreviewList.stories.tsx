import type { Meta, StoryObj } from '@storybook/react';

import ProductSearchResultPreviewList from './ProductSearchResultPreviewList';

const meta: Meta<typeof ProductSearchResultPreviewList> = {
  title: 'search/ProductSearchResultPreviewList',
  component: ProductSearchResultPreviewList,
  args: {
    searchQuery: '꼬북칩',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
