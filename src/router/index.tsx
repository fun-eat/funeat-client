import { Navigate, createBrowserRouter } from 'react-router-dom';

import App from './App';

import { AuthLayout } from '@/components/Layout';
import { PATH } from '@/constants/path';
import ReviewFormProvider from '@/contexts/ReviewFormContext';
import NotFoundPage from '@/pages/NotFoundPage/NotFoundPage';

const router = createBrowserRouter([
  /** 멤버 접근 페이지 */
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
          const { MemberPage } = await import(/* webpackChunkName: "MemberPage" */ '@/pages/MemberPage/MemberPage');
          return { Component: MemberPage };
        },
      },
      {
        path: `${PATH.MEMBER}/modify`,
        async lazy() {
          const { MemberModifyPage } = await import(
            /* webpackChunkName: "MemberModifyPage" */ '@/pages/MemberModifyPage/MemberModifyPage'
          );
          return { Component: MemberModifyPage };
        },
      },
      {
        path: `${PATH.MEMBER}/post`,
        async lazy() {
          const { MemberPostPage } = await import(
            /* webpackChunkName: "MemberPostPage" */ '@/pages/MemberPostPage/MemberPostPage'
          );
          return { Component: MemberPostPage };
        },
      },
      {
        path: `${PATH.MEMBER}/bookmark`,
        async lazy() {
          const { MemberRecipeBookmarkPage } = await import(
            /* webpackChunkName: "MemberRecipeBookmarkPage" */ '@/pages/MemberRecipeBookmarkPage'
          );
          return { Component: MemberRecipeBookmarkPage };
        },
      },
      {
        path: `${PATH.RECIPE}/:recipeId`,
        async lazy() {
          const { RecipeDetailPage } = await import(
            /* webpackChunkName: "RecipeDetailPage" */ '@/pages/RecipeDetailPage/RecipeDetailPage'
          );
          return { Component: RecipeDetailPage };
        },
      },
    ],
  },
  /** 레이아웃이 있는 페이지 */
  {
    path: '/',
    element: <App hasLayout />,
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
      {
        path: PATH.RECIPE,
        async lazy() {
          const { RecipePage } = await import(/* webpackChunkName: "RecipePage" */ '@/pages/RecipePage/RecipePage');
          return { Component: RecipePage };
        },
      },
    ],
  },
  /** 로그인 페이지 */
  {
    path: '/',
    element: <App />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: PATH.LOGIN,
        async lazy() {
          const { LoginPage } = await import(/* webpackChunkName: "LoginPage" */ '@/pages/LoginPage/LoginPage');
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
  /** 상품 페이지 */
  {
    path: '/',
    element: <App />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: `${PATH.PRODUCT_LIST}/:category`,
        async lazy() {
          const { ProductListPage } = await import(
            /* webpackChunkName: "ProductListPage" */ '@/pages/ProductListPage/ProductListPage'
          );
          return { Component: ProductListPage };
        },
      },
      {
        path: `${PATH.PRODUCT_LIST}/detail/:productId`,
        async lazy() {
          const { ProductDetailPage } = await import(
            /* webpackChunkName: "ProductDetailPage" */ '@/pages/ProductDetailPage/ProductDetailPage'
          );
          return { Component: ProductDetailPage };
        },
      },
    ],
  },
  /** 검색 페이지 */
  {
    path: '/',
    element: <App />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: PATH.SEARCH,
        async lazy() {
          const { SearchPage } = await import(/* webpackChunkName: "SearchPage" */ '@/pages/SearchPage/SearchPage');
          return { Component: SearchPage };
        },
      },
      {
        path: `${PATH.SEARCH}/tags`,
        async lazy() {
          const { TagSearchResultPage } = await import(
            /* webpackChunkName: "TagSearchResultPage" */ '@/pages/SearchPage/TagSearchResultPage'
          );
          return { Component: TagSearchResultPage };
        },
      },
      {
        path: `${PATH.SEARCH}/products`,
        async lazy() {
          const { ProductSearchListPage } = await import(
            /* webpackChunkName: "ProductSearchListPage" */ '@/pages/ProductSearchListPage/ProductSearchListPage'
          );
          return { Component: ProductSearchListPage };
        },
      },
      {
        path: `${PATH.SEARCH}/recipes`,
        async lazy() {
          const { RecipeSearchListPage } = await import(
            /* webpackChunkName: "RecipeSearchListPage" */ '@/pages/RecipeSearchListPage/RecipeSearchListPage'
          );
          return { Component: RecipeSearchListPage };
        },
      },
    ],
  },
  /** 상품 리뷰 페이지 */
  {
    path: '/',
    element: (
      <ReviewFormProvider>
        <App />
      </ReviewFormProvider>
    ),
    errorElement: <NotFoundPage />,
    children: [
      {
        path: `${PATH.PRODUCT_LIST}/detail/:productId/review-register`,
        async lazy() {
          const { ReviewRegisterPage } = await import(
            /* webpackChunkName: "ReviewRegisterPage" */ '@/pages/ReviewRegisterPage/ReviewRegisterPage'
          );
          return { Component: ReviewRegisterPage };
        },
      },
    ],
  },
]);

export default router;
