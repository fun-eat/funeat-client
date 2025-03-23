import { useContext } from 'react';

import { ToastValueContext } from './ToastContext';

export const useToastValueContext = () => {
  const toastValue = useContext(ToastValueContext);
  if (!toastValue) {
    throw new Error('useToastValueContext는 Toast Provider 안에서 사용해야 합니다.');
  }

  return toastValue;
};

export default useToastValueContext;
