import type { Meta, StoryObj } from '@storybook/react';

import ProductOverviewList from './ProductOverviewList';

import mockProducts from '@/mocks/data/recipes.json';

const meta: Meta<typeof ProductOverviewList> = {
  title: 'product/ProductOverviewList',
  component: ProductOverviewList,
  args: {
    products: mockProducts.recipes[0].products,
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
