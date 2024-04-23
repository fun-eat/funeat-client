import { Link } from 'react-router-dom';

import { logoutButton, modifyButton, wrapper } from './memberInfo.css';
import MemberImage from '../MemberImage/MemberImage';

import { SvgIcon, Text } from '@/components/Common';
import { PATH } from '@/constants/path';
import { useLogoutMutation, useMemberQuery } from '@/hooks/queries/members';
import { vars } from '@/styles/theme.css';
import PostCounterBox from '../PostCounterBox/PostCounterBox';

const MembersInfo = () => {
  const { data: member } = useMemberQuery();
  const { mutate } = useLogoutMutation();

  if (!member) {
    return null;
  }

  const { nickname, profileImage, recipeCount, reviewCount } = member;

  const handleLogout = () => {
    mutate();
  };

  return (
    <>
      <button className={logoutButton} onClick={handleLogout}>
        <Text as="span" size="caption4" weight="medium" color="info">
          로그아웃
        </Text>
      </button>

      <div className={wrapper}>
        <MemberImage
          src={profileImage}
          width={45}
          height={45}
          css={{
            marginRight: `16px`,
            objectFit: `cover`,
          }}
        />
        <div style={{ width: '10px' }} />
        <Text size="display1" weight="semiBold">
          {nickname}
        </Text>
        <Link to={`${PATH.MEMBER}/modify`} className={modifyButton}>
          <SvgIcon variant="pencil" width={12} height={12} fill={vars.colors.white} />
        </Link>
      </div>
      <div style={{ height: '24px' }} />

      <PostCounterBox recipeCount={recipeCount} reviewCount={reviewCount} />
    </>
  );
};

export default MembersInfo;
