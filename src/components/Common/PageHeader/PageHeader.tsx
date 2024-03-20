import { Link } from 'react-router-dom';

import { container, headerTitle } from './pageHeader.css';
import SvgIcon from '../Svg/SvgIcon';

import { PATH } from '@/constants/path';

interface PageHeaderProps {
  title: string;
  hasBackLink?: boolean;
  hasSearchLink?: boolean;
}

const PageHeader = ({ title, hasBackLink, hasSearchLink }: PageHeaderProps) => {
  return (
    <header className={container}>
      {hasBackLink ? (
        <Link to=".." relative="path">
          <SvgIcon variant="arrowLeft" stroke="#444444" width={24} height={24} />
        </Link>
      ) : (
        <div style={{ width: 24, height: 24 }} aria-hidden />
      )}
      <h1 className={headerTitle}>{title}</h1>
      {hasSearchLink ? (
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
