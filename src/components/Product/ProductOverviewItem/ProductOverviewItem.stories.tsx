import type { Meta, StoryObj } from '@storybook/react';

import ProductOverviewItem from './ProductOverviewItem';

const meta: Meta<typeof ProductOverviewItem> = {
  title: 'product/ProductOverviewItem',
  component: ProductOverviewItem,
  args: {
    product: {
      id: 1,
      image: 'https://t3.ftcdn.net/jpg/06/06/91/70/240_F_606917032_4ujrrMV8nspZDX8nTgGrTpJ69N9JNxOL.jpg',
      name: '소금빵',
      price: 1000,
      averageRating: 4.3,
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
