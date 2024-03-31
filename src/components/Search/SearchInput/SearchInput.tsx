import type { ComponentPropsWithRef, ForwardedRef } from 'react';
import { forwardRef } from 'react';

import { iconWrapperButton, inputContainer, searchInput, tagInputWrapper } from './searchInput.css';

import { Text, SvgIcon } from '@/components/Common';

interface SearchInputProps extends ComponentPropsWithRef<'input'> {
  isInputSubmitted: boolean;
  isTagSearch: boolean;
}

const SearchInput = forwardRef(
  ({ value, isInputSubmitted, isTagSearch, ...props }: SearchInputProps, ref: ForwardedRef<HTMLInputElement>) => {
    return (
      <div className={inputContainer}>
        <input
          className={searchInput}
          ref={ref}
          placeholder="상품 또는 꿀!조합을 검색해보세요"
          value={value}
          {...props}
        />
        {isTagSearch && isInputSubmitted && (
          <div className={tagInputWrapper}>
            <Text color="info" size="caption3">
              {value}
            </Text>
            <button>
              <SvgIcon variant="close2" stroke="#6B6B6B" width={8} height={8} />
            </button>
          </div>
        )}
        <button className={iconWrapperButton}>
          {!isTagSearch && (
            <>
              {isInputSubmitted ? (
                <SvgIcon variant="close2" width={13} height={13} stroke="#232527" />
              ) : (
                <SvgIcon variant="search2" width={20} height={20} stroke="#808080" />
              )}
            </>
          )}
        </button>
      </div>
    );
  }
);

SearchInput.displayName = 'SearchInput';

export default SearchInput;
