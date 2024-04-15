import type { Meta, StoryObj } from '@storybook/react';

import TopBar from './TopBar';

const meta: Meta<typeof TopBar> = {
  title: 'common/TopBar',
  component: TopBar,
};

export default meta;
type Story = StoryObj<typeof TopBar>;

export const Default: Story = {
  render: (args) => {
    return (
      <TopBar {...args}>
        <TopBar.BackLink />
        <TopBar.Title title="타이틀" />
        <TopBar.Spacer />
      </TopBar>
    );
  },
};

export const Logo: Story = {
  render: (args) => {
    return (
      <TopBar {...args}>
        <TopBar.Logo />
        <TopBar.SearchLink />
      </TopBar>
    );
  },
};

export const CenterTitleAndSearch: Story = {
  render: (args) => {
    return (
      <TopBar {...args}>
        <TopBar.BackLink />
        <TopBar.Title title="타이틀" />
        <TopBar.SearchLink />
      </TopBar>
    );
  },
};

export const LeftTitle: Story = {
  render: (args) => {
    return (
      <TopBar {...args}>
        <TopBar.LeftNavigationGroup title="타이틀" />
      </TopBar>
    );
  },
};

export const LeftTitleAndSearch: Story = {
  render: (args) => {
    return (
      <TopBar {...args}>
        <TopBar.LeftNavigationGroup title="타이틀" />
        <TopBar.SearchLink />
      </TopBar>
    );
  },
};

export const LeftTitleAndRegister: Story = {
  render: (args) => {
    return (
      <TopBar {...args}>
        <TopBar.LeftNavigationGroup title="타이틀" />
        <TopBar.RegisterLink />
      </TopBar>
    );
  },
};

export const Close: Story = {
  render: (args) => {
    return (
      <TopBar {...args}>
        <TopBar.Spacer />
        <TopBar.CloseButton />
      </TopBar>
    );
  },
};
