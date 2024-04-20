import type { Meta, StoryObj } from '@storybook/react';

import ReviewItem from './ReviewItem';

import productDetail from '@/mocks/data/productDetail.json';
import mockReviews from '@/mocks/data/reviews.json';

const meta: Meta<typeof ReviewItem> = {
  title: 'review/ReviewItem',
  component: ReviewItem,
  args: {
    productId: productDetail.id,
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: 440 }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof ReviewItem>;

export const Default: Story = {
  args: {
    review: mockReviews.reviews[2],
  },
};

export const WithImage: Story = {
  args: {
    review: mockReviews.reviews[1],
  },
};

export const WithRebuy: Story = {
  args: {
    review: mockReviews.reviews[0],
  },
};
