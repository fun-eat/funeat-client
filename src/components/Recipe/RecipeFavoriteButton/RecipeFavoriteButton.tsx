import { container, favoriteCountText } from './recipeFavoriteButton.css';

import { SvgIcon } from '@/components/Common';
import { useTimeout } from '@/hooks/common';
import { useRecipeFavoriteMutation } from '@/hooks/queries/recipe';

interface RecipeFavoriteProps {
  recipeId: number;
  favorite: boolean;
  favoriteCount?: number;
}

const RecipeFavoriteButton = ({ recipeId, favorite, favoriteCount }: RecipeFavoriteProps) => {
  const { mutate } = useRecipeFavoriteMutation(Number(recipeId));

  const handleToggleFavorite = async () => {
    mutate({ favorite: !favorite });
  };

  const [debouncedToggleFavorite] = useTimeout(handleToggleFavorite, 200);

  return (
    <div className={container}>
      <button type="button" onClick={debouncedToggleFavorite}>
        <SvgIcon variant={favorite ? 'heartFilled' : 'heartEmpty'} width={24} height={24} />
      </button>
      {favoriteCount && <p className={favoriteCountText}>{favoriteCount}</p>}
    </div>
  );
};

export default RecipeFavoriteButton;
