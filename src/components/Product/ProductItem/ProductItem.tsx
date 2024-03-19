import { Skeleton } from '@fun-eat/design-system';
import { memo, useState } from 'react';

import {
  container,
  preview,
  previewWrapper,
  productImage,
  productName,
  productPrice,
  summaryWrapper,
} from './productItem.css';

import { SvgIcon } from '@/components/Common';
import type { Product } from '@/types/product';

interface ProductItemProps {
  product: Product;
}

const ProductItem = ({ product }: ProductItemProps) => {
  const { name, price, image, averageRating, reviewCount } = product;
  const [isImageLoading, setIsImageLoading] = useState(true);

  return (
    <div className={container}>
      <img
        src={image}
        className={productImage}
        alt={`${name}사진`}
        loading="lazy"
        onLoad={() => setIsImageLoading(false)}
      />
      {/*스켈레톤 디자인시스템에서 수정*/}
      {isImageLoading && (
        <div style={{ position: 'absolute', top: 0, left: 0 }}>
          <Skeleton width={163} height={163} />
        </div>
      )}
      <div style={{ height: '8px' }} />
      <p className={productName}>{name}</p>
      <div style={{ height: '2px' }} />
      <p className={productPrice}>{price.toLocaleString('ko-KR')}원</p>
      <div style={{ height: '8px' }} />
      <div className={summaryWrapper}>
        <div className={previewWrapper}>
          <SvgIcon variant="star2" width={11} height={11} fill="none" stroke="#999" />
          <span className={preview} aria-label={`${averageRating}점`}>
            {averageRating.toFixed(1)}
          </span>
        </div>
        <div className={previewWrapper}>
          <SvgIcon variant="review2" width={11} height={11} fill="none" stroke="#999" />
          <span className={preview} aria-label={`리뷰 ${reviewCount}개`}>
            {reviewCount}
          </span>
        </div>
      </div>
    </div>
  );
};

export default memo(ProductItem);
