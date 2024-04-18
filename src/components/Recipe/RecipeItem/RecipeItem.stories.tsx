import type { Meta, StoryObj } from '@storybook/react';

import RecipeItem, {
  DefaultRecipeItem,
  RecipeItemWithDiskIcon,
  RecipeItemWithDiskIconAndContent,
  RecipeItemWithProductDetailImage,
} from './RecipeItem';

import mockRecipe from '@/mocks/data/recipes.json';

const meta: Meta<typeof RecipeItem> = {
  title: 'recipe/RecipeItem',
  component: RecipeItem,
};

export default meta;
type Story = StoryObj<typeof RecipeItem>;

export const Default: Story = {
  render: () => {
    return <DefaultRecipeItem recipe={mockRecipe.recipes[1]} />;
  },
};

export const Recipe: Story = {
  render: () => {
    return <RecipeItemWithDiskIconAndContent recipe={mockRecipe.recipes[1]} />;
  },
};

export const MyPage: Story = {
  render: () => {
    return <RecipeItemWithProductDetailImage recipe={mockRecipe.recipes[1]} />;
  },
};

export const Search: Story = {
  render: () => {
    return <RecipeItemWithDiskIcon recipe={mockRecipe.recipes[1]} />;
  },
};
