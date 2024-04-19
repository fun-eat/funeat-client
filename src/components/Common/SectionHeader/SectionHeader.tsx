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
      {/* Heading 컴포넌트로 교체 weight bold */}
      <h1 className={title}>{name}</h1>
      {link && (
        <Link to={link} state={state}>
          <SvgIcon variant="arrowRight" width={20} height={20} style={{ transform: 'translateY(2px)' }} />
        </Link>
      )}
    </div>
  );
};

export default SectionHeader;
