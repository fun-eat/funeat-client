import type { Meta, StoryObj } from '@storybook/react';

import ScrollButton from './ScrollButton';
import { useRef } from 'react';

const meta: Meta<typeof ScrollButton> = {
  title: 'common/ScrollButton',
  component: ScrollButton,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => {
    const targetRef = useRef<HTMLDivElement>(null);

    return (
      <div style={{ height: '100px' }}>
        <ScrollButton {...args} targetRef={targetRef} />
      </div>
    );
  },
};
