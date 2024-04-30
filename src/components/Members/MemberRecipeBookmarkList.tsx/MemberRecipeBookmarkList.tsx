import { useRef } from 'react';

import {
  container,
  main,
  moreItem,
  notFound,
  notFoundContainer,
  previewContainer,
} from './memberRecipeBookmarkList.css';

import NotFoundImage from '@/assets/search-notfound.png';
import { ShowAllButton, Text } from '@/components/Common';
import { DefaultRecipeItem, RecipeItemWithProductDetailImage } from '@/components/Recipe';
import { PATH } from '@/constants/path';
import { useIntersectionObserver } from '@/hooks/common';
import { useInfiniteMemberRecipeBookmarkQuery } from '@/hooks/queries/members';
import displaySlice from '@/utils/displaySlice';

interface MemberRecipeBookmarkListProps {
  isPreview?: boolean;
}

const MemberRecipeBookmarkList = ({ isPreview }: MemberRecipeBookmarkListProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const { fetchNextPage, hasNextPage, data } = useInfiniteMemberRecipeBookmarkQuery();
  const memberBookmarkRecipes = data?.pages.flatMap((page) => page.recipes);
  const recipeToDisplay = displaySlice(true, memberBookmarkRecipes, 3);

  const totalRecipeCount = data?.pages[0].page.totalDataCount;

  useIntersectionObserver<HTMLDivElement>(fetchNextPage, scrollRef, hasNextPage);

  if (totalRecipeCount === 0) {
    return (
      <div className={isPreview ? '' : notFoundContainer}>
        <div className={notFound}>
          <img src={NotFoundImage} width={151} alt="꿀조합이 없을 때 사진" />
          <Text size="headline" weight="semiBold" color="sub">
            저장한 꿀조합이 없어요
          </Text>
          <Text size="caption4" weight="medium" color="disabled">
            마음에 드는 꿀조합을 저장해보세요
          </Text>
        </div>
      </div>
    );
  }

  if (isPreview) {
    return (
      <ul className={previewContainer}>
        {recipeToDisplay.map((recipe) => (
          <li key={recipe.id}>
            <RecipeItemWithProductDetailImage recipe={recipe} />
          </li>
        ))}
        {recipeToDisplay.length < memberBookmarkRecipes.length && (
          <li className={moreItem}>
            <ShowAllButton link={`${PATH.MEMBER}/bookmark`} />
          </li>
        )}
      </ul>
    );
  }

  return (
    <main className={main}>
      <ul className={container}>
        {memberBookmarkRecipes.map((recipe) => (
          <li key={recipe.id}>
            <DefaultRecipeItem recipe={recipe} />
          </li>
        ))}
      </ul>
      <div ref={scrollRef} aria-hidden />
    </main>
  );
};

export default MemberRecipeBookmarkList;
