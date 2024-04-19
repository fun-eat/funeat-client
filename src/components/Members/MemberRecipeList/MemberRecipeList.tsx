import { useRef } from 'react';

import { useIntersectionObserver } from '@/hooks/common';
import { useInfiniteMemberRecipeQuery } from '@/hooks/queries/members';
import { DefaultRecipeItem } from '@/components/Recipe';
import { container } from './memberRecipeList.css';

const MemberRecipeList = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const { fetchNextPage, hasNextPage, data } = useInfiniteMemberRecipeQuery();
  const memberRecipes = data?.pages.flatMap((page) => page.recipes);

  useIntersectionObserver<HTMLDivElement>(fetchNextPage, scrollRef, hasNextPage);

  // 추후 디자인 추가에 따라 변경 예정
  // if (totalRecipeCount === 0) {
  //   return (
  //     <ErrorContainer>
  //       <Text size="lg" weight="bold">
  //         앗, 작성한 꿀조합이 없네요 🥲
  //       </Text>
  //       <Spacing size={16} />
  //       <RecipeLink as={RouterLink} to={`${PATH.RECIPE}`} block>
  //         꿀조합 작성하러 가기
  //       </RecipeLink>
  //     </ErrorContainer>
  //   );
  // }

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
