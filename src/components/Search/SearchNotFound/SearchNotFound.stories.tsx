import type { Meta, StoryObj } from '@storybook/react';

import SearchNotFound from './SearchNotFound';

const meta: Meta<typeof SearchNotFound> = {
  title: 'search/SearchNotFound',
  component: SearchNotFound,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
