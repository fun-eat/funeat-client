import { style } from '@vanilla-extract/css';

export const inputContainer = style({
  position: 'relative',
  width: 343,
});

export const searchInput = style({
  position: 'absolute',
  width: '90%',
  height: 40,
  padding: '10px 0 10px 18px',
  color: '#232527',
  background: '#efefef',
  borderRadius: '20px 0 0 20px',
  fontSize: '1.4rem',
  outline: 'none',

  selectors: {
    '&:placeholder': {
      color: '#808080',
    },
  },
});

export const tagInputWrapper = style({
  position: 'relative',
  top: 6,
  left: 6,
  display: 'flex',
  alignItems: 'baseline',
  gap: 6,
  width: 'fit-content',
  padding: '5px 12px',
  background: '#FFFFFF',
  borderRadius: 20,
});

export const iconWrapperButton = style({
  position: 'absolute',
  top: 0,
  right: 0,
  display: 'flex',
  alignItems: 'center',
  width: '10%',
  height: 40,
  paddingLeft: 4,
  background: '#efefef',
  borderRadius: '0 20px 20px 0',
});
