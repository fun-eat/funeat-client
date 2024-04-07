import { vars } from '@/styles/theme.css';
import { style } from '@vanilla-extract/css';

export const container = style({
  position: 'absolute',
  minWidth: 360,
  maxHeight: 150,
  padding: '10px 0',
  background: vars.colors.background.default,
  overflowY: 'auto',
});

export const backdrop = style({
  position: 'fixed',
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
});

export const wrapper = style({
  position: 'relative',
  width: '100%',
});

export const productButton = style({
  display: 'flex',
  alignItems: 'center',
  padding: '14px 0',
  color: '#232527',
  fontSize: '1.6rem',
  fontWeight: 400,
  textAlign: 'left',
});
