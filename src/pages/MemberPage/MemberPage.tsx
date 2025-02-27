import { useQueryErrorResetBoundary } from '@tanstack/react-query';
import { Suspense } from 'react';

import { container } from './memberPage.css';

import { ErrorBoundary, ErrorComponent, Loading, SectionHeader, Spacing, TopBar } from '@/components/Common';
import { MemberRecipeBookmarkList, MembersInfo } from '@/components/Members';
import { PATH } from '@/constants/path';

export const MemberPage = () => {
  const { reset } = useQueryErrorResetBoundary();

  return (
    <>
      <TopBar>
        <TopBar.BackLink />
        <TopBar.Title title="마이페이지" />
        <TopBar.Spacer />
      </TopBar>
      <Spacing size={30} />

      <section className={container}>
        <Suspense fallback={<Loading />}>
          <MembersInfo />
        </Suspense>
        <Spacing size={32} />

        <SectionHeader name="저장한 꿀조합" link={`${PATH.MEMBER}/bookmark`} />
        <Spacing size={14} />
        <ErrorBoundary fallback={ErrorComponent} handleReset={reset}>
          <Suspense fallback={<Loading />}>
            <MemberRecipeBookmarkList isPreview />
          </Suspense>
        </ErrorBoundary>
      </section>
    </>
  );
};
