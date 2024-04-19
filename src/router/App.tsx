import { useQueryErrorResetBoundary } from '@tanstack/react-query';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { ErrorBoundary, ErrorComponent, Loading } from '@/components/Common';
import { Layout } from '@/components/Layout';
import { useRouteChangeTracker } from '@/hooks/common';

interface AppProps {
  hasLayout?: boolean;
}

const App = ({ hasLayout = false }: AppProps) => {
  const { reset } = useQueryErrorResetBoundary();

  useRouteChangeTracker();

  if (hasLayout) {
    return (
      <ErrorBoundary fallback={ErrorComponent} handleReset={reset}>
        <Suspense fallback={<Loading />}>
          <Outlet />
        </Suspense>
      </ErrorBoundary>
    );
  }

  return (
    <ErrorBoundary fallback={ErrorComponent} handleReset={reset}>
      <Suspense fallback={<Loading />}>
        <Layout>
          <Outlet />
        </Layout>
      </Suspense>
    </ErrorBoundary>
  );
};
export default App;
