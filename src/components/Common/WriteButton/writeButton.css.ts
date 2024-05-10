import { style } from '@vanilla-extract/css';

const flexCenter = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

export const container = style({
  display: 'flex',
  alignItems: 'center',
  gap: 6,
});

export const ableLink = style([
  flexCenter,
  {
    width: 40,
    height: 40,
    background: '#FFB017',
    borderRadius: '50%',
  },
]);

export const disabledLink = style([
  flexCenter,
  {
    width: 40,
    height: 40,
    backgroundColor: '#A0A0A0',
    borderRadius: '50%',
    cursor: 'not-allowed',
  },
]);

export const bubble = style([
  flexCenter,
  {
    position: 'relative',
    width: 190,
    height: 28,
    gap: 4,
    marginRight: 6,
    background: '#DDDDDD',
    borderRadius: 6,
    fontSize: 11,
    color: '#808080',

    '::after': {
      content: ' ',
      position: 'absolute',
      right: -10,
      top: '50%',
      borderStyle: 'solid',
      borderWidth: '6px 0 6px 10px',
      borderColor: 'transparent transparent transparent #DDDDDD',
      transform: 'translateY(-50%)',
    },
  },
]);

export const closeButton = style({
  display: 'flex',
});
