import { useState } from 'react';

const useTabMenu = (init: string) => {
  const [selectedTabMenu, setSelectedTabMenu] = useState(init);

  const isFirstTabMenu = selectedTabMenu === init;

  const handleTabMenuClick = (selectedMenu: string) => {
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
