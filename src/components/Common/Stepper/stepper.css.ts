import { vars } from '@/styles/theme.css';
import { style, styleVariants } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  gap: 10,
});

export const wrapper = style({
  width: '33%',
});

export const stepperBase = style({
  width: '100%',
  height: 4,
  cursor: 'pointer',
});

export const stepper = styleVariants({
  active: [stepperBase, { background: vars.colors.primary }],
  default: [stepperBase, { background: vars.colors.gray2 }],
});
