import cx from 'classnames';

import { text } from './text.css';
import type { TextElement, TextVariants, OverridableComponentPropsWithoutRef } from './text.types';

type TextProps<T extends TextElement> = OverridableComponentPropsWithoutRef<T, TextVariants>;

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
    <Component className={cx(text({ color, size, weight }), className)} {...props}>
      {children}
    </Component>
  );
};

export default Text;
