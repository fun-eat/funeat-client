import { BottomSheet, useBottomSheet } from '@fun-eat/design-system';
import type { Meta, StoryObj } from '@storybook/react';
import { useEffect } from 'react';

import SelectOptionList from './SelectOptionList';

import { PRODUCT_SORT_OPTIONS } from '@/constants';
import { useSelect } from '@/hooks/common';
import type { SortOption } from '@/types/common';

const meta: Meta<typeof SelectOptionList> = {
  title: 'common/SelectOptionList',
  component: SelectOptionList,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    const { isOpen, isClosing, handleOpenBottomSheet, handleCloseBottomSheet } = useBottomSheet();
    const [currentSortOption, setSortOption] = useSelect<SortOption>(PRODUCT_SORT_OPTIONS[0]);

    useEffect(() => {
      handleOpenBottomSheet();
    }, []);

    return (
      <BottomSheet isOpen={isOpen} isClosing={isClosing} close={handleCloseBottomSheet}>
        <SelectOptionList
          options={PRODUCT_SORT_OPTIONS}
          currentOption={currentSortOption}
          selectOption={setSortOption}
          close={handleCloseBottomSheet}
        />
      </BottomSheet>
    );
  },
};
