import { useQueryErrorResetBoundary } from '@tanstack/react-query';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { ErrorBoundary, ErrorComponent, Loading } from '@/components/Common';
import { MinimalLayout, DefaultLayout } from '@/components/Layout';
import { useRouteChangeTracker } from '@/hooks/common';

interface AppProps {
  layout?: 'default' | 'minimal';
}

const App = ({ layout = 'default' }: AppProps) => {
  const { reset } = useQueryErrorResetBoundary();

  useRouteChangeTracker();

  if (layout === 'minimal') {
    return (
      <ErrorBoundary fallback={ErrorComponent} handleReset={reset}>
        <Suspense fallback={<Loading />}>
          <MinimalLayout>
            <Outlet />
          </MinimalLayout>
        </Suspense>
      </ErrorBoundary>
    );
  }

  return (
    <ErrorBoundary fallback={ErrorComponent} handleReset={reset}>
      <Suspense fallback={<Loading />}>
        <DefaultLayout>
          <Outlet />
        </DefaultLayout>
      </Suspense>
    </ErrorBoundary>
  );
};
export default App;
