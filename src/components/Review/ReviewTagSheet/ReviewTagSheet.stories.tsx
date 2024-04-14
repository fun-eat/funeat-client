import { BottomSheet, useBottomSheet } from '@fun-eat/design-system';
import type { Meta, StoryObj } from '@storybook/react';
import { useEffect } from 'react';

import ReviewTagSheet from './ReviewTagSheet';

import ReviewFormProvider from '@/contexts/ReviewFormContext';

const meta: Meta<typeof ReviewTagSheet> = {
  title: 'common/ReviewTagSheet',
  component: ReviewTagSheet,
  decorators: [
    (Story) => (
      <ReviewFormProvider>
        <Story />
      </ReviewFormProvider>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    const { isOpen, isClosing, handleOpenBottomSheet, handleCloseBottomSheet } = useBottomSheet();

    useEffect(() => {
      handleOpenBottomSheet();
    }, []);

    return (
      <BottomSheet isOpen={isOpen} isClosing={isClosing} close={handleCloseBottomSheet} maxWidth="400px">
        <ReviewTagSheet close={handleCloseBottomSheet} />
      </BottomSheet>
    );
  },
};
