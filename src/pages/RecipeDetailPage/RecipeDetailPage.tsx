import { Spacing } from '@fun-eat/design-system';
import { useQueryErrorResetBoundary } from '@tanstack/react-query';
import { Suspense, useRef } from 'react';
import { Link, useParams } from 'react-router-dom';

import {
  authorWrapper,
  recipeImage,
  recipeImageContainer,
  container,
  nickname,
  recipeUsedProductsTitle,
  boxIcon,
  recipeUsedProductsWrapper,
  boxIconWrapper,
  recipeUsedProductsImageList,
  recipeContent,
  created,
  titleWrapper,
  titleText,
  flexRowContainer,
} from './recipeDetailPage.css';

import { ErrorBoundary, ErrorComponent, Loading, SvgIcon } from '@/components/Common';
import { MemberImage } from '@/components/Members';
import { CommentForm, CommentList, RecipeFavoriteButton } from '@/components/Recipe';
import { PATH } from '@/constants/path';
import { useRecipeDetailQuery } from '@/hooks/queries/recipe';
import { getFormattedDate } from '@/utils/date';
import displaySlice from '@/utils/displaySlice';

export const RecipeDetailPage = () => {
  const { recipeId } = useParams();

  const scrollTargetRef = useRef<HTMLDivElement>(null);

  const { data: recipeDetail } = useRecipeDetailQuery(Number(recipeId));
  const { reset } = useQueryErrorResetBoundary();

  const { id, images, title, content, author, products, favoriteCount, favorite, createdAt } = recipeDetail;

  return (
    <>
      <section className={container}>
        <header className={titleWrapper}>
          <div className={flexRowContainer}>
            <Link to=".." relative="path">
              <SvgIcon variant="arrowLeft" stroke="#444444" width={24} height={24} />
            </Link>
            <h1 className={titleText}>{title}</h1>
          </div>
          <Link to={PATH.SEARCH}>
            <SvgIcon variant="search2" stroke="#232527" width={20} height={20} />
          </Link>
        </header>
        <div className={authorWrapper}>
          <MemberImage src={author.profileImage} alt={`${author.nickname}님의 프로필`} width={34} height={34} />
          <div>
            <p className={nickname}>{author.nickname}</p>
            <p className={created}> {getFormattedDate(createdAt)}</p>
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
            <p className={recipeUsedProductsTitle}>어떤 상품을 사용했나요?</p>
          </div>
          <ul className={recipeUsedProductsImageList}>
            {displaySlice(false, products, 3).map(({ id, name }) => (
              <li key={id}>
                <img src={author.profileImage} alt={name} width={48} height={48} />
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
    </>
  );
};
