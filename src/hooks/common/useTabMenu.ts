import { useState } from 'react';

const useTabMenu = <T = string>(init: T) => {
  const [selectedTabMenu, setSelectedTabMenu] = useState<T>(init);

  const isFirstTabMenu = selectedTabMenu === init;

  const handleTabMenuClick = (selectedMenu: T) => {
    setSelectedTabMenu(selectedMenu);
  };

  const initTabMenu = () => {
    setSelectedTabMenu(init);
  };

  return {
    selectedTabMenu,
    isFirstTabMenu,
    handleTabMenuClick,
    initTabMenu,
  };
};

export default useTabMenu;
