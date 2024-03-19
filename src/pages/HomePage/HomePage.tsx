import { Spacing } from '@fun-eat/design-system';
import { useQueryErrorResetBoundary } from '@tanstack/react-query';
import { Suspense } from 'react';
import { Link } from 'react-router-dom';

import { categoryListWrapper, categorySection, searchRouterWrapper, sectionWrapper } from './homePage.css';

import {
  Loading,
  ErrorBoundary,
  ErrorComponent,
  CategoryFoodList,
  CategoryStoreList,
  SvgIcon,
  Banner,
  SectionHeader,
} from '@/components/Common';
import { ProductRankingList, ReviewRankingList, RecipeRankingList } from '@/components/Rank';
import { PATH } from '@/constants/path';
import channelTalk from '@/service/channelTalk';

export const HomePage = () => {
  const { reset } = useQueryErrorResetBoundary();

  channelTalk.loadScript();

  channelTalk.boot({
    pluginKey: process.env.CHANNEL_TALK_KEY ?? '',
  });

  return (
    <>
      <section>
        <Banner />
      </section>
      <section className={categorySection}>
        <Link to={PATH.SEARCH}>
          <div className={searchRouterWrapper}>
            <p>상품 또는 꿀!조합을 검색해보세요</p>
            <SvgIcon variant="search2" width={20} height={20} stroke="#808080" />
          </div>
        </Link>
        <Suspense fallback={null}>
          <div className={categoryListWrapper}>
            <CategoryFoodList />
            <CategoryStoreList />
          </div>
        </Suspense>
      </section>

      <section className={sectionWrapper}>
        <SectionHeader name="떠오르는 조합" link={PATH.RECIPE} />
        <Spacing size={12} />
        <ErrorBoundary fallback={ErrorComponent} handleReset={reset}>
          <Suspense fallback={<Loading />}>
            <RecipeRankingList />
          </Suspense>
        </ErrorBoundary>
      </section>

      <div style={{ height: '12px', backgroundColor: '#f9f9f9' }} aria-hidden />

      <section className={sectionWrapper}>
        <SectionHeader name="상품 랭킹" />
        <Spacing size={8} />
        <ErrorBoundary fallback={ErrorComponent} handleReset={reset}>
          <Suspense fallback={<Loading />}>
            <ProductRankingList />
          </Suspense>
        </ErrorBoundary>
      </section>

      <section className={sectionWrapper}>
        <SectionHeader name="오늘의 리뷰" />
        <Spacing size={10} />
        <ErrorBoundary fallback={ErrorComponent} handleReset={reset}>
          <Suspense fallback={<Loading />}>
            <ReviewRankingList />
          </Suspense>
        </ErrorBoundary>
      </section>
    </>
  );
};
