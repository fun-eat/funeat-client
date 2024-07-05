import { BottomSheet, useBottomSheet } from '@fun-eat/design-system';
import { useParams } from 'react-router-dom';

import { section } from './reviewRegisterPage.css';
import NotFoundPage from '../NotFoundPage/NotFoundPage';

import { TopBar } from '@/components/Common';
import { ReviewRegisterForm, ReviewTagSheet } from '@/components/Review';
import { useReviewFormValueContext } from '@/hooks/context';

export const ReviewRegisterPage = () => {
  const { productId } = useParams<{ productId: string }>();
  const { isValid } = useReviewFormValueContext();
  const { isOpen, isClosing, handleOpenBottomSheet, handleCloseBottomSheet } = useBottomSheet();

  if (!productId || isNaN(Number(productId))) {
    return <NotFoundPage />;
  }

  return (
    <>
      <TopBar>
        <TopBar.LeftNavigationGroup title="리뷰 작성" />
        <TopBar.RegisterButton form="review-form" disabled={!isValid} />
      </TopBar>
      <main>
        <section className={section}>
          <ReviewRegisterForm productId={Number(productId)} openBottomSheet={handleOpenBottomSheet} />
        </section>
        <BottomSheet isOpen={isOpen} isClosing={isClosing} maxWidth="400px" close={handleCloseBottomSheet}>
          <ReviewTagSheet close={handleCloseBottomSheet} />
        </BottomSheet>
      </main>
    </>
  );
};
