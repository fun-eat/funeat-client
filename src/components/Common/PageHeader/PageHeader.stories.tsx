import type { Meta, StoryObj } from '@storybook/react';

import PageHeader from './PageHeader';

const meta: Meta<typeof PageHeader> = {
  title: 'common/PageHeader',
  component: PageHeader,
};

export default meta;
type Story = StoryObj<typeof PageHeader>;

export const Default: Story = {
  args: {
    title: '조합실',
  },
};

export const BackButton: Story = {
  args: {
    title: '조합실',
    hasBackLink: true,
  },
};

export const SearchButton: Story = {
  args: {
    title: '조합실',
    hasSearchLink: true,
  },
};

export const AllActive: Story = {
  args: {
    title: '조합실',
    hasBackLink: true,
    hasSearchLink: true,
  },
};
