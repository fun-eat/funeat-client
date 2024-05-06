import {
  closeWrapper,
  container,
  priceRate,
  priceRateWrapper,
  rateWrapper,
  wrapper,
} from './usedProductOverviewItem.css';

import { SvgIcon } from '@/components/Common';
import { useRecipeFormActionContext } from '@/hooks/context';
import { vars } from '@/styles/theme.css';
import type { Product } from '@/types/product';
import type { RecipeProduct } from '@/types/recipe';

interface ProductOverviewItemProps {
  product: Product;
}

const UsedProductOverviewItem = ({ product }: ProductOverviewItemProps) => {
  const { handleRecipeFormValue } = useRecipeFormActionContext();

  const { name, image, averageRating, price } = product;

  const removeUsedProducts = (currentProduct: RecipeProduct) => {
    handleRecipeFormValue({ target: 'products', value: currentProduct, action: 'remove' });
  };

  return (
    <div className={container}>
      <div className={wrapper}>
        <img src={image} width={60} height={60} alt={name} />
        <div>
          <p>{name}</p>
          <div style={{ height: '6px' }} />
          <div className={priceRateWrapper}>
            <span className={priceRate}>{price}원</span>
            <div className={rateWrapper}>
              <SvgIcon variant="star2" fill="#FFB017" width={11} height={11} />
              <span className={priceRate}>{averageRating}</span>
            </div>
          </div>
        </div>
      </div>
      <button className={closeWrapper} onClick={() => removeUsedProducts(product)}>
        <SvgIcon variant="close" width={14} height={14} stroke={vars.colors.gray3} />
      </button>
    </div>
  );
};

export default UsedProductOverviewItem;
