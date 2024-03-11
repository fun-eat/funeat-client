import type { Meta, StoryObj } from '@storybook/react';

import ProductRankingItem from './ProductRankingItem';

const meta: Meta<typeof ProductRankingItem> = {
  title: 'product/ProductRankingItem',
  component: ProductRankingItem,
  args: {
    image: 'https://arqachylpmku8348141.cdn.ntruss.com/app/product/mst_product/8801056232979_L.jpg',
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
