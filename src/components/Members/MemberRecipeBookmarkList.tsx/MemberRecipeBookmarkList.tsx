import { useRef } from 'react';

import { container, main, moreItem, previewContainer } from './memberRecipeBookmarkList.css';

import { ShowAllButton } from '@/components/Common';
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

  useIntersectionObserver<HTMLDivElement>(fetchNextPage, scrollRef, hasNextPage);

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
