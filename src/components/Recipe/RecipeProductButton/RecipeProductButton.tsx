import cx from 'classnames';

import { SvgIcon } from '@/components/Common';
import { container, translucent } from './recipeProductButton.css';

interface RecipeProductButtonProps {
  isTranslucent?: boolean;
}

const RecipeProductButton = ({ isTranslucent }: RecipeProductButtonProps) => {
  return (
    <button type="button" className={cx(container, { [translucent]: isTranslucent })}>
      <SvgIcon variant="disk" stroke="white" fill="none" width={12} height={12} />
    </button>
  );
};

export default RecipeProductButton;
