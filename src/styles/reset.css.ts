import { globalStyle } from '@vanilla-extract/css';

globalStyle('#root', {
  display: 'flex',
  flexDirection: 'column',
  height: '100vh',
  maxWidth: 440,
  margin: '0 auto',
  lineHeight: 1.4,
});

globalStyle('*::-webkit-scrollbar', {
  display: 'none',
});
