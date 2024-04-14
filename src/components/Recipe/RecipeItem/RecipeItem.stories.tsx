import type { Meta, StoryObj } from '@storybook/react';

import RecipeItem from './RecipeItem';

import RecipeItemProvider from '@/contexts/RecipeItemContext';
import mockRecipe from '@/mocks/data/recipes.json';

const meta: Meta<typeof RecipeItem> = {
  title: 'recipe/RecipeItem',
  component: RecipeItem,
  decorators: [
    (Story) => (
      <RecipeItemProvider recipe={mockRecipe.recipes[0]}>
        <Story />
      </RecipeItemProvider>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof RecipeItem>;

export const Default: Story = {
  render: (args) => {
    return (
      <RecipeItem {...args}>
        <RecipeItem.ImageAndFavoriteButton />
        <div style={{ height: '8px' }} />
        <RecipeItem.Title />
        <RecipeItem.AuthorAndCreatedDate />
      </RecipeItem>
    );
  },
};

export const Recipe: Story = {
  render: (args) => {
    return (
      <RecipeItem {...args}>
        <RecipeItem.ImageAndFavoriteButton>
          <RecipeItem.ProductButton />
        </RecipeItem.ImageAndFavoriteButton>
        <div style={{ height: '8px' }} />
        <RecipeItem.Title />
        <RecipeItem.AuthorAndCreatedDate />
        <RecipeItem.Content />
      </RecipeItem>
    );
  },
};

export const MyPage: Story = {
  render: (args) => {
    return (
      <RecipeItem {...args}>
        <RecipeItem.ImageAndFavoriteButton>
          <RecipeItem.ProductCircleButton />
        </RecipeItem.ImageAndFavoriteButton>
        <div style={{ height: '8px' }} />
        <RecipeItem.Title />
        <RecipeItem.Author />
        <RecipeItem.Content />
      </RecipeItem>
    );
  },
};

export const Search: Story = {
  render: (args) => {
    return (
      <RecipeItem {...args}>
        <RecipeItem.ImageAndFavoriteButton>
          <RecipeItem.ProductButton />
        </RecipeItem.ImageAndFavoriteButton>
        <div style={{ height: '8px' }} />
        <RecipeItem.Title />
        <RecipeItem.AuthorAndCreatedDate />
      </RecipeItem>
    );
  },
};
