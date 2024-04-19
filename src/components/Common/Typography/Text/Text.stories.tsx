import type { Meta, StoryObj } from '@storybook/react';

import Text from './Text';
import { sizes } from '../typography.types';

const meta: Meta<typeof Text> = {
  title: 'common/Text',
  component: Text,
  args: {
    children: '안녕하세요 펀잇입니다.',
    color: 'default',
    size: 'body',
    weight: 'regular',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Regular: Story = {
  render: ({ children }) => {
    return (
      <>
        {Object.values(sizes).map((size) => (
          <Text key={size} size={size} weight="regular">
            {children}
          </Text>
        ))}
      </>
    );
  },
};

export const Medium: Story = {
  render: ({ children }) => {
    return (
      <>
        {Object.values(sizes).map((size) => (
          <Text key={size} size={size} weight="medium">
            {children}
          </Text>
        ))}
      </>
    );
  },
};

export const SemiBold: Story = {
  render: ({ children }) => {
    return (
      <>
        {Object.values(sizes).map((size) => (
          <Text key={size} size={size} weight="semiBold">
            {children}
          </Text>
        ))}
      </>
    );
  },
};
