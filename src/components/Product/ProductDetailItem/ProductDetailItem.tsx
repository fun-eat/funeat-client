import {
  categoryName,
  preview,
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

import { SvgIcon } from '@/components/Common';
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
            <p className={categoryName}>{category.name}</p>
            <h2 className={productName}>{name}</h2>
            <p className={productPrice}>{price.toLocaleString('ko-KR')}원</p>
          </div>

          <div className={summaryWrapper}>
            <div className={previewWrapper}>
              <SvgIcon variant="star2" width={14} height={14} fill="#ffc14a" />
              <span className={preview} aria-label={`${averageRating}점`}>
                {averageRating.toFixed(1)}
              </span>
            </div>
            <div className={previewWrapper}>
              <SvgIcon variant="review2" width={14} height={14} fill="#ddd" />
              <span className={preview} aria-label={`리뷰 ${reviewCount}개`}>
                {reviewCount}
              </span>
            </div>
          </div>
        </div>

        <p className={productContent}>{content}</p>

        <ul className={tagList}>
          {tags.map(({ id, name }) => (
            <li key={id} className={tag}>
              <span>{name}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ProductDetailItem;
