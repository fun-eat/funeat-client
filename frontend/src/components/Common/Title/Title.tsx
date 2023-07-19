import { Link, Text, theme } from '@fun-eat/design-system';
import { Link as RouterLink } from 'react-router-dom';
import styled from 'styled-components';

import SvgIcon from '../Svg/SvgIcon';

interface TitleProps {
  headingTitle: string;
}

const Title = ({ headingTitle }: TitleProps) => {
  return (
    <TitleContainer>
      <Link as={RouterLink} to=".." relative="path">
        <SvgIconWrapper>
          <SvgIcon variant="arrow" color={theme.colors.gray5} width={15} height={15} />
        </SvgIconWrapper>
      </Link>
      <Text as="p" weight="bold" css="font-size:2.4rem">
        {headingTitle}
      </Text>
    </TitleContainer>
  );
};

export default Title;

const TitleContainer = styled.h1`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const SvgIconWrapper = styled.button`
  position: absolute;
  left: 0;
`;
