import type { ForwardedRef, MouseEventHandler } from 'react';
import { forwardRef } from 'react';

import { container, menuName, tabMenu } from './tabMenu.css';

interface TabMenuProps {
  tabMenus: readonly string[];
  selectedTabMenu: string;
  handleTabMenuSelect: (selectedMenu: string) => void;
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
      {tabMenus.map((menu) => {
        const isSelected = selectedTabMenu === menu;
        return (
          <li key={menu} className={tabMenu}>
            <button
              className={isSelected ? menuName['active'] : menuName['default']}
              type="button"
              value={menu}
              onClick={handleTabMenuClick}
            >
              {menu}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default forwardRef(TabMenu);
