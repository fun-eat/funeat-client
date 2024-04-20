import { Link } from 'react-router-dom';

import { container, link } from './header.css';
import SvgIcon from '../Svg/SvgIcon';

import Logo from '@/assets/logo.svg';
import { PATH } from '@/constants/path';
import { vars } from '@/styles/theme.css';

const Header = () => {
  return (
    <header className={container}>
      <Link to={PATH.HOME} className={link}>
        <Logo />
      </Link>
      <Link to={PATH.SEARCH} className={link}>
        <SvgIcon variant="search2" width={20} height={20} fill={vars.colors.black} />
      </Link>
    </header>
  );
};

export default Header;
