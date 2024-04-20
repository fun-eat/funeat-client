import type { PropsWithChildren } from 'react';

import { main } from './layout.css';
import Header from '../Common/Header/Header';
import NavigationBar from '../Common/NavigationBar/NavigationBar';

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Header />
      <main id="main" className={main}>
        {children}
      </main>
      <NavigationBar />
    </>
  );
};

export default Layout;
