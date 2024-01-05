import { useState } from 'react';
import type { CSSProp } from 'styled-components';
import styled from 'styled-components';

import DefaultMemberImage from '@/assets/defaultProfile.png';

interface MemberImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  css?: CSSProp;
}

const MemberImage = ({ src, alt, width = 45, height = 45, css }: MemberImageProps) => {
  const [imageSrc, setImageSrc] = useState(src);

  const handleImageError = () => {
    setImageSrc(DefaultMemberImage);
  };

  return (
    <StyledMemberImage src={imageSrc} alt={alt} width={width} height={height} css={css} onError={handleImageError} />
  );
};

export default MemberImage;

const StyledMemberImage = styled.img`
  border: 2px solid ${({ theme }) => theme.colors.primary};
  border-radius: 50%;
  background: ${({ theme }) => theme.backgroundColors.default};
  object-fit: cover;
  ${({ css }) => css};
`;
