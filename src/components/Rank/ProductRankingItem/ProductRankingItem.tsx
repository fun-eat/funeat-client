import {
  container,
  imageWrapper,
  productImage,
  productRank,
  productTitle,
  productPrice,
} from './productRankingItem.css';

import { Spacing } from '@/components/Common';

interface ProductRankingItemProps {
  name: string;
  image: string;
  rank: number;
  price: number;
}

const ProductRankingItem = ({ name, image, rank, price }: ProductRankingItemProps) => {
  return (
    <div className={container}>
      <div className={imageWrapper}>
        <img className={productImage} src={image} alt={name} />
        <p className={productRank}>{rank}</p>
      </div>
      <Spacing size={5} />
      <p className={productTitle}>{name}</p>
      <Spacing size={2} />
      <p className={productPrice}>{price.toLocaleString('ko-KR')}원</p>
    </div>
  );
};

export default ProductRankingItem;
