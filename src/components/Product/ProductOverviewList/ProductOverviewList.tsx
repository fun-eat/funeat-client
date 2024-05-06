import { Link } from 'react-router-dom';

import { container } from './productOverviewList.css';
import ProductOverviewItem from '../ProductOverviewItem/ProductOverviewItem';

import { PATH } from '@/constants/path';
import type { Product } from '@/types/product';

interface ProductOverviewListProps {
  products: Product[];
  hasBorder?: boolean;
  hasRemoved?: boolean;
}

const ProductOverviewList = ({ products, hasBorder = false, hasRemoved = false }: ProductOverviewListProps) => {
  return (
    <ul className={container}>
      {products.map((product) => (
        <li key={product.id}>
          {hasRemoved ? (
            <ProductOverviewItem product={product} hasRemoved={hasRemoved} />
          ) : (
            <Link to={`${PATH.PRODUCT_LIST}/detail/${product.id}`}>
              <ProductOverviewItem product={product} hasRemoved={hasRemoved} />
            </Link>
          )}
          {hasBorder && (
            <>
              <div style={{ height: '20px' }} />
              <hr style={{ border: '0.5px solid #e6e6e6' }} />
            </>
          )}
        </li>
      ))}
    </ul>
  );
};

export default ProductOverviewList;
