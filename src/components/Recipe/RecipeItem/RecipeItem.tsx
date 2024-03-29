import { Heading, Text, Skeleton, useTheme } from '@fun-eat/design-system';
import { Fragment, memo, useState } from 'react';
import styled from 'styled-components';

import PreviewImage from '@/assets/plate.svg';
import { SvgIcon } from '@/components/Common';
import { MemberImage } from '@/components/Members';
import type { MemberRecipe, Recipe } from '@/types/recipe';
import { getFormattedDate } from '@/utils/date';

interface RecipeItemProps {
  recipe: Recipe | MemberRecipe;
  isMemberPage?: boolean;
}

const RecipeItem = ({ recipe, isMemberPage = false }: RecipeItemProps) => {
  const { image, title, createdAt, favoriteCount, products } = recipe;
  const author = 'author' in recipe ? recipe.author : null;
  const [isImageLoading, setIsImageLoading] = useState(true);
  const theme = useTheme();

  return (
    <>
      {!isMemberPage && (
        <ImageWrapper>
          {image !== null ? (
            <>
              <RecipeImage src={image} alt={`조리된 ${title}`} loading="lazy" onLoad={() => setIsImageLoading(false)} />
              {isImageLoading && <Skeleton width="100%" height={160} />}
            </>
          ) : (
            <PreviewImage width={160} height={160} />
          )}
          {author && (
            <MemberImage
              src={author.profileImage}
              alt={`${author.nickname}의 프로필`}
              width={60}
              height={60}
              css={{ position: `absolute`, bottom: `-20px`, right: `16px` }}
            />
          )}
        </ImageWrapper>
      )}
      <RecipeInfoWrapper>
        <Text color={theme.textColors.sub}>
          {author && `${author.nickname} 님 | `}
          {getFormattedDate(createdAt)}
        </Text>
        <Heading as="h3" size="xl" weight="bold">
          {title}
        </Heading>
        <RecipeProductText>
          {products.map(({ id, name }) => (
            <Text as="span" key={id} color={theme.textColors.info}>
              #{name}
            </Text>
          ))}
        </RecipeProductText>
        <FavoriteWrapper>
          <SvgIcon variant="favoriteFilled" width={16} height={16} fill={theme.colors.error} />
          <Text as="span" weight="bold">
            {favoriteCount}
          </Text>
        </FavoriteWrapper>
      </RecipeInfoWrapper>
    </>
  );
};

export default memo(RecipeItem);

const ImageWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 160px;
`;

const RecipeImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 8px;
  object-fit: cover;
`;

const RecipeInfoWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100px;
  margin-top: 10px;
`;

const FavoriteWrapper = styled.div`
  position: absolute;
  top: 50%;
  bottom: 50%;
  right: 0;
  display: flex;
  gap: 4px;
  align-items: center;
  transform: translateY(-50%);
`;

const RecipeProductText = styled(Text)`
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;
