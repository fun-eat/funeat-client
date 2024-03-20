import { useToastActionContext } from '@fun-eat/design-system';
import type { ChangeEventHandler, FormEventHandler, MouseEventHandler } from 'react';
import { useRef, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { useGA } from '../common';

import { getLocalStorage, setLocalStorage } from '@/utils/localStorage';

const useSearch = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const [searchParams, setSearchParams] = useSearchParams();
  const currentSearchQuery = searchParams.get('query');

  const [searchQuery, setSearchQuery] = useState(currentSearchQuery || '');
  const [isSubmitted, setIsSubmitted] = useState(!!currentSearchQuery);
  const [isAutocompleteOpen, setIsAutocompleteOpen] = useState(searchQuery.length > 0);

  const { toast } = useToastActionContext();

  const { gaEvent } = useGA();

  const recentSearchedKeywords = getLocalStorage<string[]>('recentSearchedKeywords') || [];

  const focusInput = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const handleSearchQuery: ChangeEventHandler<HTMLInputElement> = (event) => {
    setIsSubmitted(false);
    setSearchQuery(event.currentTarget.value);
    setIsAutocompleteOpen(event.currentTarget.value.length > 0);
  };

  const searchKeyword = (value: string) => {
    setSearchQuery(value);
    setIsSubmitted(true);
    setSearchParams({ query: value });
  };

  const handleSearch: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    gaEvent({ category: 'submit', action: '검색 페이지에서 검색', label: '검색' });

    const trimmedSearchQuery = searchQuery.trim();

    if (!trimmedSearchQuery) {
      toast.error('검색어를 입력해주세요');
      focusInput();
      resetSearchQuery();
      return;
    }

    if (currentSearchQuery === trimmedSearchQuery) {
      return;
    }

    searchKeyword(trimmedSearchQuery);
    setLocalStorage('recentSearchedKeywords', [trimmedSearchQuery, ...recentSearchedKeywords.slice(0, 7)]);
  };

  const handleSearchClick: MouseEventHandler<HTMLButtonElement> = (event) => {
    const { value } = event.currentTarget;
    searchKeyword(value);
  };

  const handleAutocompleteClose = () => {
    setIsAutocompleteOpen(false);
  };

  const resetSearchQuery = () => {
    setSearchQuery('');
    setIsSubmitted(false);
    setSearchParams({});
  };

  return {
    inputRef,
    searchQuery,
    isSubmitted,
    isAutocompleteOpen,
    handleSearchQuery,
    handleSearch,
    handleSearchClick,
    handleAutocompleteClose,
    searchKeyword,
    resetSearchQuery,
  };
};

export default useSearch;
