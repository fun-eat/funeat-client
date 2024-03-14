import { Heading, Spacing, Text, useTheme } from '@fun-eat/design-system';
import { useQueryErrorResetBoundary } from '@tanstack/react-query';
import { Suspense } from 'react';
import { Link } from 'react-router-dom';

import {
  categoryListWrapper,
  categorytSection,
  rankingInfoWrapper,
  searchRouterWrapper,
  sectionWrapper,
} from './homePage.css';

import {
  Loading,
  ErrorBoundary,
  ErrorComponent,
  CategoryFoodList,
  CategoryStoreList,
  SvgIcon,
  Banner,
} from '@/components/Common';
import { ProductRankingList, ReviewRankingList, RecipeRankingList } from '@/components/Rank';
import { PATH } from '@/constants/path';
import channelTalk from '@/service/channelTalk';

export const HomePage = () => {
  const { reset } = useQueryErrorResetBoundary();
  const theme = useTheme();

  channelTalk.loadScript();

  channelTalk.boot({
    pluginKey: process.env.CHANNEL_TALK_KEY ?? '',
  });

  return (
    <>
      <section>
        <Banner />
      </section>
      <section className={categorytSection}>
        <Link to={`${PATH.SEARCH}/integrated`}>
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
      <Spacing size={40} />
      <section className={sectionWrapper}>
        <Heading as="h2" size="xl">
          🍯 꿀조합 랭킹
        </Heading>
        <div className={rankingInfoWrapper}>
          <SvgIcon variant="info" width={18} height={18} fill={theme.textColors.info} />
          <Text size="sm" color={theme.textColors.info}>
            꿀조합 랭킹은 자체 알고리즘 기반으로 업데이트됩니다.
          </Text>
        </div>
        <ErrorBoundary fallback={ErrorComponent} handleReset={reset}>
          <Suspense fallback={<Loading />}>
            <RecipeRankingList />
          </Suspense>
        </ErrorBoundary>
      </section>
      <Spacing size={36} />
      <section className={sectionWrapper}>
        <Heading as="h2" size="xl">
          🍙 상품 랭킹
        </Heading>
        <div className={rankingInfoWrapper}>
          <SvgIcon variant="info" width={18} height={18} fill={theme.textColors.info} />
          <Text size="sm" color={theme.textColors.info}>
            상품 랭킹은 2주 단위로 업데이트됩니다.
          </Text>
        </div>
        <ErrorBoundary fallback={ErrorComponent} handleReset={reset}>
          <Suspense fallback={<Loading />}>
            <ProductRankingList />
          </Suspense>
        </ErrorBoundary>
      </section>
      <Spacing size={36} />
      <section className={sectionWrapper}>
        <Heading as="h2" size="xl">
          📝 리뷰 랭킹
        </Heading>
        <div className={rankingInfoWrapper}>
          <SvgIcon variant="info" width={18} height={18} fill={theme.textColors.info} />
          <Text size="sm" color={theme.textColors.info}>
            리뷰 랭킹은 자체 알고리즘 기반으로 업데이트됩니다.
          </Text>
        </div>
        <ErrorBoundary fallback={ErrorComponent} handleReset={reset}>
          <Suspense fallback={<Loading />}>
            <ReviewRankingList />
          </Suspense>
        </ErrorBoundary>
      </section>
      <Spacing size={36} />
    </>
  );
};
