import { useNavigate } from 'react-router-dom';

import { imageWrapper, categoryImage, categoryName } from './categoryItem.css';

import { PATH } from '@/constants/path';
import { useGA } from '@/hooks/common';
import { useCategoryActionContext } from '@/hooks/context';

interface CategoryItemProps {
  categoryId: number;
  name?: string;
  image: {
    src: string;
    width: number;
    height: number;
  };
  categoryType: 'food' | 'store';
}

const CategoryItem = ({ categoryId, name, image, categoryType }: CategoryItemProps) => {
  const navigate = useNavigate();
  const { selectCategory } = useCategoryActionContext();

  const { gaEvent } = useGA();

  const handleCategoryItemClick = (categoryId: number) => {
    selectCategory(categoryType, categoryId);
    navigate(PATH.PRODUCT_LIST + '/' + categoryType);

    gaEvent({
      category: 'button',
      action: `${name} 카테고리 링크 클릭`,
      label: '카테고리',
    });
  };

  return (
    <button type="button" onClick={() => handleCategoryItemClick(categoryId)}>
      <div className={imageWrapper}>
        <img className={categoryImage} src={image.src} width={image.width} height={image.height} alt={name} />
      </div>
      <p className={categoryName}>{name}</p>
    </button>
  );
};

export default CategoryItem;
