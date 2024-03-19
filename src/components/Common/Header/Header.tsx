import { Link } from 'react-router-dom';

import { container } from './header.css';
import SvgIcon from '../Svg/SvgIcon';

import Logo from '@/assets/logo.svg';
import { PATH } from '@/constants/path';

const Header = () => {
  return (
    <header className={container}>
      <Link to={PATH.HOME}>
        <Logo width={120} />
      </Link>
      <Link to={`${PATH.SEARCH}/integrated`}>
        <SvgIcon variant="search2" width={20} height={20} fill="none" stroke="#232527" />
      </Link>
    </header>
  );
};

export default Header;
