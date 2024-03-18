import type { ComponentPropsWithRef, ForwardedRef } from 'react';
import { forwardRef } from 'react';

import { iconWrapper, inputContainer, searchInput } from './searchInput.css';

import { SvgIcon } from '@/components/Common';

type SearchInputProps = ComponentPropsWithRef<'input'>;

const SearchInput = forwardRef(({ ...props }: SearchInputProps, ref: ForwardedRef<HTMLInputElement>) => {
  return (
    <div className={inputContainer}>
      <input className={searchInput} ref={ref} placeholder="상품 또는 꿀!조합을 검색해보세요" {...props} />
      <button className={iconWrapper}>
        <SvgIcon variant="search2" width={20} height={20} stroke="#808080" />
      </button>
    </div>
  );
});

export default SearchInput;
