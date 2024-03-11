import {
  container,
  imageWrapper,
  productImage,
  productRank,
  productTitle,
  productPrice,
} from './productRankingItem.css';

interface ProductRankingItemProps {
  name: string;
  image: string | null;
  rank: number;
  price: number;
}

const ProductRankingItem = ({ name, image, rank, price }: ProductRankingItemProps) => {
  return (
    <div className={container}>
      <div className={imageWrapper}>
        {image && <img className={productImage} src={image} alt={name} />}
        <p className={productRank}>{rank}</p>
      </div>
      <div style={{ height: '5px' }} />
      <p className={productTitle}>{name}</p>
      <div style={{ height: '2px' }} />
      <p className={productPrice}>{price.toLocaleString('ko-KR')}원</p>
    </div>
  );
};

export default ProductRankingItem;
