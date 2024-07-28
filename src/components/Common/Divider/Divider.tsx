import cx from 'classnames';
import type { ComponentPropsWithoutRef } from 'react';

import { divider, dividerHeight, dividerWidth } from './divider.css';

import { assignInlineVars } from '@vanilla-extract/dynamic';

export interface DividerProps extends ComponentPropsWithoutRef<'hr'> {
  variant?: 'default' | 'light' | 'navigation';
  width?: string;
  height?: string;
}

const Divider = ({ variant = 'default', width = '100%', height = '1px', ...props }: DividerProps) => {
  return (
    <hr
      aria-hidden
      className={cx(divider({ variant }))}
      style={assignInlineVars({
        [dividerWidth]: width ?? '100%',
        [dividerHeight]: height ?? '1px',
      })}
      {...props}
    />
  );
};

export default Divider;
