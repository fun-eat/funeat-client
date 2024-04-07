import { BottomSheet, useBottomSheet } from '@fun-eat/design-system';
import { useParams } from 'react-router-dom';

import { section } from './reviewRegisterPage.css';
import NotFoundPage from '../NotFoundPage';

import { ReviewRegisterForm } from '@/components/Review';
import ReviewTagSheet from '@/components/Review/ReviewTagSheet/ReviewTagSheet';
import ReviewFormProvider from '@/contexts/ReviewFormContext';

export const ReviewRegisterPage = () => {
  const { productId } = useParams<{ productId: string }>();
  const { isOpen, isClosing, handleOpenBottomSheet, handleCloseBottomSheet } = useBottomSheet();

  if (!productId || isNaN(Number(productId))) {
    return <NotFoundPage />;
  }

  return (
    <ReviewFormProvider>
      <main>
        <section className={section}>
          <ReviewRegisterForm productId={Number(productId)} openBottomSheet={handleOpenBottomSheet} />
        </section>
        <BottomSheet isOpen={isOpen} isClosing={isClosing} maxWidth="400px" close={handleCloseBottomSheet}>
          <ReviewTagSheet />
        </BottomSheet>
      </main>
    </ReviewFormProvider>
  );
};
