import { useQueryErrorResetBoundary } from '@tanstack/react-query';
import { Suspense, useRef } from 'react';
import { useLocation } from 'react-router-dom';

import { container } from './memberPostPage.css';

import { ErrorBoundary, ErrorComponent, Loading, TabMenu, TopBar } from '@/components/Common';
import { MemberRecipeList, MemberReviewList } from '@/components/Members';
import { POST_TYPE } from '@/constants';
import { useTabMenu } from '@/hooks/common';
import type { MemberPostVariant, Tab } from '@/types/common';

const TAB_MENUS: Tab<MemberPostVariant>[] = [
  { value: POST_TYPE.RECIPE, label: '꿀조합' },
  { value: POST_TYPE.REVIEW, label: '리뷰' },
];

export const MemberPostPage = () => {
  const { state: prevCategory } = useLocation();
  const { selectedTabMenu, handleTabMenuClick } = useTabMenu(prevCategory ?? POST_TYPE.RECIPE);
  const { reset } = useQueryErrorResetBoundary();
  const memberRecipeRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <TopBar>
        <TopBar.LeftNavigationGroup title="작성한 글" />
      </TopBar>
      <div style={{ paddingTop: 50 }} />

      <TabMenu tabMenus={TAB_MENUS} selectedTabMenu={selectedTabMenu} handleTabMenuSelect={handleTabMenuClick} />

      <section ref={memberRecipeRef} className={container}>
        <ErrorBoundary fallback={ErrorComponent} handleReset={reset}>
          <Suspense fallback={<Loading />}>
            <div style={{ height: '20px' }} />
            {selectedTabMenu === TAB_MENUS[0].value ? <MemberRecipeList /> : <MemberReviewList />}
          </Suspense>
        </ErrorBoundary>
        {/* 스크롤 버튼 문제 해결 후 주석 해제 */}
        {/* <ScrollButton targetRef={memberRecipeRef} /> */}
      </section>
    </>
  );
};
