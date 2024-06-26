import { BottomSheet, useBottomSheet } from '@fun-eat/design-system';
import { useQueryErrorResetBoundary } from '@tanstack/react-query';
import { Suspense, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

import { floatingButtonWrapper, container, sortButtonWrapper } from './recipePage.css';

import {
  ErrorBoundary,
  ErrorComponent,
  Loading,
  ScrollButton,
  SelectOptionList,
  SortButton,
  WriteButton,
} from '@/components/Common';
import { RecipeList } from '@/components/Recipe';
import { PREVIOUS_PATH_LOCAL_STORAGE_KEY, RECIPE_SORT_OPTIONS } from '@/constants';
import { PATH } from '@/constants/path';
import { useGA, useSelect } from '@/hooks/common';
import type { SortOption } from '@/types/common';
import { setLocalStorage } from '@/utils/localStorage';

export const RecipePage = () => {
  const { isOpen, isClosing, handleOpenBottomSheet, handleCloseBottomSheet } = useBottomSheet();
  const { reset } = useQueryErrorResetBoundary();
  const { gaEvent } = useGA();
  const { pathname } = useLocation();

  const recipeRef = useRef<HTMLDivElement>(null);

  const [currentSortOption, setSortOption] = useSelect<SortOption>(RECIPE_SORT_OPTIONS[0]);

  const handleOpenSortOptionSheet = () => {
    handleOpenBottomSheet();
    gaEvent({ category: 'button', action: '꿀조합 정렬 버튼 클릭', label: '꿀조합 정렬' });
  };

  useEffect(() => {
    setLocalStorage(PREVIOUS_PATH_LOCAL_STORAGE_KEY, pathname);
  }, []);

  return (
    <>
      <ErrorBoundary fallback={ErrorComponent} handleReset={reset}>
        <Suspense fallback={<Loading />}>
          <section className={container} ref={recipeRef}>
            <div className={sortButtonWrapper}>
              <SortButton option={currentSortOption} onClick={handleOpenSortOptionSheet} />
            </div>
            <div style={{ height: '8px' }} />
            <RecipeList selectedOption={currentSortOption} />
          </section>
        </Suspense>
      </ErrorBoundary>

      <div className={floatingButtonWrapper}>
        <ScrollButton targetRef={recipeRef} />
        <WriteButton link={`${PATH.RECIPE}/recipe-register`} />
      </div>

      <BottomSheet isOpen={isOpen} isClosing={isClosing} maxWidth="440px" close={handleCloseBottomSheet}>
        <SelectOptionList
          options={RECIPE_SORT_OPTIONS}
          currentOption={currentSortOption}
          selectOption={setSortOption}
          close={handleCloseBottomSheet}
        />
      </BottomSheet>
    </>
  );
};
