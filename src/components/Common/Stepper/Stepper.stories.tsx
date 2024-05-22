import type { Meta, StoryObj } from '@storybook/react';

import Stepper from './Stepper';

const meta: Meta<typeof Stepper> = {
  title: 'common/Stepper',
  component: Stepper,
  args: {},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
