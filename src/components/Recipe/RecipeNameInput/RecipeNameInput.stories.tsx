import type { Meta, StoryObj } from '@storybook/react';

import RecipeNameInput from './RecipeNameInput';

import RecipeFormProvider from '@/contexts/RecipeFormContext';

const meta: Meta<typeof RecipeNameInput> = {
  title: 'recipe/RecipeNameInput',
  component: RecipeNameInput,
  decorators: [
    (Story) => (
      <RecipeFormProvider>
        <Story />
      </RecipeFormProvider>
    ),
  ],
  args: {
    recipeName: '',
  },
};

export default meta;
type Story = StoryObj<typeof RecipeNameInput>;

export const Default: Story = {};
