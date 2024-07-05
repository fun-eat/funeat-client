import type { Meta, StoryObj } from '@storybook/react';

import StarRating from './StarRating';

const meta: Meta<typeof StarRating> = {
  title: 'common/StarRating',
  component: StarRating,
  args: {
    rating: 4.5,
    createdAt: '2021-09-01T00:00:00.000Z',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
