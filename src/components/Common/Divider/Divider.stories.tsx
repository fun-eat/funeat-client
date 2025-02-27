import type { Meta, StoryObj } from '@storybook/react';

import Divider from './Divider';

const meta: Meta<typeof Divider> = {
  title: 'common/Divider',
  component: Divider,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: 'default',
  },
};

export const Light: Story = {
  args: {
    variant: 'light',
  },
};
