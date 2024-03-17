import type { ComponentPropsWithoutRef, CSSProperties } from 'react';

import { outline, fill, text, outlinedBadge, filledBadge } from './badge.css';

import { assignInlineVars } from '@vanilla-extract/dynamic';

export interface BadgeProps extends ComponentPropsWithoutRef<'div'> {
  outlined?: boolean;
  color: CSSProperties['color'];
  textColor: CSSProperties['color'];
}

const Badge = ({ outlined = false, color, textColor, children, ...props }: BadgeProps) => {
  return (
    <p
      className={outlined ? outlinedBadge : filledBadge}
      style={assignInlineVars({
        [outline]: `1px solid ${color}`,
        [fill]: color,
        [text]: textColor,
      })}
      {...props}
    >
      {children}
    </p>
  );
};

export default Badge;
