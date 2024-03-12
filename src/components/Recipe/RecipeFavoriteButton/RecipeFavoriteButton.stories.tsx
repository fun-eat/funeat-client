import type { Meta, StoryObj } from '@storybook/react';

import RecipeFavoriteButton from './RecipeFavoriteButton';

const meta: Meta<typeof RecipeFavoriteButton> = {
  title: 'recipe/RecipeFavoriteButton',
  component: RecipeFavoriteButton,
};

export default meta;
type Story = StoryObj<typeof RecipeFavoriteButton>;

export const Default: Story = {
  render: () => (
    <div style={{ background: 'black' }}>
      <RecipeFavoriteButton recipeId={1} favorite={false} />
    </div>
  ),
};

export const Filled: Story = {
  args: {
    recipeId: 1,
    favorite: true,
  },
};

export const Counted: Story = {
  args: {
    recipeId: 1,
    favorite: true,
    favoriteCount: 10,
  },
};
