import type { Meta, StoryObj } from '@storybook/react';

import ProductPreviewList from './ProductPreviewList';

const meta: Meta<typeof ProductPreviewList> = {
  title: 'product/ProductPreviewList',
  component: ProductPreviewList,
  args: {
    category: 'food',
    categoryId: 1,
  },
};

export default meta;
type Story = StoryObj<typeof ProductPreviewList>;

export const Default: Story = {};
