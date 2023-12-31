import type { Meta, StoryObj } from '@storybook/react';

import ReviewRegisterForm from './ReviewRegisterForm';

import ReviewFormProvider from '@/contexts/ReviewFormContext';
import productDetail from '@/mocks/data/productDetail.json';

const meta: Meta<typeof ReviewRegisterForm> = {
  title: 'review/ReviewRegisterForm',
  component: ReviewRegisterForm,
  args: {
    productId: productDetail.id,
  },
  decorators: [
    (Story) => (
      <ReviewFormProvider>
        <Story />
      </ReviewFormProvider>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof ReviewRegisterForm>;

export const Default: Story = {};
