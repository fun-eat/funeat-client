import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

const baseText = style({
  lineHeight: 1.4,
});

export const typography = recipe({
  base: baseText,
  variants: {
    color: {
      default: { color: '#232527' },
      sub: { color: '#3D3D3D' },
      info: { color: '#808080' },
      disabled: { color: '#999999' },
      white: { color: '#FFFFFF' },
    },
    size: {
      caption4: { fontSize: '1.1rem' },
      caption3: { fontSize: '1.2rem' },
      caption2: { fontSize: '1.3rem' },
      caption1: { fontSize: '1.4rem' },
      body: { fontSize: '1.6rem' },
      headline: { fontSize: '1.8rem' },
      display1: { fontSize: '2.2rem' },
    },
    weight: {
      regular: { fontWeight: 400 },
      medium: { fontWeight: 500 },
      semiBold: { fontWeight: 600 },
    },
  },
  defaultVariants: {
    color: 'default',
    size: 'caption4',
    weight: 'regular',
  },
});
