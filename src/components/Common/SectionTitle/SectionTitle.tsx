import { Link } from 'react-router-dom';

import { container, wrapper } from './sectionTitle.css';

import { SvgIcon, Text } from '@/components/Common';
import { PATH } from '@/constants/path';
import { vars } from '@/styles/theme.css';

interface SectionTitleProps {
  name: string;
  hasSearchLink?: boolean;
}

const SectionTitle = ({ name, hasSearchLink }: SectionTitleProps) => {
  return (
    <div className={container}>
      <div className={wrapper}>
        <Link to=".." relative="path">
          <SvgIcon variant="arrowLeft" stroke={vars.colors.black} height={24} />
        </Link>
        <Text size="headline" weight="semiBold">
          {name}
        </Text>
      </div>
      {hasSearchLink && (
        <Link to={PATH.SEARCH}>
          <SvgIcon variant="search2" stroke={vars.colors.black} width={20} height={20} />
        </Link>
      )}
    </div>
  );
};

export default SectionTitle;
