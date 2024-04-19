import type { Meta, StoryObj } from '@storybook/react';

import PostCounterBox from './PostCounterBox';

const meta: Meta<typeof PostCounterBox> = {
  title: 'members/PostCounterBox',
  component: PostCounterBox,
  args: {
    recipeCount: 5,
    reviewCount: 10,
  },
};

export default meta;
type Story = StoryObj<typeof PostCounterBox>;

export const Default: Story = {};
