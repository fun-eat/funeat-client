import { Link } from 'react-router-dom';

import { headerContainer, headerWithSearchContainer } from './header.css';
import SvgIcon from '../Svg/SvgIcon';

import Logo from '@/assets/logo.svg';
import { PATH } from '@/constants/path';

interface HeaderProps {
  hasSearch?: boolean;
}

const Header = ({ hasSearch = true }: HeaderProps) => {
  if (hasSearch) {
    return (
      <header className={headerWithSearchContainer}>
        <Link to={PATH.HOME}>
          <Logo width={160} />
        </Link>
        <Link to={`${PATH.SEARCH}/integrated`}>
          <SvgIcon variant="search2" width={20} height={20} stroke="#232527" />
        </Link>
      </header>
    );
  }

  return (
    <header className={headerContainer}>
      <Link to={PATH.HOME}>
        <Logo width={180} />
      </Link>
    </header>
  );
};

export default Header;
