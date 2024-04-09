import {
  previewWrapper,
  productContent,
  productDetails,
  productImage,
  productInfo,
  productName,
  productOverview,
  productPrice,
  summaryWrapper,
  tag,
  tagList,
} from './productDetailItem.css';

import { SvgIcon, Text } from '@/components/Common';
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
            <Text weight="semiBold" className={productPrice}>
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

        <ul className={tagList}>
          {tags.map(({ id, name }) => (
            <li key={id} className={tag}>
              <Text as="span" color="info" size="caption2" weight="medium">
                {name}
              </Text>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ProductDetailItem;
