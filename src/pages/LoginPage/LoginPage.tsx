import { Navigate } from 'react-router-dom';

import { buttonWrapper, container, imageWrapper, kakaoButton, main, wrapper } from './loginPage.css';

import LoginImage from '@/assets/login.png';
import { SvgIcon, Text, TopBar } from '@/components/Common';
import { useMemberQuery } from '@/hooks/queries/members';

const loginLink = process.env.NODE_ENV === 'development' ? '/login/kakao?code=qwe' : '/api/auth/kakao';

export const LoginPage = () => {
  const { data: member } = useMemberQuery();

  if (member) {
    return <Navigate to="/" replace />;
  }

  return (
    <>
      <TopBar>
        <TopBar.Logo />
      </TopBar>

      <main className={main}>
        <section className={container}>
          <div className={wrapper}>
            <div style={{ height: 40 }} />
            <Text size="display1" weight="semiBold">
              로그인이 필요합니다
            </Text>
            <div style={{ height: 8 }} />
            <Text size="caption2" color="info" weight="medium">
              다양한 편의점 상품을 쉽게 찾아보고, <br />
              상품의 조합과 레시피를 살펴보세요!
            </Text>
            <div style={{ height: 116 }} />
          </div>
          <div className={imageWrapper}>
            <img src={LoginImage} alt="로그인 캐릭터" width={220} height={300} />
          </div>

          <div className={buttonWrapper}>
            <a href={loginLink} className={kakaoButton}>
              <SvgIcon variant="kakao" width={20} height={20} />
              <Text as="span" size="caption1" weight="semiBold">
                카카오 로그인
              </Text>
            </a>
          </div>
        </section>
      </main>
    </>
  );
};
