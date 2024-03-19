import { useParams } from 'react-router-dom';

import NotFoundPage from '../NotFoundPage';

import PageHeader from '@/components/Common/PageHeader/PageHeader';
import { PAGE_TITLE } from '@/constants';
import { isCategoryVariant } from '@/types/common';

export const ProductListPage = () => {
  const { category } = useParams();

  if (!category || !isCategoryVariant(category)) {
    return <NotFoundPage />;
  }

  const pageTitle = category === 'food' ? PAGE_TITLE.FOOD : PAGE_TITLE.STORE;

  return (
    <>
      <PageHeader title={pageTitle} hasBackLink hasSearchLink state={category} />
    </>
  );
};
