import cx from 'classnames';
import type { ElementType } from 'react';

import { typography } from '../typography.css';
import type { OverridableComponentPropsWithoutRef, TypographyVariants } from '../typography.types';

type HeadingElement = Extract<ElementType, 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'>;
type HeadingProps<T extends HeadingElement> = OverridableComponentPropsWithoutRef<T, TypographyVariants>;

const Heading = <T extends HeadingElement = 'h1'>({
  children,
  size = 'body',
  weight = 'regular',
  color = 'default',
  as,
  className,
  ...props
}: HeadingProps<T>) => {
  const Component = as || 'h1';

  return (
    <Component className={cx(typography({ color, size, weight }), className)} {...props}>
      {children}
    </Component>
  );
};

export default Heading;
