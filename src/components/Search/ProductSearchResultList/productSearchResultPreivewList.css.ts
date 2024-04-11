import { vars } from '@/styles/theme.css';
import { style } from '@vanilla-extract/css';

export const showMoreLink = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  height: 44,
  padding: '12px 0',
  margin: '20px 0',
  border: `1px solid ${vars.colors.border.default}`,
  fontSize: 14,
  borderRadius: 6,
});
