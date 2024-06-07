import type { Meta, StoryObj } from '@storybook/react';

import FormTextarea from './FormTextarea';

import RecipeFormProvider from '@/contexts/RecipeFormContext';
import ReviewFormProvider from '@/contexts/ReviewFormContext';

const meta: Meta<typeof FormTextarea> = {
  title: 'common/FormTextarea',
  component: FormTextarea,
  args: {
    content: '',
  },
  decorators: [
    (Story) => (
      <RecipeFormProvider>
        <ReviewFormProvider>
          <Story />
        </ReviewFormProvider>
      </RecipeFormProvider>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof FormTextarea>;

export const Default: Story = {};
