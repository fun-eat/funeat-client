import type { CSSProp } from 'styled-components';
import styled from 'styled-components';

interface MemberImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  css?: CSSProp;
}

const MemberImage = ({ src, alt, width, height, css }: MemberImageProps) => {
  return <StyledMemberImage src={src} alt={alt} width={width} height={height} css={css} />;
};

export default MemberImage;

const StyledMemberImage = styled.img`
  border: 2px solid ${({ theme }) => theme.colors.primary};
  border-radius: 50%;
  background: ${({ theme }) => theme.backgroundColors.default};
  ${({ css }) => css};
`;
