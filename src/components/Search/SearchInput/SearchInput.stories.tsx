import type { Meta, StoryObj } from '@storybook/react';

import SearchInput from './SearchInput';

const meta: Meta<typeof SearchInput> = {
  title: 'search/SearchInput',
  component: SearchInput,
};

export default meta;
type Story = StoryObj<typeof SearchInput>;

export const Default: Story = {};
