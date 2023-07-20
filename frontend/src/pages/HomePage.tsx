import { Heading, Link, Spacing } from '@fun-eat/design-system';
import { Link as RouterLink } from 'react-router-dom';
import styled from 'styled-components';

import { CategoryMenu, SvgIcon } from '@/components/Common';
import { PBProductList, ProductList, ProductRankingList } from '@/components/Product';
import { ReviewRankingList } from '@/components/Review';
import { PATH } from '@/constants/path';
import foodCategory from '@/mocks/data/foodCategory.json';
import storeCategory from '@/mocks/data/storeCategory.json';

const HomePage = () => {
  return (
    <>
      <section>
        <Heading as="h2" size="xl">
          공통 상품
        </Heading>
        <Spacing size={16} />
        <CategoryMenu menuList={foodCategory} menuVariant="food" />
        <Spacing size={12} />
        <ProductList />
        <ProductListRouteButton as={RouterLink} to={PATH.PRODUCT_LIST}>
          전체 보기 <SvgIcon variant="arrow" width={12} height={12} />
        </ProductListRouteButton>
      </section>
      <Spacing size={36} />
      <section>
        <Heading as="h2" size="xl">
          편의점 특산품
        </Heading>
        <Spacing size={16} />
        <CategoryMenu menuList={storeCategory} menuVariant="store" />
        <Spacing size={16} />
        <PBProductList />
      </section>
      <Spacing size={36} />
      <section>
        <Heading as="h2" size="xl">
          👑 랭킹
        </Heading>
        <Spacing size={12} />
        <ProductRankingList />
      </section>
      <Spacing size={36} />
      <section>
        <Heading as="h2" size="xl">
          리뷰 랭킹
        </Heading>
        <Spacing size={12} />
        <ReviewRankingList />
      </section>
    </>
  );
};

export default HomePage;

const ProductListRouteButton = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 12px 0;
  text-align: center;
  border-bottom: 1px solid ${({ theme }) => theme.borderColors.disabled};

  svg {
    margin-left: 4px;
    transform: rotate(180deg);
  }
`;