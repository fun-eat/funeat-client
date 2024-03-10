import { Heading, Spacing, Text, useTheme } from '@fun-eat/design-system';
import { useQueryErrorResetBoundary } from '@tanstack/react-query';
import { Suspense } from 'react';

import { categoryListWrapper, rankingInfoWrapper, sectionWrapper } from './homePage.css';

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
      <section>
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
            <ProductRankingList isHomePage />
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
            <ReviewRankingList isHomePage />
          </Suspense>
        </ErrorBoundary>
      </section>
      <Spacing size={36} />
    </>
  );
};
