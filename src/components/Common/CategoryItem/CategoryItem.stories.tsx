import type { Meta, StoryObj } from '@storybook/react';

import CategoryItem from './CategoryItem';

import CategoryProvider from '@/contexts/CategoryContext';

const meta: Meta<typeof CategoryItem> = {
  title: 'common/CategoryItem',
  component: CategoryItem,
  decorators: [
    (Story) => (
      <CategoryProvider>
        <Story />
      </CategoryProvider>
    ),
  ],
  args: {
    category: {
      id: 1,
      name: '즉석 식품',
      image: 'https://image.funeat.site/prod/food.png',
    },
    width: 51,
    height: 51,
    categoryType: 'food',
  },
};

export default meta;
type Story = StoryObj<typeof CategoryItem>;

export const Default: Story = {};
