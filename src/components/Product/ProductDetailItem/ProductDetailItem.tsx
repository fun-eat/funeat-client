import {
  previewWrapper,
  productContent,
  productDetails,
  productImage,
  productInfo,
  productName,
  productOverview,
  summaryWrapper,
} from './productDetailItem.css';

import { SvgIcon, TagList, Text } from '@/components/Common';
import type { ProductDetail } from '@/types/product';

interface ProductDetailItemProps {
  productDetail: ProductDetail;
}

const ProductDetailItem = ({ productDetail }: ProductDetailItemProps) => {
  const { name, price, image, content, averageRating, tags, reviewCount, category } = productDetail;

  return (
    <section>
      <img src={image} className={productImage} height={328} alt={name} />

      <div className={productOverview}>
        <div className={productInfo}>
          <div className={productDetails}>
            <Text size="caption1" weight="medium">
              {category.name}
            </Text>
            <h2 className={productName}>{name}</h2>
            <Text weight="semiBold" size="display1">
              {price.toLocaleString('ko-KR')}원
            </Text>
          </div>

          <div className={summaryWrapper}>
            <div className={previewWrapper}>
              <SvgIcon variant="star2" width={14} height={14} fill="#ffc14a" />
              <Text as="span" size="caption1" weight="medium" aria-label={`${averageRating}점`}>
                {averageRating.toFixed(1)}
              </Text>
            </div>
            <div className={previewWrapper}>
              <SvgIcon variant="review2" width={14} height={14} fill="#ddd" />
              <Text as="span" size="caption1" weight="medium" aria-label={`리뷰 ${reviewCount}개`}>
                {reviewCount}
              </Text>
            </div>
          </div>
        </div>

        <Text color="info" size="caption2" className={productContent}>
          {content}
        </Text>

        <TagList tags={tags} />
      </div>
    </section>
  );
};

export default ProductDetailItem;
