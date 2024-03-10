import {
  productRankingImageWrapper,
  productRankingImage,
  productRankingTitle,
  productRankingPrice,
  productRankingRank,
  productRankingItemContainer,
} from './productRankingItem.css';

interface ProductRankingItemProps {
  name: string;
  image: string | null;
  rank: number;
  price: number;
}

const ProductRankingItem = ({ name, image, rank, price }: ProductRankingItemProps) => {
  return (
    <div className={productRankingItemContainer}>
      <div className={productRankingImageWrapper}>
        {image && <img className={productRankingImage} src={image} alt={name} />}
        <p className={productRankingRank}>{rank}</p>
      </div>
      <div style={{ height: '5px' }} />
      <p className={productRankingTitle}>{name}</p>
      <div style={{ height: '2px' }} />
      <p className={productRankingPrice}>{price.toLocaleString('ko-KR')}원</p>
    </div>
  );
};

export default ProductRankingItem;
