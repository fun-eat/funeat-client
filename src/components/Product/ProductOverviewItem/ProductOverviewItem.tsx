import { container, priceRate, priceRateWrapper, rateWrapper, wrapper } from './productOverviewItem.css';

import { SvgIcon } from '@/components/Common';
import {
  PRODUCT_OVERVIEW_DEFAULT_IMAGE_URL_1,
  PRODUCT_OVERVIEW_DEFAULT_IMAGE_URL_2,
  PRODUCT_OVERVIEW_DEFAULT_IMAGE_URL_3,
  PRODUCT_OVERVIEW_DEFAULT_IMAGE_URL_4,
  PRODUCT_OVERVIEW_DEFAULT_IMAGE_URL_5,
} from '@/constants/image';
import type { Product } from '@/types/product';

const defaultImages = [
  PRODUCT_OVERVIEW_DEFAULT_IMAGE_URL_1,
  PRODUCT_OVERVIEW_DEFAULT_IMAGE_URL_2,
  PRODUCT_OVERVIEW_DEFAULT_IMAGE_URL_3,
  PRODUCT_OVERVIEW_DEFAULT_IMAGE_URL_4,
  PRODUCT_OVERVIEW_DEFAULT_IMAGE_URL_5,
];

interface ProductOverviewItemProps {
  product: Product;
}

const ProductOverviewItem = ({ product }: ProductOverviewItemProps) => {
  const { name, image, averageRating, price } = product;

  const randomIndex = Math.floor(Math.random() * defaultImages.length);
  const defaultImage = defaultImages[randomIndex];

  return (
    <div className={container}>
      <div className={wrapper}>
        <img src={image ?? defaultImage} width={60} height={60} alt={name} />
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
