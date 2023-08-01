import { Outlet } from 'react-router-dom';

import { AuthLayout, DefaultLayout, DetailLayout } from '@/components/Layout';

interface AppProps {
  layout?: 'auth' | 'detail' | 'default';
}

const App = ({ layout = 'default' }: AppProps) => {
  if (layout === 'auth') {
    return (
      <AuthLayout>
        <Outlet />
      </AuthLayout>
    );
  }

  if (layout === 'detail') {
    return (
      <DetailLayout>
        <Outlet />
      </DetailLayout>
    );
  }

  return (
    <DefaultLayout>
      <Outlet />
    </DefaultLayout>
  );
};
export default App;