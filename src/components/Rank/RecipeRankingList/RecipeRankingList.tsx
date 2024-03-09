import { Link } from 'react-router-dom';

import RecipeRankingItem from '../RecipeRankingItem/RecipeRankingItem';

import { PATH } from '@/constants/path';
import { useGA } from '@/hooks/common';
import { useRecipeRankingQuery } from '@/hooks/queries/rank';
import { recipeRankingContainer, recipeRankingItemList } from './recipeRankingList.css';

const RecipeRankingList = () => {
  const { data: recipeResponse } = useRecipeRankingQuery();
  const { gaEvent } = useGA();

  if (recipeResponse.recipes.length === 0) return <p>아직 랭킹이 없어요!</p>;

  const handleRecipeRankingLinkClick = () => {
    gaEvent({ category: 'link', action: '꿀조합 랭킹 링크 클릭', label: '랭킹' });
  };

  return (
    <ul className={recipeRankingContainer}>
      {recipeResponse.recipes.map((recipe) => (
        <li className={recipeRankingItemList}>
          <Link key={recipe.id} to={`${PATH.RECIPE}/${recipe.id}`} onClick={handleRecipeRankingLinkClick}>
            <RecipeRankingItem recipe={recipe} />
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default RecipeRankingList;
