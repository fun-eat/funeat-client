import { container, item, optionButton } from './selectOptionList.css';
import SvgIcon from '../Svg/SvgIcon';

import type { Option } from '@/types/common';

interface SelectOptionListProps<T extends Option> {
  options: readonly T[];
  currentOption: T;
  selectOption: (currentOption: T) => void;
  close: () => void;
}

const SelectOptionList = <T extends Option>({
  options,
  currentOption,
  selectOption,
  close,
}: SelectOptionListProps<T>) => {
  const handleSelectedOption = (option: T) => () => {
    selectOption(option);
    close();
  };

  return (
    <ul className={container}>
      {options.map((option) => {
        const isCurrentOption = option.label === currentOption.label;
        return (
          <li key={option.value} className={item}>
            <button
              type="button"
              className={isCurrentOption ? optionButton.active : optionButton.default}
              onClick={handleSelectedOption(option)}
            >
              <span>{option.label}</span>
              {isCurrentOption && (
                <span>
                  <SvgIcon variant="check2" width={22} height={22} fill="#232527" />
                </span>
              )}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default SelectOptionList;
