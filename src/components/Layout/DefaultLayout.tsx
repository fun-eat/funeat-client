import type { PropsWithChildren } from 'react';

import { container } from './layout.css';
import Header from '../Common/Header/Header';
import NavigationBar from '../Common/NavigationBar/NavigationBar';

const DefaultLayout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Header />
      <main id="main" className={container.default}>
        {children}
      </main>
      <NavigationBar />
    </>
  );
};

export default DefaultLayout;
