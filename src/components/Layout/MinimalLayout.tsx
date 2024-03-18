import type { PropsWithChildren } from 'react';
import styled from 'styled-components';

const MinimalLayout = ({ children }: PropsWithChildren) => {
  return <MainWrapper>{children}</MainWrapper>;
};

export default MinimalLayout;

const MainWrapper = styled.main`
  position: relative;
  height: 100%;
  padding: 50px 0 90px;
`;
