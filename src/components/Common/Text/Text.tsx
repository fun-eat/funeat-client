import { text } from './text.css';
import type { TextElement, TextVariants, OverridableComponentPropsWithoutRef } from './text.types';

type TextProps<T extends TextElement> = OverridableComponentPropsWithoutRef<T, TextVariants>;

const Text = <T extends TextElement = 'p'>({
  children,
  size = 'body',
  weight = 'regular',
  color = 'default',
  as,
  ...props
}: TextProps<T>) => {
  const Component = as || 'p';

  return (
    <Component className={text({ color, size, weight })} {...props}>
      {children}
    </Component>
  );
};

export default Text;
