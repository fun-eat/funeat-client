import type { Meta, StoryObj } from '@storybook/react';

import ReviewRankingItem from './ReviewRankingItem';

import { REVIEW_CARD_DEFAULT_IMAGE_URL } from '@/constants/image';

const meta: Meta<typeof ReviewRankingItem> = {
  title: 'review/ReviewRankingItem',
  component: ReviewRankingItem,
  args: {
    productName: '구운감자슬림명란마요',
    content:
      '할머니가 먹을 거 같은 맛입니다. 1960년 전쟁 때 맛 보고 싶었는데 그때는 너무 가난해서 먹을 수 없었는데요 이것보다 긴 리뷰도 잘려 보인답니다',
    image: REVIEW_CARD_DEFAULT_IMAGE_URL,
  },
};

export default meta;
type Story = StoryObj<typeof ReviewRankingItem>;

export const Default: Story = {
  args: {
    tags: [
      {
        id: 5,
        name: '😋 맛있어요',
        tagType: 'TASTE',
      },
      {
        id: 1,
        name: '🍭 달달해요',
        tagType: 'TASTE',
      },
    ],
  },
};

export const ExtraTag: Story = {
  args: {
    tags: [
      {
        id: 5,
        name: '😋 맛있어요',
        tagType: 'TASTE',
      },
      {
        id: 1,
        name: '🍭 속이 편해요',
        tagType: 'TASTE',
      },
      {
        id: 2,
        name: '🍭 달달해요',
        tagType: 'TASTE',
      },
    ],
  },
};
