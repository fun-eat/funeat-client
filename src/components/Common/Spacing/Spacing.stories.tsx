import type { Meta, StoryObj } from '@storybook/react';
import type { PropsWithChildren } from 'react';

import Spacing from './Spacing';

import { vars } from '@/styles/theme.css';

const meta: Meta<typeof Spacing> = {
  title: 'common/Spacing',
  component: Spacing,
};

export default meta;
type Story = StoryObj<typeof Spacing>;

const Container = ({ children, vertical }: PropsWithChildren<{ vertical?: boolean }>) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: `${vertical ? 'column' : 'row'}`,
      }}
    >
      {children}
    </div>
  );
};

const Box = () => {
  return (
    <div
      style={{
        width: '100px',
        height: '50px',
        backgroundColor: `${vars.colors.primary}`,
      }}
    />
  );
};

export const Default: Story = {
  render: ({ direction = 'vertical', size }) => (
    <Container vertical={direction === 'vertical'}>
      <Box />
      <Spacing direction={direction} size={size} />
      <Box />
      <Spacing direction={direction} size={size} />
      <Box />
      <Spacing direction={direction} size={size} />
      <Box />
    </Container>
  ),
};

export const Vertical: Story = {
  render: ({ size }) => (
    <Container vertical>
      <Box />
      <Spacing direction="vertical" size={size} />
      <Box />
      <Spacing direction="vertical" size={size} />
      <Box />
      <Spacing direction="vertical" size={size} />
      <Box />
    </Container>
  ),
};

export const Horizontal: Story = {
  render: ({ size }) => (
    <Container>
      <Box />
      <Spacing direction="horizontal" size={size} />
      <Box />
      <Spacing direction="horizontal" size={size} />
      <Box />
      <Spacing direction="horizontal" size={size} />
      <Box />
    </Container>
  ),
};
