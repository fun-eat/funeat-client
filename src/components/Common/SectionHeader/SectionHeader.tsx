import { Link } from 'react-router-dom';
import { headerContainer, headerTitle } from './sectionHeader.css';
import { SvgIcon } from '@/components/Common';

interface SectionHeaderProps {
  name: string;
  link?: string;
}

const SectionHeader = ({ name, link }: SectionHeaderProps) => {
  return (
    <header className={headerContainer}>
      <p className={headerTitle}>{name}</p>
      {link && (
        <Link to={link}>
          <SvgIcon variant="arrowRight" fill={'#232527'} width={20} height={20} />
        </Link>
      )}
    </header>
  );
};

export default SectionHeader;
