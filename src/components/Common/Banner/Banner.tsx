import { Link } from 'react-router-dom';

import { bannerImage } from './banner.css';

import { useBannerQuery } from '@/hooks/queries/banner';

const Banner = () => {
  const { data: banners } = useBannerQuery();
  const { link, image } = banners[Math.floor(Math.random() * banners.length)];

  if (!link) {
    return <img className={bannerImage} src={image} width={600} height={360} alt="배너" />;
  }

  return (
    <Link to={link}>
      <img className={bannerImage} src={image} width={600} height={360} alt="배너" />
    </Link>
  );
};

export default Banner;
