import { theme } from '@fun-eat/design-system';
import type { Meta, StoryObj } from '@storybook/react';

import SvgIcon, { SVG_ICON_VARIANTS } from './SvgIcon';

const meta: Meta<typeof SvgIcon> = {
  title: 'common/SvgIcon',
  component: SvgIcon,
  argTypes: {
    fill: {
      control: {
        type: 'color',
      },
    },
    stroke: {
      control: {
        type: 'color',
      },
    },
  },
  args: {
    variant: 'recipe',
    stroke: theme.colors.gray4,
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const SvgIcons: Story = {
  render: () => {
    return (
      <>
        {SVG_ICON_VARIANTS.map((variant) => (
          <SvgIcon key={variant} variant={variant} />
        ))}
      </>
    );
  },
};
