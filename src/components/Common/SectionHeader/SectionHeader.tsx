import { Link } from 'react-router-dom';

import { container, title } from './sectionHeader.css';

import { SvgIcon } from '@/components/Common';

interface SectionHeaderProps {
  name: string;
  link?: string;
}

const SectionHeader = ({ name, link }: SectionHeaderProps) => {
  return (
    <div className={container}>
      <h1 className={title}>{name}</h1>
      {link && (
        <Link to={link}>
          <SvgIcon variant="arrowRight" width={20} height={20} />
        </Link>
      )}
    </div>
  );
};

export default SectionHeader;
