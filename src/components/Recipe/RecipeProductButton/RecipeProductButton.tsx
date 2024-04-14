import { BottomSheet, useBottomSheet } from '@fun-eat/design-system';
import cx from 'classnames';

import { container, recipeProductWrapper, translucent } from './recipeProductButton.css';

import { SvgIcon } from '@/components/Common';
import { ProductOverviewList } from '@/components/Product';
import type { RecipeProduct } from '@/types/recipe';

interface RecipeProductButtonProps {
  isTranslucent?: boolean;
  products: RecipeProduct[];
}

const RecipeProductButton = ({ isTranslucent, products }: RecipeProductButtonProps) => {
  const { isOpen, isClosing, handleOpenBottomSheet, handleCloseBottomSheet } = useBottomSheet();

  return (
    <>
      <button type="button" className={cx(container, { [translucent]: isTranslucent })} onClick={handleOpenBottomSheet}>
        <SvgIcon variant="disk" stroke="white" fill="none" width={12} height={12} />
      </button>

      <BottomSheet isOpen={isOpen} isClosing={isClosing} maxWidth="400px" close={handleCloseBottomSheet}>
        <div className={recipeProductWrapper}>
          <ProductOverviewList products={products} />
        </div>
      </BottomSheet>
    </>
  );
};

export default RecipeProductButton;
