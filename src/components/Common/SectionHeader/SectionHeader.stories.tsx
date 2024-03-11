import type { Meta, StoryObj } from '@storybook/react';

import SectionHeader from './SectionHeader';

const meta: Meta<typeof SectionHeader> = {
  title: 'common/SectionHeader',
  component: SectionHeader,
};

export default meta;
type Story = StoryObj<typeof SectionHeader>;

export const Default: Story = {
  args: {
    name: '상품 랭킹',
  },
};

export const Linked: Story = {
  args: {
    name: '상품 랭킹',
    link: '링크',
  },
};
