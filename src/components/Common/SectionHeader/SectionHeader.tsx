import { Link } from 'react-router-dom';
import { headerContainer, headerTitle } from './sectionHeader.css';
import { SvgIcon } from '@/components/Common';

interface SectionHeaderProps {
  name: string;
  link?: string;
}

const SectionHeader = ({ name, link }: SectionHeaderProps) => {
  return (
    <div className={headerContainer}>
      <h1 className={headerTitle}>{name}</h1>
      {link && (
        <Link to={link}>
          <SvgIcon variant="arrowRight" width={20} height={20} />
        </Link>
      )}
    </div>
  );
};

export default SectionHeader;
