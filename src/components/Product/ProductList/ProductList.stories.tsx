import type { Meta, StoryObj } from '@storybook/react';

import ProductList from './ProductList';

import CategoryProvider from '@/contexts/CategoryContext';

const meta: Meta<typeof ProductList> = {
  title: 'product/ProductList',
  component: ProductList,
  decorators: [
    (Story) => (
      <CategoryProvider>
        <Story />
      </CategoryProvider>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof ProductList>;

export const Default: Story = {};
