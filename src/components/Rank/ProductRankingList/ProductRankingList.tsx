import { Link } from 'react-router-dom';

import { container } from './productRankingList.css';
import ProductRankingItem from '../ProductRankingItem/ProductRankingItem';

import { PATH } from '@/constants/path';
import { useGA } from '@/hooks/common';
import { useProductRankingQuery } from '@/hooks/queries/rank';

const ProductRankingList = () => {
  const { data: productRankings } = useProductRankingQuery();
  const { gaEvent } = useGA();

  const handleProductRankingLinkClick = () => {
    gaEvent({ category: 'link', action: '상품 랭킹 링크 클릭', label: '랭킹' });
  };

  return (
    <ul className={container}>
      {productRankings.products.map(({ id, name, image, price }, index) => (
        <li key={id}>
          <Link to={`${PATH.PRODUCT_LIST}/detail/${id}`} onClick={handleProductRankingLinkClick}>
            <ProductRankingItem rank={index + 1} name={name} image={image} price={price} />
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default ProductRankingList;
