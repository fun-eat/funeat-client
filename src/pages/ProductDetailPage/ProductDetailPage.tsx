import { BottomSheet, useBottomSheet } from '@fun-eat/design-system';
import { useQueryErrorResetBoundary } from '@tanstack/react-query';
import { Suspense } from 'react';
import { useParams, useLocation, useNavigate, Link } from 'react-router-dom';

import { link, linkWrapper, main, section, sortWrapper } from './productDetailPage.css';
import NotFoundPage from '../NotFoundPage';

import {
  SortButton,
  PageHeader,
  SectionHeader,
  ErrorBoundary,
  ErrorComponent,
  Loading,
  SelectOptionList,
} from '@/components/Common';
import { ProductDetailItem, ProductRecipeList } from '@/components/Product';
import { ReviewList } from '@/components/Review';
import { PREVIOUS_PATH_LOCAL_STORAGE_KEY, REVIEW_SORT_OPTIONS } from '@/constants';
import { PATH } from '@/constants/path';
import { useGA, useSelect } from '@/hooks/common';
import { useMemberQuery } from '@/hooks/queries/members';
import { useProductDetailQuery } from '@/hooks/queries/product';
import type { SortOption } from '@/types/common';
import { setLocalStorage } from '@/utils/localStorage';

export const ProductDetailPage = () => {
  const { productId } = useParams();
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const { data: member } = useMemberQuery();
  const { data: productDetail } = useProductDetailQuery(Number(productId));

  const { reset } = useQueryErrorResetBoundary();

  const [currentSortOption, setSortOption] = useSelect<SortOption>(REVIEW_SORT_OPTIONS[0]);
  const { isOpen, isClosing, handleOpenBottomSheet, handleCloseBottomSheet } = useBottomSheet();
  const { gaEvent } = useGA();

  if (!productId) {
    return <NotFoundPage />;
  }

  const handleOpenSortOptionSheet = () => {
    handleOpenBottomSheet();
    gaEvent({ category: 'button', action: '상품 리뷰 정렬 버튼 클릭', label: '상품 리뷰 정렬' });
  };

  const handleLoginButtonClick = () => {
    setLocalStorage(PREVIOUS_PATH_LOCAL_STORAGE_KEY, pathname);
    navigate(PATH.LOGIN);
  };

  return (
    <>
      <PageHeader title="상세" hasBackLink />
      <main className={main}>
        <ProductDetailItem productDetail={productDetail} />

        <div style={{ height: '12px', backgroundColor: '#f9f9f9' }} aria-hidden />

        <section className={section}>
          <SectionHeader name="이 상품이 포함된 꿀조합!" />
          <div style={{ height: '24px' }} />
          <ErrorBoundary fallback={ErrorComponent} handleReset={reset}>
            <Suspense fallback={<Loading />}>
              <ProductRecipeList productId={Number(productId)} />
            </Suspense>
          </ErrorBoundary>
        </section>

        <div style={{ height: '12px', backgroundColor: '#f9f9f9' }} aria-hidden />

        <section className={section}>
          <SectionHeader name="리뷰" />
          <div className={sortWrapper}>
            <SortButton option={currentSortOption} onClick={handleOpenSortOptionSheet} />
          </div>
          <div style={{ height: '24px' }} />
          <ErrorBoundary fallback={ErrorComponent} handleReset={reset}>
            <Suspense fallback={<Loading />}>
              <ReviewList productId={Number(productId)} selectedOption={currentSortOption} />
            </Suspense>
          </ErrorBoundary>
        </section>

        <div className={linkWrapper}>
          {member ? (
            <Link to="review-register" className={link}>
              리뷰 작성하기
            </Link>
          ) : (
            <button type="button" onClick={handleLoginButtonClick} className={link}>
              로그인하고 리뷰 작성하기
            </button>
          )}
        </div>
      </main>

      <BottomSheet isOpen={isOpen} isClosing={isClosing} maxWidth="400px" close={handleCloseBottomSheet}>
        <SelectOptionList
          options={REVIEW_SORT_OPTIONS}
          currentOption={currentSortOption}
          selectOption={setSortOption}
          close={handleCloseBottomSheet}
        />
      </BottomSheet>
    </>
  );
};
