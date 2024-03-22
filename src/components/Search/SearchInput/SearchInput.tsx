import type { ComponentPropsWithRef, ForwardedRef } from 'react';
import { forwardRef } from 'react';

import { iconWrapperButton, inputContainer, searchInput } from './searchInput.css';

import { SvgIcon } from '@/components/Common';

interface SearchInputProps extends ComponentPropsWithRef<'input'> {
  isInputSubmitted: boolean;
}

const SearchInput = forwardRef(
  ({ value, isInputSubmitted, ...props }: SearchInputProps, ref: ForwardedRef<HTMLInputElement>) => {
    return (
      <div className={inputContainer}>
        <input
          className={searchInput}
          ref={ref}
          placeholder="상품 또는 꿀!조합을 검색해보세요"
          value={value}
          {...props}
        />
        <button className={iconWrapperButton}>
          {isInputSubmitted ? (
            <SvgIcon variant="close2" width={13} height={13} stroke="#232527" />
          ) : (
            <SvgIcon variant="search2" width={20} height={20} stroke="#808080" />
          )}
        </button>
      </div>
    );
  }
);

SearchInput.displayName = 'SearchInput';

export default SearchInput;
