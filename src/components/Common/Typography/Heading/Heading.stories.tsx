import type { Meta, StoryObj } from '@storybook/react';

import Heading from './Heading';

const meta: Meta<typeof Heading> = {
  title: 'common/Heading',
  component: Heading,
  args: {
    children: '안녕하세요 펀잇입니다.',
    color: 'default',
    size: 'body',
    weight: 'regular',
    as: 'h1',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
