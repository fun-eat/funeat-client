import { useRef } from 'react';

import { container, notFound, notFoundContainer } from './memberRecipeList.css';

import RecipeNotFoundImage from '@/assets/recipe-notfound.png';
import { Text } from '@/components/Common';
import { DefaultRecipeItem } from '@/components/Recipe';
import { useIntersectionObserver } from '@/hooks/common';
import { useInfiniteMemberRecipeQuery } from '@/hooks/queries/members';

const MemberRecipeList = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const { fetchNextPage, hasNextPage, data } = useInfiniteMemberRecipeQuery();
  const memberRecipes = data?.pages.flatMap((page) => page.recipes);

  const totalRecipeCount = data?.pages[0].page.totalDataCount;

  useIntersectionObserver<HTMLDivElement>(fetchNextPage, scrollRef, hasNextPage);

  if (totalRecipeCount === 0) {
    return (
      <div className={notFoundContainer}>
        <div className={notFound}>
          <img src={RecipeNotFoundImage} width={100} alt="꿀조합이 없을 때 사진" />
          <Text size="headline" weight="semiBold" color="sub">
            작성한 꿀조합이 없어요
          </Text>
          <Text size="caption4" weight="medium" color="disabled">
            나만의 꿀조합을 작성해보세요
          </Text>
        </div>
      </div>
    );
  }

  return (
    <>
      <ul className={container}>
        {memberRecipes.map((recipe) => (
          <li key={recipe.id}>
            <DefaultRecipeItem recipe={recipe} />
          </li>
        ))}
      </ul>
      <div ref={scrollRef} aria-hidden />
    </>
  );
};

export default MemberRecipeList;
