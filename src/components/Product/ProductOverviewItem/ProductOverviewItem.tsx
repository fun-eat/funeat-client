import { container, priceRate, priceRateWrapper, rateWrapper, wrapper } from './productOverviewItem.css';

import { SvgIcon } from '@/components/Common';
import type { Product } from '@/types/product';

interface ProductOverviewItemProps {
  product: Product;
}

const ProductOverviewItem = ({ product }: ProductOverviewItemProps) => {
  const { name, image, averageRating, price } = product;

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
    </div>
  );
};

export default ProductOverviewItem;
