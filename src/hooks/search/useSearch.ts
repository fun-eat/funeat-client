import { useToastActionContext } from '@fun-eat/design-system';
import type { ChangeEventHandler, FormEventHandler, MouseEventHandler } from 'react';
import { useRef, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

import { useGA } from '../common';

import { PATH } from '@/constants/path';
import { getLocalStorage, setLocalStorage } from '@/utils/localStorage';

const useSearch = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const [searchParams, setSearchParams] = useSearchParams();
  const currentSearchQuery = searchParams.get('query');
  const navigate = useNavigate();

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

  const handleSearchForm: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    gaEvent({ category: 'submit', action: '검색 페이지에서 검색', label: '검색' });

    const trimmedSearchQuery = searchQuery.trim();

    if (!trimmedSearchQuery) {
      toast.error('검색어를 입력해주세요');
      resetSearchQuery();
      navigate(PATH.SEARCH);
      return;
    }

    if (isSubmitted) {
      resetSearchQuery();
      navigate(PATH.SEARCH);
      return;
    }

    if (currentSearchQuery === trimmedSearchQuery) {
      return;
    }

    searchKeyword(trimmedSearchQuery);
    setLocalStorage('recentSearchedKeywords', [trimmedSearchQuery, ...recentSearchedKeywords.slice(0, 7)]);
  };

  const handleSearchByClick: MouseEventHandler<HTMLButtonElement> = (event) => {
    const { value } = event.currentTarget;
    searchKeyword(value);
  };

  const handleAutocompleteClose = () => {
    setIsAutocompleteOpen(false);
  };

  const handleTagSearch = (id: number, name: string) => {
    setSearchQuery(name);
    setIsSubmitted(true);

    navigate(`${PATH.SEARCH}/tags?query=${name}&id=${id}`);
  };

  const resetSearchQuery = () => {
    setSearchQuery('');
    setIsSubmitted(false);
    setSearchParams({});
    focusInput();

    // navigate(PATH.SEARCH);
  };

  return {
    inputRef,
    searchQuery,
    isSubmitted,
    isAutocompleteOpen,
    handleSearchQuery,
    handleSearchForm,
    handleSearchByClick,
    handleAutocompleteClose,
    handleTagSearch,
    resetSearchQuery,
  };
};

export default useSearch;
