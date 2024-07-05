import type { Meta, StoryObj } from '@storybook/react';

import MemberModifyInput from './MemberModifyInput';

const meta: Meta<typeof MemberModifyInput> = {
  title: 'members/ MemberModifyInput',
  component: MemberModifyInput,
  args: {
    nickname: '펀잇',
  },
};

export default meta;
type Story = StoryObj<typeof MemberModifyInput>;

export const Default: Story = {};
