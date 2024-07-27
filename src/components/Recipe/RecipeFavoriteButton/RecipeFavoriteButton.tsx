import { container, countWrapper } from './recipeFavoriteButton.css';

import HeartEmpty from '@/assets/heart-empty.png';
import { SvgIcon, Text } from '@/components/Common';
import { useTimeout } from '@/hooks/common';
import { useMemberQuery } from '@/hooks/queries/members';
import { useRecipeBookmarkMutation, useRecipeFavoriteMutation } from '@/hooks/queries/recipe';

interface RecipeFavoriteProps {
  recipeId: number;
  favorite: boolean;
  favoriteCount?: number;
}

const RecipeFavoriteButton = ({ recipeId, favorite, favoriteCount }: RecipeFavoriteProps) => {
  const { mutate: favoriteMutate } = useRecipeFavoriteMutation(Number(recipeId));
  const { mutate: bookmarkMutate } = useRecipeBookmarkMutation(Number(recipeId));
  const { data: member } = useMemberQuery();

  const handleToggleFavorite = async () => {
    favoriteMutate({ favorite: !favorite });
    bookmarkMutate({ bookmark: !favorite });
  };

  const [debouncedToggleFavorite] = useTimeout(handleToggleFavorite, 200);

  return (
    <div className={container}>
      {member ? (
        <button type="button" onClick={debouncedToggleFavorite}>
          {favorite ? (
            <SvgIcon variant="heartFilled" width={24} height={24} />
          ) : (
            <img src={HeartEmpty} alt="좋아요" width={24} height={24} />
          )}
        </button>
      ) : (
        <div>
          <img src={HeartEmpty} alt="좋아요" width={24} height={24} />
        </div>
      )}

      {favoriteCount && (
        <div className={countWrapper}>
          <Text as="span" size="caption1" weight="medium" color="sub">
            {favoriteCount}
          </Text>
        </div>
      )}
      {favoriteCount && <div style={{ width: 6 }} />}
      <Text as="span" size="caption1" weight="medium" color="sub">
        {favoriteCount}
      </Text>
    </div>
  );
};

export default RecipeFavoriteButton;
