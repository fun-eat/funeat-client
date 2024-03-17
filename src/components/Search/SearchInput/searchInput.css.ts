import { style } from '@vanilla-extract/css';

export const inputContainer = style({
  position: 'relative',
  width: 343,
});

export const searchInput = style({
  width: '100%',
  height: 40,
  padding: '10px 0 10px 18px',
  color: '#232527',
  background: '#FFFFFF',
  borderRadius: 20,
  fontSize: '1.4rem',

  selectors: {
    '&:placeholder': {
      color: '#808080',
    },
  },
});

export const iconWrapper = style({
  position: 'absolute',
  top: 0,
  right: 0,
  display: 'flex',
  alignItems: 'center',
  height: '100%',
  marginRight: 18,
});
