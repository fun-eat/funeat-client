import { Skeleton } from '@fun-eat/design-system';
import { memo, useState } from 'react';

import { container, imageWrapper, previewWrapper, productImage, summaryWrapper } from './productItem.css';

import { SvgIcon, Text } from '@/components/Common';
import { ellipsis } from '@/styles/common.css';
import { vars } from '@/styles/theme.css';
import type { Product } from '@/types/product';

interface ProductItemProps {
  product: Product;
}

const ProductItem = ({ product }: ProductItemProps) => {
  const { name, price, image, averageRating, reviewCount } = product;
  const [isImageLoading, setIsImageLoading] = useState(true);

  return (
    <div className={container}>
      <div className={imageWrapper}>
        <img
          src={image}
          className={productImage}
          alt={`${name}사진`}
          loading="lazy"
          onLoad={() => setIsImageLoading(false)}
        />
        {/*스켈레톤 디자인시스템에서 수정*/}
        {isImageLoading && (
          <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
            <Skeleton width="100%" height="100%" />
          </div>
        )}
      </div>
      <div style={{ height: '8px' }} />
      <Text className={ellipsis} size="caption3" weight="semiBold" color="sub">
        {name}
      </Text>
      <div style={{ height: '2px' }} />
      {/* 추후 bold로 변경 */}
      <Text size="caption2" weight="semiBold" color="sub">
        {price.toLocaleString('ko-KR')}원
      </Text>
      <div style={{ height: '8px' }} />
      <div className={summaryWrapper}>
        <div className={previewWrapper}>
          <SvgIcon variant="star2" width={11} height={11} fill={vars.colors.gray2} />
          <Text as="span" size="caption3" color="disabled" aria-label={`${averageRating}점`}>
            {averageRating.toFixed(1)}
          </Text>
        </div>
        <div className={previewWrapper}>
          <SvgIcon variant="review2" width={11} height={11} />
          <Text as="span" size="caption3" color="disabled" aria-label={`리뷰 ${reviewCount}개`}>
            {reviewCount}
          </Text>
        </div>
      </div>
    </div>
  );
};

export default memo(ProductItem);
