import { Spacing, useBottomSheet, Text, Button } from '@fun-eat/design-system';
import { useQueryErrorResetBoundary } from '@tanstack/react-query';
import { useState, useRef, Suspense } from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import {
  SortButton,
  ScrollButton,
  Loading,
  ErrorBoundary,
  ErrorComponent,
  RegisterButton,
  PageHeader,
} from '@/components/Common';
import { ProductDetailItem } from '@/components/Product';
import { BestReviewItem } from '@/components/Review';
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

  const tabRef = useRef<HTMLUListElement>(null);

  const { selectedOption, selectSortOption } = useSortOption(REVIEW_SORT_OPTIONS[0]);
  const { isOpen, isClosing, handleOpenBottomSheet, handleCloseBottomSheet } = useBottomSheet();
  const [activeSheet, setActiveSheet] = useState<'registerReview' | 'sortOption'>('sortOption');
  const { gaEvent } = useGA();

  const productDetailPageRef = useRef<HTMLDivElement>(null);

  if (!category || !productId) {
    return null;
  }

  const { name, reviewCount } = productDetail;

  const tabMenus = [`리뷰 ${reviewCount}`, '꿀조합'];

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

      <BestReviewItem productId={Number(productId)} />
      <Spacing size={36} />
      {member ? (
        <ErrorBoundary fallback={ErrorComponent} handleReset={reset}>
          <Suspense fallback={<Loading />}>
            <SortButtonWrapper>
              <SortButton option={selectedOption} onClick={handleOpenSortOptionSheet} />
            </SortButtonWrapper>
            <section>
              {/*{isReviewTab ? (
                <ReviewList productId={Number(productId)} selectedOption={selectedOption} />
              ) : (
                <ProductRecipeList productId={Number(productId)} productName={name} selectedOption={selectedOption} />
              )}*/}
            </section>
          </Suspense>
        </ErrorBoundary>
      ) : (
        <ErrorContainer>
          <ErrorDescription align="center" weight="bold" size="lg">
            {/*{isReviewTab ? LOGIN_ERROR_MESSAGE_REVIEW : LOGIN_ERROR_MESSAGE_RECIPE}*/}
          </ErrorDescription>
          <LoginButton
            type="button"
            customWidth="150px"
            customHeight="60px"
            onClick={handleLoginButtonClick}
            color="white"
          >
            로그인하러 가기
          </LoginButton>
        </ErrorContainer>
      )}
      <Spacing size={100} />
      <ReviewRegisterButtonWrapper>
        <RegisterButton
          activeLabel="리뷰 작성하기"
          disabledLabel="로그인 후 리뷰를 작성할 수 있어요"
          onClick={handleOpenRegisterReviewSheet}
        />
      </ReviewRegisterButtonWrapper>
      <ScrollButton targetRef={productDetailPageRef} />
    </>
  );
};

const ProductDetailPageContainer = styled.div`
  height: 100%;
  overflow-y: auto;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const SortButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin: 20px 0;
`;

const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ErrorDescription = styled(Text)`
  padding: 40px 0 20px;
  white-space: pre-wrap;
`;

const LoginButton = styled(Button)`
  border: 1px solid ${({ theme }) => theme.colors.gray4};
`;

const ReviewRegisterButtonWrapper = styled.div`
  position: fixed;
  left: 50%;
  bottom: 0;
  width: calc(100% - 40px);
  height: 80px;
  max-width: 560px;
  background: ${({ theme }) => theme.backgroundColors.default};
  transform: translateX(-50%);
`;
