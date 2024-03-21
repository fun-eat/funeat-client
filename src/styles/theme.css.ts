import { createGlobalTheme } from '@vanilla-extract/css';

const border = {
  default: '#E6E6E6',
  navigation: '#F2F2F2',
  light: '#F9F9F9',
};

const icon = {
  default: '#FFB017',
  disabled: '#999999',
};

const background = {
  default: '#FFFFFF',
  category: '#F2F2F2',
  tag: '#BBBBBB',
};

export const vars = createGlobalTheme(':root', {
  colors: {
    primary: '#FFB017',
    secondary1: '#FFC14A',
    secondary2: '#FFD27C',

    white: '#FFFFFF',
    gray1: '#F7F7F7',
    gray2: '#DDDDDD',
    gray3: '#A0A0A0',
    gray4: '#6B6B6B',
    gray5: '#444444',
    black: '#232527',

    success: '#1774FF',
    caution: '#FF9417',
    error: '#FD4545',

    border: border,
    icon: icon,
    background: background,
  },
});
