import { Button, Link, Spacing, Text } from '@fun-eat/design-system';
import { Navigate } from 'react-router-dom';
import styled from 'styled-components';

import Logo from '@/assets/logo.svg';
import { SvgIcon } from '@/components/Common';
import { useRoutePage } from '@/hooks/common';
import { useMemberQuery } from '@/hooks/queries/members';

const SLOGAN = '궁금해? 맛있을걸? 먹어봐 🥄';
const DESCRIPTION = '편의점 음식을 편리하게 찾아보고\n꿀조합 레시피를 공유해보세요.';
const KAKAO_LOGIN = '카카오 로그인';

const loginLink = process.env.NODE_ENV === 'development' ? '/login/kakao?code=qwe' : '/api/auth/kakao';

export const LoginPage = () => {
  const { routeBack } = useRoutePage();
  const { data: member } = useMemberQuery();

  if (member) {
    return <Navigate to="/" replace />;
  }

  return (
    <LoginPageContainer>
      <Button type="button" variant="transparent" onClick={routeBack}>
        <SvgIcon variant="arrow" width={20} height={20} />
      </Button>
      <Spacing size={60} />
      <LoginSection>
        <Logo width={250} />
        <Spacing size={24} />
        <Text size="lg" lineHeight="xl" weight="bold">
          {SLOGAN}
        </Text>
        <Description>{DESCRIPTION}</Description>
      </LoginSection>
      <LoginLinkWrapper>
        <KakaoLoginLink href={loginLink} block>
          <SvgIcon variant="kakao" width={20} height={20} />
          <Text as="span" weight="bold">
            {KAKAO_LOGIN}
          </Text>
        </KakaoLoginLink>
      </LoginLinkWrapper>
    </LoginPageContainer>
  );
};

const LoginPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const LoginSection = styled.section`
  flex-grow: 3;
`;

const Description = styled(Text)`
  white-space: pre-wrap;
`;

const LoginLinkWrapper = styled.div`
  flex-grow: 1;
`;

const KakaoLoginLink = styled(Link)`
  display: flex;
  align-items: center;
  width: 100%;
  height: 54px;
  padding: 0 16px;
  border-radius: 12px;
  background-color: #fee500;

  & > span {
    width: 100%;
    color: rgba(0, 0, 0, 0.85);
    text-align: center;
  }
`;
