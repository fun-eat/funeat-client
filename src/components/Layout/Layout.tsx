import type { PropsWithChildren } from 'react';

import { main } from './layout.css';
import { TopBar } from '../Common';
import NavigationBar from '../Common/NavigationBar/NavigationBar';

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <TopBar>
        <TopBar.Logo />
        <TopBar.SearchLink />
      </TopBar>

      <main id="main" className={main}>
        {children}
      </main>
      <NavigationBar />
    </>
  );
};

export default Layout;
