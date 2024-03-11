import { Meta, StoryObj } from '@storybook/react';
import SearchBox from './SearchBox';

const meta: Meta<typeof SearchBox> = {
  title: 'search/SearchBox',
  component: SearchBox,
};

export default meta;
type Story = StoryObj<typeof SearchBox>;

export const Default: Story = {
  render: () => (
    <div style={{ background: '#F2F2F2' }}>
      <SearchBox />
    </div>
  ),
};
