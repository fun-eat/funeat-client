import type { PropsWithChildren } from 'react';

import { minimalLayout } from './layout.css';

const MinimalLayout = ({ children }: PropsWithChildren) => {
  return <main className={minimalLayout}>{children}</main>;
};

export default MinimalLayout;
