import type { Meta, StoryObj } from '@storybook/react';

import MemberRecipeBookmarkList from './MemberRecipeBookmarkList';

const meta: Meta<typeof MemberRecipeBookmarkList> = {
  title: 'members/MemberRecipeBookmarkList',
  component: MemberRecipeBookmarkList,
};

export default meta;
type Story = StoryObj<typeof MemberRecipeBookmarkList>;

export const Default: Story = {};
