import { text } from './text.css';
import type { TextElement, TextVariants, OverridableComponentPropsWithoutRef } from './text.types';

type TextProps<T extends TextElement> = OverridableComponentPropsWithoutRef<T, TextVariants>;

const Text = <T extends TextElement = 'p'>({
  children,
  size = 'body',
  weight = 'regular',
  color = 'default',
  ...props
}: TextProps<T>) => {
  return (
    <p className={text({ color, size, weight })} {...props}>
      {children}
    </p>
  );
};

export default Text;
