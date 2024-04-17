import type { Meta, StoryObj } from '@storybook/react';

import RecipeItem, {
  DefaultRecipeItem,
  RecipeItemWithDiskIcon,
  RecipeItemWithDiskIconAndContent,
  RecipeItemWithProductDetailImage,
} from './RecipeItem';

import RecipeItemProvider from '@/contexts/RecipeItemContext';
import mockRecipe from '@/mocks/data/recipes.json';

const meta: Meta<typeof RecipeItem> = {
  title: 'recipe/RecipeItem',
  component: RecipeItem,
  decorators: [
    (Story) => (
      <RecipeItemProvider recipe={mockRecipe.recipes[1]}>
        <Story />
      </RecipeItemProvider>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof RecipeItem>;

export const Default: Story = {
  render: () => {
    return <DefaultRecipeItem />;
  },
};

export const Recipe: Story = {
  render: () => {
    return <RecipeItemWithDiskIconAndContent />;
  },
};

export const MyPage: Story = {
  render: () => {
    return <RecipeItemWithProductDetailImage />;
  },
};

export const Search: Story = {
  render: () => {
    return <RecipeItemWithDiskIcon />;
  },
};
