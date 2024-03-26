import { theme } from '@fun-eat/design-system';
import type { ComponentPropsWithoutRef, CSSProperties } from 'react';

export const SVG_ICON_VARIANTS = [
  'search2',
  'home2',
  'recipe2',
  'forkSpoon2',
  'camera2',
  'favorite2',
  'category2',
  'member2',
  'pencil2',
  'star2',
  'review2',
  'check2',
  'recipe',
  'list',
  'member',
  'search',
  'arrow',
  'bookmark',
  'bookmarkFilled',
  'review',
  'star',
  'favorite',
  'favoriteFilled',
  'home',
  'sort',
  'kakao',
  'close',
  'triangle',
  'plus',
  'pencil',
  'camera',
  'link',
  'plane',
  'info',
  'trashcan',
  'arrowUp',
  'arrowLeft',
  'arrowRight',
  'heartEmpty',
  'heartFilled',
  'close2',
  'disk',
] as const;
export type SvgIconVariant = (typeof SVG_ICON_VARIANTS)[number];

interface SvgIconProps extends ComponentPropsWithoutRef<'svg'> {
  /**
   * SvgSprite 컴포넌트의 symbol id입니다.
   */
  variant: SvgIconVariant;
  /**
   * SvgIcon의 면 색상입니다. (기본값 none)
   */
  fill?: CSSProperties['fill'];
  /**
   * SvgIcon의 선 색상입니다. (기본값 gray4)
   */
  stroke?: CSSProperties['stroke'];
  /**
   * SvgIcon의 너비입니다. (기본값 24)
   */
  width?: number;
  /**
   * SvgIcon의 높이입니다. (기본값 24)
   */
  height?: number;
}

const SvgIcon = ({
  variant,
  width = 24,
  height = 24,
  fill = theme.colors.gray4,
  stroke = 'none',
  ...props
}: SvgIconProps) => {
  return (
    <svg width={width} height={height} fill={fill} stroke={stroke} {...props}>
      <use href={`#${variant}`} />
    </svg>
  );
};

export default SvgIcon;
