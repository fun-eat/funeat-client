import type { Meta, StoryObj } from '@storybook/react';

import ProductRankingItem from './ProductRankingItem';

const meta: Meta<typeof ProductRankingItem> = {
  title: 'product/ProductRankingItem',
  component: ProductRankingItem,
  args: {
    image: '/assets/ranking1.png',
    name: '펩시제로콜라',
    rank: 1,
    price: 2200,
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Ranking: Story = {
  args: {
    rank: 1,
  },
};
