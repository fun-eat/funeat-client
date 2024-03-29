import { Navigate, createBrowserRouter } from 'react-router-dom';

import App from './App';

import { AuthLayout } from '@/components/Layout';
import { PATH } from '@/constants/path';
import CategoryProvider from '@/contexts/CategoryContext';
import NotFoundPage from '@/pages/NotFoundPage';

const router = createBrowserRouter([
  /** 로그인이 안되었다면 로그인 페이지로 리다이렉트 */
  {
    path: '/',
    element: (
      <AuthLayout>
        <App />
      </AuthLayout>
    ),
    errorElement: <Navigate to={PATH.LOGIN} replace />,
    children: [
      {
        path: PATH.MEMBER,
        async lazy() {
          const { MemberPage } = await import(/* webpackChunkName: "MemberPage" */ '@/pages/MemberPage');
          return { Component: MemberPage };
        },
      },
      {
        path: `${PATH.MEMBER}/modify`,
        async lazy() {
          const { MemberModifyPage } = await import(
            /* webpackChunkName: "MemberModifyPage" */ '@/pages/MemberModifyPage'
          );
          return { Component: MemberModifyPage };
        },
      },
      {
        path: `${PATH.MEMBER}/review`,
        async lazy() {
          const { MemberReviewPage } = await import(
            /* webpackChunkName: "MemberReviewPage" */ '@/pages/MemberReviewPage'
          );
          return { Component: MemberReviewPage };
        },
      },
      {
        path: `${PATH.MEMBER}/recipe`,
        async lazy() {
          const { MemberRecipePage } = await import(
            /* webpackChunkName: "MemberRecipePage" */ '@/pages/MemberRecipePage'
          );
          return { Component: MemberRecipePage };
        },
      },
    ],
  },
  /** 로그인이 안되었다면 로그인 페이지로 리다이렉트하면서 헤더만 있는 레이아웃 */
  {
    path: '/',
    element: (
      <AuthLayout>
        <App layout="minimal" />
      </AuthLayout>
    ),
    errorElement: <Navigate to={PATH.LOGIN} replace />,
    children: [
      {
        path: `${PATH.RECIPE}/:recipeId`,
        async lazy() {
          const { RecipeDetailPage } = await import(
            /* webpackChunkName: "RecipeDetailPage" */ '@/pages/RecipeDetailPage'
          );
          return { Component: RecipeDetailPage };
        },
      },
    ],
  },
  /** 헤더와 네비게이션 바가 있는 기본 레이아웃 */
  {
    path: '/',
    element: (
      <CategoryProvider>
        <App />
      </CategoryProvider>
    ),
    errorElement: <NotFoundPage />,
    children: [
      {
        index: true,
        async lazy() {
          const { HomePage } = await import(/* webpackChunkName: "HomePage" */ '@/pages/HomePage/HomePage');
          return { Component: HomePage };
        },
      },
      {
        path: PATH.PRODUCT_LIST,
        async lazy() {
          const { ProductPage } = await import(/* webpackChunkName: "ProductPage" */ '@/pages/ProductPage/ProductPage');
          return { Component: ProductPage };
        },
      },
      {
        path: `${PATH.REVIEW}/:reviewId`,
        async lazy() {
          const { ReviewDetailPage } = await import(
            /* webpackChunkName: "ReviewDetailPage" */ '@/pages/ReviewDetailPage'
          );
          return { Component: ReviewDetailPage };
        },
      },
    ],
  },
  /** 헤더, 네비게이션 모두 없는 레이아웃 */
  {
    path: '/',
    element: <App layout="minimal" />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: PATH.LOGIN,
        async lazy() {
          const { LoginPage } = await import(/* webpackChunkName: "LoginPage" */ '@/pages/LoginPage');
          return { Component: LoginPage };
        },
      },
      {
        path: `${PATH.LOGIN}/:authProvider`,
        async lazy() {
          const { AuthPage } = await import(/* webpackChunkName: "AuthPage" */ '@/pages/AuthPage');
          return { Component: AuthPage };
        },
      },
    ],
  },
  /** 네비게이션 바 없이 헤더만 있는 레이아웃 */
  {
    path: '/',
    element: (
      <CategoryProvider>
        <App layout="minimal" />
      </CategoryProvider>
    ),
    errorElement: <NotFoundPage />,
    children: [
      {
        path: `${PATH.PRODUCT_LIST}/:category/:productId`,
        async lazy() {
          const { ProductDetailPage } = await import(
            /* webpackChunkName: "ProductDetailPage" */ '@/pages/ProductDetailPage'
          );
          return { Component: ProductDetailPage };
        },
      },
      {
        path: PATH.SEARCH,
        async lazy() {
          const { SearchPage } = await import(/* webpackChunkName: "SearchPage" */ '@/pages/SearchPage/SearchPage');
          return { Component: SearchPage };
        },
      },
    ],
  },
  /** 네비게이션과 헤더(검색 아이콘이 없는)가 있는 레이아웃 */
  {
    path: '/',
    element: (
      <CategoryProvider>
        <App layout="minimal" />
      </CategoryProvider>
    ),
    errorElement: <NotFoundPage />,
    children: [
      {
        path: PATH.RECIPE,
        async lazy() {
          const { RecipePage } = await import(/* webpackChunkName: "RecipePage" */ '@/pages/RecipePage');
          return { Component: RecipePage };
        },
      },
      {
        path: `${PATH.PRODUCT_LIST}/:category`,
        async lazy() {
          const { ProductListPage } = await import(
            /* webpackChunkName: "ProductListPage" */ '@/pages/ProductListPage/ProductListPage'
          );
          return { Component: ProductListPage };
        },
      },
    ],
  },
]);

export default router;
