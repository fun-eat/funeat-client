import type { Meta, StoryObj } from '@storybook/react';

import TabMenu from './TabMenu';

import { CATEGORY_TYPE } from '@/constants';

const meta: Meta<typeof TabMenu> = {
  title: 'common/TabMenu',
  component: TabMenu,
  args: {
    tabMenus: [
      { value: CATEGORY_TYPE.FOOD, label: '공통 상품' },
      { value: CATEGORY_TYPE.STORE, label: '오직!여기서' },
    ],
  },
};

export default meta;
type Story = StoryObj<typeof TabMenu>;

export const Default: Story = {
  render: ({ ...args }) => (
    <div style={{ width: '375px', padding: '0 20px' }}>
      <TabMenu {...args} />
    </div>
  ),
};
