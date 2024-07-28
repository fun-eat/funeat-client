import type { ComponentPropsWithoutRef } from 'react';

import { spacing, spacingSize } from './spacing.css';

import { assignInlineVars } from '@vanilla-extract/dynamic';

type SpacingDirections = 'vertical' | 'horizontal';

export interface SpacingProps extends ComponentPropsWithoutRef<'div'> {
  direction?: SpacingDirections;
  size: number;
}

const Spacing = ({ direction = 'vertical', size, ...props }: SpacingProps) => {
  return (
    <div
      aria-hidden="true"
      className={direction === 'vertical' ? spacing['vertical'] : spacing['horizontal']}
      style={assignInlineVars({
        [spacingSize]: `${size}px`,
      })}
      {...props}
    />
  );
};

export default Spacing;
