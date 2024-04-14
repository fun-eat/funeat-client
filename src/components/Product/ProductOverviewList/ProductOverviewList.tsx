import { Link } from 'react-router-dom';

import { container } from './productOverviewList.css';
import ProductOverviewItem from '../ProductOverviewItem/ProductOverviewItem';

import { PATH } from '@/constants/path';
import type { Product } from '@/types/product';

interface ProductOverviewListProps {
  products: Product[];
  hasBorder?: boolean;
}

const ProductOverviewList = ({ products, hasBorder = false }: ProductOverviewListProps) => {
  return (
    <ul className={container}>
      {products.map(({ id, image, name, price, averageRating }) => (
        <li key={id}>
          <Link to={`${PATH.PRODUCT_LIST}/detail/${id}`}>
            <ProductOverviewItem image={image} name={name} price={price} rate={averageRating} />
          </Link>
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
