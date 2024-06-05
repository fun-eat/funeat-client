import { vars } from '@/styles/theme.css';
import { style } from '@vanilla-extract/css';

export const main = style({
  paddingTop: 50,
});

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
});

export const wrapper = style({
  padding: '0 20px',
});

export const imageWrapper = style({
  marginLeft: 'auto',
});

export const buttonWrapper = style({
  position: 'fixed',
  left: '50%',
  bottom: 0,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'flex-end',
  width: '100%',
  height: 70,
  maxWidth: 440,
  padding: '0 20px',
  borderTop: `1px solid ${vars.colors.border.default}`,
  background: vars.colors.background.default,
  transform: 'translateX(-50%)',
});

export const kakaoButton = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  height: 56,
  gap: 5,
  borderRadius: 6,
  background: '#FAE54D',
});
