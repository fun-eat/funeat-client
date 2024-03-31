import { useBottomSheet } from '@fun-eat/design-system';
import { useQueryErrorResetBoundary } from '@tanstack/react-query';
import { useState, useRef } from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { registerButton, registerButtonWrapper, section } from './productDetailPage.css';
import NotFoundPage from '../NotFoundPage';

import { SortButton, ScrollButton, PageHeader, SectionHeader } from '@/components/Common';
import { ProductDetailItem } from '@/components/Product';
import { PREVIOUS_PATH_LOCAL_STORAGE_KEY, REVIEW_SORT_OPTIONS } from '@/constants';
import { PATH } from '@/constants/path';
import { useGA, useSortOption } from '@/hooks/common';
import { useMemberQuery } from '@/hooks/queries/members';
import { useProductDetailQuery } from '@/hooks/queries/product';
import { setLocalStorage } from '@/utils/localStorage';

export const ProductDetailPage = () => {
  const { category, productId } = useParams();
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const { data: member } = useMemberQuery();
  const { data: productDetail } = useProductDetailQuery(Number(productId));

  const { reset } = useQueryErrorResetBoundary();

  const { selectedOption, selectSortOption } = useSortOption(REVIEW_SORT_OPTIONS[0]);
  const { isOpen, isClosing, handleOpenBottomSheet, handleCloseBottomSheet } = useBottomSheet();
  const [activeSheet, setActiveSheet] = useState<'registerReview' | 'sortOption'>('sortOption');
  const { gaEvent } = useGA();

  const productDetailPageRef = useRef<HTMLDivElement>(null);

  if (!category || !productId) {
    return <NotFoundPage />;
  }

  const handleOpenRegisterReviewSheet = () => {
    setActiveSheet('registerReview');
    handleOpenBottomSheet();
    gaEvent({ category: 'button', action: '상품 리뷰 작성하기 버튼 클릭', label: '상품 리뷰 작성' });
  };

  const handleOpenSortOptionSheet = () => {
    setActiveSheet('sortOption');
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

      <ProductDetailItem productDetail={productDetail} />

      <div style={{ height: '12px', backgroundColor: '#f9f9f9' }} aria-hidden />

      <section className={section}>
        <SectionHeader name="이 상품이 포함된 꿀조합!" />
      </section>

      <div style={{ height: '12px', backgroundColor: '#f9f9f9' }} aria-hidden />

      <section className={section}>
        <SectionHeader name="리뷰" />
        <SortButtonWrapper>
          <SortButton option={selectedOption} onClick={handleOpenSortOptionSheet} />
        </SortButtonWrapper>
      </section>

      <div className={registerButtonWrapper}>
        <button type="button" className={member ? registerButton.active : registerButton.disabled}>
          {member ? '리뷰 작성하기' : '로그인하고 리뷰 작성하기'}
        </button>
      </div>

      <ScrollButton targetRef={productDetailPageRef} />
    </>
  );
};

const SortButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin: 20px 0;
`;
