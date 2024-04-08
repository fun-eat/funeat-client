import type { Meta, StoryObj } from '@storybook/react';

import RecipeProductButton from './RecipeProductButton';

const meta: Meta<typeof RecipeProductButton> = {
  title: 'recipe/RecipeProductButton',
  component: RecipeProductButton,
};

export default meta;
type Story = StoryObj<typeof RecipeProductButton>;

export const Default: Story = {};
