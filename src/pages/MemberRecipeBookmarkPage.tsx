import { useQueryErrorResetBoundary } from '@tanstack/react-query';
import { Suspense, useRef } from 'react';

import { ErrorBoundary, ErrorComponent, Loading, Spacing, TopBar } from '@/components/Common';
import { MemberRecipeBookmarkList } from '@/components/Members/';

export const MemberRecipeBookmarkPage = () => {
  const { reset } = useQueryErrorResetBoundary();
  const memberRecipeRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <TopBar>
        <TopBar.LeftNavigationGroup title="저장한 꿀조합" />
      </TopBar>

      <section ref={memberRecipeRef}>
        <ErrorBoundary fallback={ErrorComponent} handleReset={reset}>
          <Suspense fallback={<Loading />}>
            <Spacing size={20} />
            <MemberRecipeBookmarkList />
          </Suspense>
        </ErrorBoundary>
      </section>
    </>
  );
};

export default MemberRecipeBookmarkPage;
