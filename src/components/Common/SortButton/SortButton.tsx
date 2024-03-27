import SvgIcon from '../Svg/SvgIcon';

import type { SortOption } from '@/types/common';
import { container } from './sortButton.css';

interface SortButtonProps {
  option: SortOption;
  onClick: () => void;
}

const SortButton = ({ option, onClick }: SortButtonProps) => {
  return (
    <button type="button" className={container} onClick={onClick}>
      <SvgIcon variant="arrowUpDown" stroke="#3D3D3D" fill="none" width={14} height={14} />
      {option.label}
    </button>
  );
};

export default SortButton;
