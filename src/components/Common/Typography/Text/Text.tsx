import cx from 'classnames';
import type { ElementType } from 'react';

import { typography } from '../typography.css';
import type { OverridableComponentPropsWithoutRef, TypographyVariants } from '../typography.types';

export type TextElement = Extract<ElementType, 'p' | 'span'>;
type TextProps<T extends TextElement> = OverridableComponentPropsWithoutRef<T, TypographyVariants>;

const Text = <T extends TextElement = 'p'>({
  children,
  size = 'body',
  weight = 'regular',
  color = 'default',
  as,
  className,
  ...props
}: TextProps<T>) => {
  const Component = as || 'p';

  return (
    <Component className={cx(typography({ color, size, weight }), className)} {...props}>
      {children}
    </Component>
  );
};

export default Text;
