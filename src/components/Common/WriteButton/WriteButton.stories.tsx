import type { Meta, StoryObj } from '@storybook/react';

import WriteButton from './WriteButton';

const meta: Meta<typeof WriteButton> = {
  title: 'common/WriteButton',
  component: WriteButton,
};

export default meta;
type Story = StoryObj<typeof WriteButton>;

export const Default: Story = {
  render: () => (
    <div style={{ height: '100px' }}>
      <WriteButton />
    </div>
  ),
};
