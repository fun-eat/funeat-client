import { SvgIcon } from '@/components/Common';
import { iconWrapper, inputContainer, searchInput } from './searchBox.css';

const SearchBox = () => {
  return (
    <div className={inputContainer}>
      <input className={searchInput} placeholder="상품 또는 꿀!조합을 검색해보세요" />
      <div className={iconWrapper}>
        <button>
          <SvgIcon variant="search2" width={20} height={20} stroke="#808080" />
        </button>
      </div>
    </div>
  );
};

export default SearchBox;
