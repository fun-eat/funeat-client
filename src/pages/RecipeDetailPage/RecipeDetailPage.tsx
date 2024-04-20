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
  main,
  contentSection,
  commentSection,
} from './recipeDetailPage.css';

import { ErrorBoundary, ErrorComponent, Loading, SvgIcon, Text, TopBar } from '@/components/Common';
import { MemberImage } from '@/components/Members';
import { ProductOverviewList } from '@/components/Product';
import { CommentForm, CommentList, RecipeFavoriteButton } from '@/components/Recipe';
import { useRecipeDetailQuery } from '@/hooks/queries/recipe';
import { vars } from '@/styles/theme.css';
import { getFormattedDate } from '@/utils/date';
import displaySlice from '@/utils/displaySlice';

export const RecipeDetailPage = () => {
  const { recipeId } = useParams();

  const scrollTargetRef = useRef<HTMLDivElement>(null);

  const { data: recipeDetail } = useRecipeDetailQuery(Number(recipeId));
  const { reset } = useQueryErrorResetBoundary();

  const { isOpen, isClosing, handleOpenBottomSheet, handleCloseBottomSheet } = useBottomSheet();

  const { id, images, title, content, author, products, favorite, favoriteCount, createdAt } = recipeDetail;

  return (
    <>
      <TopBar>
        <TopBar.LeftNavigationGroup title={title} />
        <TopBar.SearchLink />
      </TopBar>

      <main className={main}>
        <section className={container}>
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
                <img
                  className={recipeImage}
                  src={image}
                  alt={`${title} 꿀조합 사진 ${index}`}
                  width={335}
                  height={290}
                />
              </li>
            ))}
          </ul>
          <div className={recipeUsedProductsWrapper}>
            <div className={boxIconWrapper}>
              <div className={boxIcon}>
                <SvgIcon variant="disk" stroke="#ffffff" fill="none" width={12} height={12} />
              </div>
              <Text size="caption3" weight="medium" color="info">
                이런 상품들을 사용했어요!
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

        <hr style={{ height: '1px', background: vars.colors.border.default, border: 0 }} />

        <section className={contentSection}>
          <RecipeFavoriteButton recipeId={id} favorite={favorite} favoriteCount={favoriteCount} />
          <Spacing size={12} />
          <Text size="body" className={recipeContent}>
            {content}
          </Text>
        </section>

        <hr style={{ height: '12px', background: vars.colors.border.light, border: 0 }} />

        <section className={commentSection}>
          <CommentForm recipeId={Number(recipeId)} scrollTargetRef={scrollTargetRef} />
          <ErrorBoundary fallback={ErrorComponent} handleReset={reset}>
            <Suspense fallback={<Loading />}>
              <div ref={scrollTargetRef}>
                <CommentList recipeId={Number(recipeId)} />
              </div>
            </Suspense>
          </ErrorBoundary>
        </section>
      </main>

      <BottomSheet isOpen={isOpen} isClosing={isClosing} close={handleCloseBottomSheet}>
        <div className={bottomSheetWrapper}>
          <ProductOverviewList products={products} hasBorder />
        </div>
      </BottomSheet>
    </>
  );
};
