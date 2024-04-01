import { BottomSheet, Spacing, useBottomSheet } from '@fun-eat/design-system';
import { useQueryErrorResetBoundary } from '@tanstack/react-query';
import { Suspense, useRef } from 'react';
import { useParams } from 'react-router-dom';

import {
  authorWrapper,
  recipeImage,
  recipeImageContainer,
  container,
  boxIcon,
  recipeUsedProductsWrapper,
  boxIconWrapper,
  recipeUsedProductsImageList,
  recipeContent,
  productImageItem,
  recipeProductsCount,
  thirdProductImage,
  bottomSheetWrapper,
} from './recipeDetailPage.css';

import { ErrorBoundary, ErrorComponent, Loading, SectionTitle, SvgIcon, Text } from '@/components/Common';
import { MemberImage } from '@/components/Members';
import { ProductOverviewItem } from '@/components/Product';
import { CommentForm, CommentList, RecipeFavoriteButton } from '@/components/Recipe';
import { useRecipeDetailQuery } from '@/hooks/queries/recipe';
import { getFormattedDate } from '@/utils/date';
import displaySlice from '@/utils/displaySlice';

export const RecipeDetailPage = () => {
  const { recipeId } = useParams();

  const scrollTargetRef = useRef<HTMLDivElement>(null);

  const { data: recipeDetail } = useRecipeDetailQuery(Number(recipeId));
  const { reset } = useQueryErrorResetBoundary();

  const { isOpen, isClosing, handleOpenBottomSheet, handleCloseBottomSheet } = useBottomSheet();

  const { id, images, title, content, author, products, favoriteCount, favorite, createdAt } = recipeDetail;

  return (
    <>
      <section className={container}>
        <SectionTitle name={title} hasSearchLink />
        <Spacing size={22} />
        <div className={authorWrapper}>
          <MemberImage src={author.profileImage} alt={`${author.nickname}님의 프로필`} width={34} height={34} />
          <div>
            <Text size="caption2" weight="semiBold">
              {author.nickname}
            </Text>
            <Text size="caption4" weight="semiBold" color="info">
              {getFormattedDate(createdAt)}
            </Text>
          </div>
        </div>
        <ul className={recipeImageContainer}>
          {images.map((image, index) => (
            <li key={image}>
              <img className={recipeImage} src={image} alt={`${title} 꿀조합 사진 ${index}`} width={335} height={290} />
            </li>
          ))}
        </ul>
        <div className={recipeUsedProductsWrapper}>
          <div className={boxIconWrapper}>
            <div className={boxIcon}>
              <SvgIcon variant="box" stroke="#ffffff" width={12} height={12} />
            </div>
            <Text size="caption3" weight="medium" color="info">
              어떤 상품을 사용했나요?
            </Text>
          </div>
          <ul className={recipeUsedProductsImageList} onClick={handleOpenBottomSheet}>
            {displaySlice(true, products, 3).map(({ id, name, image }, idx) => (
              <li key={id} className={productImageItem}>
                <img
                  src={image}
                  className={products.length > 3 && idx === 2 ? thirdProductImage : ''}
                  width={48}
                  height={48}
                  alt={name}
                />
                {idx === 2 && (
                  <Text size="caption3" weight="medium" className={recipeProductsCount}>
                    +{products.length - 3}
                  </Text>
                )}
              </li>
            ))}
          </ul>
        </div>
      </section>
      <div style={{ height: '10px' }} />
      <hr style={{ height: '1px', background: '#e6e6e6', border: 0 }} />
      <div style={{ height: '14px' }} />
      <section className={container}>
        <RecipeFavoriteButton recipeId={id} favorite={favorite} favoriteCount={favoriteCount} />
        <Spacing size={24} />
        <p className={recipeContent}>{content}</p>
        <Spacing size={24} />
        <CommentForm recipeId={Number(recipeId)} scrollTargetRef={scrollTargetRef} />
        <ErrorBoundary fallback={ErrorComponent} handleReset={reset}>
          <Suspense fallback={<Loading />}>
            <div ref={scrollTargetRef}>
              <CommentList recipeId={Number(recipeId)} />
            </div>
          </Suspense>
        </ErrorBoundary>
      </section>
      <BottomSheet isOpen={isOpen} isClosing={isClosing} close={handleCloseBottomSheet}>
        <div className={bottomSheetWrapper}>
          {products.map(({ name, image, price, rate }) => (
            <>
              <ProductOverviewItem name={name} image={image} price={price} rate={rate} />
              <hr style={{ height: '1px', background: '#e6e6e6', border: 0 }} />
            </>
          ))}
        </div>
      </BottomSheet>
    </>
  );
};
