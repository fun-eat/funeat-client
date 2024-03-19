import { globalStyle } from '@vanilla-extract/css';

globalStyle('#root', {
  display: 'flex',
  flexDirection: 'column',
  height: '100vh',
  maxWidth: 400,
  margin: '0 auto',
});

globalStyle('*::-webkit-scrollbar', {
  display: 'none',
});
