import { Link } from 'react-router-dom';

import { container } from './productPreviewList.css';
import ProductItem from '../ProductItem/ProductItem';

import { PATH } from '@/constants/path';
import { useInfiniteProductsQuery } from '@/hooks/queries/product';
import type { CategoryVariant } from '@/types/common';
import useDisplaySlice from '@/utils/displaySlice';

interface ProductPreviewListProps {
  category: CategoryVariant;
  categoryId: number;
}

const ProductPreviewList = ({ category, categoryId }: ProductPreviewListProps) => {
  // 정렬기준은 어떤걸로 할지
  const { data } = useInfiniteProductsQuery(categoryId, 'reviewCount,desc');
  const products = data.pages.flatMap((page) => page.products);
  // 몇개까지 보여줄지
  const productToDisplay = useDisplaySlice(true, products, 5);

  return (
    <ul className={container}>
      {productToDisplay.map((product) => (
        <li key={product.id}>
          <Link to={`${PATH.PRODUCT_LIST}/${category}/${product.id}`}>
            <ProductItem product={product} />
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default ProductPreviewList;
