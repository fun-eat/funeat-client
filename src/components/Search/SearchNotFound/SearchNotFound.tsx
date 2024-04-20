import { container } from './searchNotFound.css';

import SearchNotFoundImage from '@/assets/search-notfound.png';
import { Text } from '@/components/Common';

const SearchNotFound = () => {
  return (
    <div className={container}>
      <img src={SearchNotFoundImage} width={335} alt="검색 결과 없음" />
      <Text color="sub" size="headline" weight="semiBold">
        검색 결과가 없어요
      </Text>
      <div style={{ height: '6px' }} />
      <Text color="disabled" size="caption4">
        다른 키워드로 검색해보세요!
      </Text>
    </div>
  );
};

export default SearchNotFound;
