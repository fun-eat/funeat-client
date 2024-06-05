import { Link } from 'react-router-dom';

import { container, linkWrapper, main } from './notFoundPage.css';

import NotFound from '@/assets/not-found.png';
import { Text, TopBar } from '@/components/Common';
import { PATH } from '@/constants/path';

const NotFoundPage = () => {
  return (
    <>
      <TopBar>
        <TopBar.BackLink />
      </TopBar>

      <main className={main}>
        <section className={container}>
          <img src={NotFound} alt="404 캐릭터" width={83} height={77} />
          <div style={{ height: 24 }} />
          <Text size="headline" weight="semiBold" color="sub">
            페이지를 찾을 수 없습니다
          </Text>
          <div style={{ height: 6 }} />
          <Text size="caption4" weight="medium" color="disabled">
            죄송합니다. 찾으려는 페이지의 주소가 <br />
            존재하지 않거나, 사용할 수 없는 페이지입니다.
          </Text>
          <div style={{ height: 60 }} />
          <Link to={PATH.HOME} className={linkWrapper}>
            <Text size="caption1" weight="semiBold" color="info">
              홈으로 돌아가기
            </Text>
          </Link>
        </section>
      </main>
    </>
  );
};

export default NotFoundPage;
