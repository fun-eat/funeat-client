import type { Meta, StoryObj } from '@storybook/react';

import RecipeList from './RecipeList';

const meta: Meta<typeof RecipeList> = {
  title: 'recipe/RecipeList',
  component: RecipeList,
  argTypes: {
    selectedOption: {
      control: {
        type: 'select',
      },
    },
  },
  args: {
    selectedOption: { label: '최신 작성순', value: 'createdAt,desc' },
  },
};

export default meta;
type Story = StoryObj<typeof RecipeList>;

export const Default: Story = {};
