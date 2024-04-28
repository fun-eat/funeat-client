import { vars } from '@/styles/theme.css';
import { style } from '@vanilla-extract/css';

export const logoutButton = style({
  float: 'right',
});

export const wrapper = style({
  display: 'flex',
  alignItems: 'center',
});

export const modifyButton = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: 17,
  height: 17,
  marginLeft: 5,
  background: vars.colors.icon.default,
  borderRadius: '50%',
});
