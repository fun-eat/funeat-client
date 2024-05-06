import type { ComponentPropsWithoutRef, MouseEventHandler } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { leftNavigationWrapper, container, headerTitle, leftTitle, register, link } from './topBar.css';
import SvgIcon from '../Svg/SvgIcon';
import Text from '../Text/Text';

import LogoImage from '@/assets/logo.svg';
import { PATH } from '@/constants/path';
import { vars } from '@/styles/theme.css';

interface TopBarProps {
  children?: React.ReactNode;
  title?: string;
  link?: string;
  state?: unknown;
}

type RegisterButtonProps = ComponentPropsWithoutRef<'button'>;

const TopBar = ({ children }: TopBarProps) => {
  return <header className={container}>{children}</header>;
};

const Logo = () => {
  return (
    <Link to={PATH.HOME} className={link}>
      <LogoImage />
    </Link>
  );
};

const BackLink = ({ state }: TopBarProps) => {
  const navigate = useNavigate();

  const handleBack: MouseEventHandler<HTMLAnchorElement> = (event) => {
    event.preventDefault();

    if (state) {
      navigate('..', { state, relative: 'path' });
      return;
    }

    navigate(-1);
  };

  return (
    <Link to="#" onClick={handleBack}>
      <SvgIcon
        variant="arrowLeft"
        stroke={vars.colors.gray5}
        width={20}
        height={20}
        style={{ transform: 'translateY(2px)' }}
      />
    </Link>
  );
};

const Title = ({ title }: TopBarProps) => {
  return <h1 className={headerTitle}>{title}</h1>;
};

// 왼쪽에 뒤로가기 버튼과 타이틀이 함께 있는 구역
const LeftNavigationGroup = ({ title }: TopBarProps) => {
  return (
    <div className={leftNavigationWrapper}>
      <BackLink />
      <h1 className={leftTitle}>{title}</h1>
    </div>
  );
};

const SearchLink = () => {
  return (
    <Link to={PATH.SEARCH} className={link}>
      <SvgIcon variant="search2" stroke={vars.colors.black} width={20} height={20} />
    </Link>
  );
};

const RegisterButton = ({ ...props }: RegisterButtonProps) => {
  return (
    <button {...props}>
      <Text as="span" size="caption1" weight="semiBold" className={register}>
        등록
      </Text>
    </button>
  );
};

const CloseButton = ({ state }: TopBarProps) => {
  return (
    <Link to=".." relative="path" state={state}>
      <SvgIcon variant="close2" stroke={vars.colors.black} width={20} height={20} />
    </Link>
  );
};

const Spacer = () => {
  return <div style={{ width: 24, height: 24 }} aria-hidden />;
};

TopBar.Logo = Logo;
TopBar.BackLink = BackLink;
TopBar.LeftNavigationGroup = LeftNavigationGroup;
TopBar.Title = Title;
TopBar.SearchLink = SearchLink;
TopBar.RegisterButton = RegisterButton;
TopBar.CloseButton = CloseButton;
TopBar.Spacer = Spacer;

export default TopBar;
