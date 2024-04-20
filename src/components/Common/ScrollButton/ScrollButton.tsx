import type { RefObject } from 'react';

import { container } from './scrollButton.css';
import SvgIcon from '../Svg/SvgIcon';

import { useScroll } from '@/hooks/common';

interface ScrollButtonProps {
  targetRef: RefObject<HTMLElement>;
}

const ScrollButton = ({ targetRef }: ScrollButtonProps) => {
  const { scrollToTop } = useScroll();

  const handleScroll = () => {
    if (targetRef) {
      scrollToTop(targetRef);
    }
  };

  return (
    <button type="button" className={container} onClick={handleScroll}>
      <SvgIcon variant="arrowUp" width={17} height={17} fill="none" stroke="#6B6B6B" />
    </button>
  );
};

export default ScrollButton;
