import { container, priceRate, priceRateWrapper, productName, rateWrapper } from './productOverviewItem.css';

import { SvgIcon } from '@/components/Common';

interface ProductOverviewItemProps {
  name: string;
  image: string;
  price: number;
  rate: number;
}

const ProductOverviewItem = ({ image, name, price, rate }: ProductOverviewItemProps) => {
  return (
    <>
      <div className={container}>
        <img src={image} width={60} height={60} alt={name} />
        <div>
          <p className={productName}>{name}</p>
          <div style={{ height: '6px' }} />
          <div className={priceRateWrapper}>
            <span className={priceRate}>{price}원</span>
            <div className={rateWrapper}>
              <SvgIcon variant="star2" fill="#FFB017" width={11} height={11} />
              <span className={priceRate}>{rate}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductOverviewItem;
