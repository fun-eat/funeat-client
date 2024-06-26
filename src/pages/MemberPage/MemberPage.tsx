import { useQueryErrorResetBoundary } from '@tanstack/react-query';
import { Suspense } from 'react';

import { container } from './memberPage.css';

import { ErrorBoundary, ErrorComponent, Loading, SectionHeader, TopBar } from '@/components/Common';
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
      <div style={{ height: '29px' }} />

      <section className={container}>
        <Suspense fallback={<Loading />}>
          <MembersInfo />
        </Suspense>
        <div style={{ height: '32px' }} />

        <SectionHeader name="저장한 꿀조합" link={`${PATH.MEMBER}/bookmark`} />
        <div style={{ height: '14px' }} />
        <ErrorBoundary fallback={ErrorComponent} handleReset={reset}>
          <Suspense fallback={<Loading />}>
            <MemberRecipeBookmarkList isPreview />
          </Suspense>
        </ErrorBoundary>
      </section>
    </>
  );
};
