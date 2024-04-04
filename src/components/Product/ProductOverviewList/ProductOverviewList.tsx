import { Link } from 'react-router-dom';

import { container } from './productOverviewList.css';
import ProductOverviewItem from '../ProductOverviewItem/ProductOverviewItem';

import { PATH } from '@/constants/path';
import type { Product } from '@/types/product';

interface ProductOverviewListProps {
  products: Product[];
}

const ProductOverviewList = ({ products }: ProductOverviewListProps) => {
  return (
    <ul className={container}>
      {products.map(({ id, categoryType, image, name, price, averageRating }) => (
        <li key={id}>
          <Link to={`${PATH.PRODUCT_LIST}/${categoryType}/${id}`}>
            <ProductOverviewItem image={image} name={name} price={price} rate={averageRating} />
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default ProductOverviewList;