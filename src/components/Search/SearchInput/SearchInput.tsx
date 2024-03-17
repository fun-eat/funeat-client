import { iconWrapper, inputContainer, searchInput } from './searchInput.css';

import { SvgIcon } from '@/components/Common';

const SearchInput = () => {
  return (
    <div className={inputContainer}>
      <input className={searchInput} placeholder="상품 또는 꿀!조합을 검색해보세요" />
      <button className={iconWrapper}>
        <SvgIcon variant="search2" width={20} height={20} stroke="#808080" />
      </button>
    </div>
  );
};

export default SearchInput;
