import type { PropsWithChildren } from 'react';

import { container } from './layout.css';

const MinimalLayout = ({ children }: PropsWithChildren) => {
  return <main className={container.minimal}>{children}</main>;
};

export default MinimalLayout;
