import { style } from '@vanilla-extract/css';

export const container = style({
  position: 'sticky',
  // 임의로 작성한 값. 추후 수정 예정
  bottom: 100,
  right: 20,
  width: 40,
  height: 40,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  background: '#F9F9F9',
  borderRadius: '50%',
  float: 'right',
});
