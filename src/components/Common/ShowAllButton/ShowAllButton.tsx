import { Link } from 'react-router-dom';

import { moreIconWrapper, linkWrapper } from './showAllButton.css';

import { SvgIcon, Text } from '@/components/Common';
import { vars } from '@/styles/theme.css';

interface ShowAllButtonProps {
  link: string;
}

const ShowAllButton = ({ link }: ShowAllButtonProps) => {
  return (
    <Link to={link} className={linkWrapper}>
      <div className={moreIconWrapper}>
        <SvgIcon variant="arrowRight" fill="none" stroke={vars.colors.gray5} />
      </div>
      <Text as="span" color="info" weight="semiBold" size="caption2">
        전체보기
      </Text>
    </Link>
  );
};

export default ShowAllButton;
