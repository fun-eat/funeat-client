import { useState } from 'react';

import type { Option } from '@/types/common';

type SelectOption<T extends Option> = (currentOption: T) => void;
type UseSelect<T extends Option> = [T, SelectOption<T>];

const useSelect = <T extends Option>(initOption: T): UseSelect<T> => {
  const [option, setOption] = useState(initOption);

  const selectOption = (currentOption: T) => {
    setOption(currentOption);
  };

  return [option, selectOption];
};

export default useSelect;
