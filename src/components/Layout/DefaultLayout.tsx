import type { PropsWithChildren } from 'react';
import styled from 'styled-components';

import Header from '../Common/Header/Header';
import NavigationBar from '../Common/NavigationBar/NavigationBar';

const DefaultLayout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Header />
      <MainWrapper id="main">{children}</MainWrapper>
      <NavigationBar />
    </>
  );
};

export default DefaultLayout;

const MainWrapper = styled.main`
  position: relative;
  padding: 50px 0 90px;
`;
