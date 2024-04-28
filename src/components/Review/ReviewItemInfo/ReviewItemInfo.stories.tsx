import type { Meta, StoryObj } from '@storybook/react';

import ReviewItemInfo from './ReviewItemInfo';

const meta: Meta<typeof ReviewItemInfo> = {
  title: 'review/ReviewItemInfo',
  component: ReviewItemInfo,
  args: {
    rating: 5,
    createdAt: '2023-08-03T13:10:06.379389',
    image: 'https://cdn.pixabay.com/photo/2016/03/23/15/00/ice-cream-1274894_1280.jpg',
    content:
      '할머니가 먹을 거 같은 맛입니다. 1960년 전쟁 때 맛 보고 싶었는데 그때는 너무 가난해서 먹을 수 없었는데, 맛있어요.',
    tags: [
      {
        id: 5,
        name: '#단짠단짠',
      },
      {
        id: 1,
        name: '#망고망고',
      },
    ],
  },
};

export default meta;
type Story = StoryObj<typeof ReviewItemInfo>;

export const Default: Story = {};
