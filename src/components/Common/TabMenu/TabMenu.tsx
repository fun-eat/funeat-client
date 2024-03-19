import type { ForwardedRef, MouseEventHandler } from 'react';
import { forwardRef } from 'react';

import { container, menuName, tabMenu } from './tabMenu.css';

import type { Tab } from '@/types/common';

interface TabMenuProps {
  tabMenus: Tab[];
  selectedTabMenu: string;
  handleTabMenuSelect: (selectedMenu: any) => void;
}

const TabMenu = (
  { tabMenus, selectedTabMenu, handleTabMenuSelect }: TabMenuProps,
  ref: ForwardedRef<HTMLUListElement>
) => {
  const handleTabMenuClick: MouseEventHandler<HTMLButtonElement> = (event) => {
    handleTabMenuSelect(event.currentTarget.value);
  };

  return (
    <ul className={container} ref={ref}>
      {tabMenus.map(({ value, label }) => {
        const isSelected = selectedTabMenu === value;
        return (
          <li key={value} className={tabMenu}>
            <button
              className={isSelected ? menuName['active'] : menuName['default']}
              type="button"
              value={value}
              onClick={handleTabMenuClick}
            >
              {label}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default forwardRef(TabMenu);
