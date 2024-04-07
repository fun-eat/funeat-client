import type { Meta, StoryObj } from '@storybook/react';

import ProductSearchResultList from './ProductSearchResultList';

const meta: Meta<typeof ProductSearchResultList> = {
  title: 'search/ProductSearchResultList',
  component: ProductSearchResultList,
  args: {
    searchQuery: '꼬북칩',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
