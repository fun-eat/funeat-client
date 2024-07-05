import type { Meta, StoryObj } from '@storybook/react';

import MemberReviewItem from './MemberReviewItem';

const meta: Meta<typeof MemberReviewItem> = {
  title: 'members/MemberReviewItem',
  component: MemberReviewItem,
  args: {
    review: {
      reviewId: 1,
      productId: 1,
      productName: '새우깡',
      image:
        'https://i.namu.wiki/i/9wnvUaEa1EkDqG-M0Pbwfdf19FJQQXV_-bnlU2SYaNcG05y2wbabiIrfrGES1M4xSgDjY39RwOvLNggDd3Huuw.webp',
      content:
        '할머니가 먹을 거 같은 맛입니다. 1960년 전쟁 때 맛 보고 싶었는데 그때는 너무 가난해서 먹을 수 없었는데요 이것보다 긴 리뷰도 잘려 보인답니다',
      rating: 4.0,
      createdAt: '2023-08-09T10:10:10',
      tags: [
        {
          id: 5,
          name: '단짠단짠',
          tagType: 'TASTE',
        },
        {
          id: 1,
          name: '망고망고',
          tagType: 'TASTE',
        },
      ],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
