import { useTheme } from '@fun-eat/design-system';
import styled from 'styled-components';

import SvgIcon from '../Svg/SvgIcon';

import type { SortOption } from '@/types/common';

interface SortButtonProps {
  option: SortOption;
  onClick: () => void;
}

const SortButton = ({ option, onClick }: SortButtonProps) => {
  const theme = useTheme();

  return (
    <SortButtonContainer type="button" onClick={onClick}>
      <SvgIcon variant="sort" fill={theme.textColors.info} width={18} height={18} />
      {option.label}
    </SortButtonContainer>
  );
};

export default SortButton;

const SortButtonContainer = styled.button`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0;
  column-gap: 4px;
`;
