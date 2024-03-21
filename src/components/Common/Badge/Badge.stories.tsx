import type { Meta, StoryObj } from '@storybook/react';

import Badge from './Badge';

const meta: Meta<typeof Badge> = {
  title: 'common/Badge',
  component: Badge,
  argTypes: {
    color: {
      control: {
        type: 'color',
      },
    },
    textColor: {
      control: {
        type: 'color',
      },
    },
  },
  args: {
    color: '#f7f7f7',
    children: '맛있어요',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const FilledBadge: Story = {};

export const OutlinedBadge: Story = {
  args: {
    outlined: true,
  },
};
