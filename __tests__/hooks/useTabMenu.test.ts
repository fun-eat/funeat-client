import { useTabMenu } from '@/hooks/common';
import { renderHook, act } from '@testing-library/react';

const INIT_TAB = '첫번째 탭';
const SELECTED_TAB = '두번째 탭';

it('선택된 탭 초기 상태는 0번 인덱스이다.', () => {
  const { result } = renderHook(() => useTabMenu(INIT_TAB));

  expect(result.current.selectedTabMenu).toBe(INIT_TAB);
  expect(result.current.isFirstTabMenu).toBe(true);
});

it('handleTabMenuClick를 사용하여 선택한 탭 인덱스를 저장할 수 있다. ', () => {
  const { result } = renderHook(() => useTabMenu(INIT_TAB));

  act(() => {
    result.current.handleTabMenuClick(SELECTED_TAB);
  });

  expect(result.current.selectedTabMenu).toBe(1);
});

it('initTabMenu를 사용하여 선택된 탭을 맨 처음 탭으로 초기화할 수 있다.', () => {
  const { result } = renderHook(() => useTabMenu(INIT_TAB));

  act(() => {
    result.current.handleTabMenuClick(SELECTED_TAB);
    result.current.initTabMenu();
  });

  expect(result.current.selectedTabMenu).toBe(INIT_TAB);
});
