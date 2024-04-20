import { Link } from 'react-router-dom';

import { container, title } from './sectionHeader.css';

import { SvgIcon } from '@/components/Common';

interface SectionHeaderProps {
  name: string;
  link?: string;
  state?: unknown;
}

const SectionHeader = ({ name, link, state }: SectionHeaderProps) => {
  return (
    <div className={container}>
      <h2 className={title}>{name}</h2>
      {link && (
        <Link to={link} state={state}>
          <SvgIcon variant="arrowRight" width={16} height={16} style={{ transform: 'translateY(2px)' }} />
        </Link>
      )}
    </div>
  );
};

export default SectionHeader;
