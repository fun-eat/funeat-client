import { useState } from 'react';

import { container } from './memberImage.css';

import DefaultMemberImage from '@/assets/defaultProfile.png';

interface MemberImageProps {
  src: string;
  width?: number;
  height?: number;
}

const MemberImage = ({ src, width = 48, height = 48 }: MemberImageProps) => {
  const [isError, setIsError] = useState(false);

  const handleImageError = () => {
    setIsError(true);
  };

  return (
    <img
      className={container}
      src={isError ? DefaultMemberImage : src}
      alt="사용자 프로필"
      width={width}
      height={height}
      onError={handleImageError}
    />
  );
};

export default MemberImage;
