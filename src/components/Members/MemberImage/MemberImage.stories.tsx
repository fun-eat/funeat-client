import type { Meta, StoryObj } from '@storybook/react';

import MemberImage from './MemberImage';
import DefaultMemberImage from '../../../assets/defaultProfile.png';

const meta: Meta<typeof MemberImage> = {
  title: 'members/MemberImage',
  component: MemberImage,
  args: {
    src: 'https://github.com/woowacourse-teams/2023-fun-eat/assets/78616893/1f0fd418-131c-4cf8-b540-112d762b7c34',
    alt: '펀잇님의 프로필 사진',
  },
};

export default meta;
type Story = StoryObj<typeof MemberImage>;

export const Default: Story = {};

export const Error: Story = {
  args: {
    src: DefaultMemberImage,
  },
};
