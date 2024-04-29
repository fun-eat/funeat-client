import { useRef } from 'react';

import { container, main } from './memberRecipeBookmarkList.css';

import { DefaultRecipeItem } from '@/components/Recipe';
import { useIntersectionObserver } from '@/hooks/common';
import { useInfiniteMemberRecipeBookmarkQuery } from '@/hooks/queries/members';

const MemberRecipeBookmarkList = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const { fetchNextPage, hasNextPage, data } = useInfiniteMemberRecipeBookmarkQuery();
  const memberBookmarkRecipes = data?.pages.flatMap((page) => page.recipes);

  useIntersectionObserver<HTMLDivElement>(fetchNextPage, scrollRef, hasNextPage);

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
