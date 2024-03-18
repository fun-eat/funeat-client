import type { PropsWithChildren } from 'react';

import { defaultLayout } from './layout.css';
import Header from '../Common/Header/Header';
import NavigationBar from '../Common/NavigationBar/NavigationBar';

const DefaultLayout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Header />
      <main id="main" className={defaultLayout}>
        {children}
      </main>
      <NavigationBar />
    </>
  );
};

export default DefaultLayout;
