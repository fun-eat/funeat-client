import { Link } from 'react-router-dom';

import { container, headerTitle } from './pageHeader.css';

import SvgIcon from '../Svg/SvgIcon';
import { PATH } from '@/constants/path';
import { useRoutePage } from '@/hooks/common';

interface PageHeaderProps {
  title: string;
  isBackActive?: boolean;
  isSearchActive?: boolean;
}

const PageHeader = ({ title, isBackActive, isSearchActive }: PageHeaderProps) => {
  const { routeBack } = useRoutePage();

  return (
    <header className={container}>
      {isBackActive ? (
        <button type="button" onClick={routeBack}>
          <SvgIcon variant="arrowLeft" stroke="#444444" width={24} height={24} />
        </button>
      ) : (
        <div style={{ width: 24, height: 24 }} aria-hidden />
      )}
      <h1 className={headerTitle}>{title}</h1>
      {isSearchActive ? (
        <Link to={`${PATH.SEARCH}/integrated`}>
          <SvgIcon variant="search2" stroke="#232527" width={20} height={20} />
        </Link>
      ) : (
        <div style={{ width: 20, height: 20 }} aria-hidden />
      )}
    </header>
  );
};

export default PageHeader;
