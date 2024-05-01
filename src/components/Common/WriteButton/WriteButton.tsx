import { useState } from 'react';
import { Link } from 'react-router-dom';

import { closeButton, bubble, container, ableLink, disabledLink } from './writeButton.css';
import SvgIcon from '../Svg/SvgIcon';

import { useMemberQuery } from '@/hooks/queries/members';

interface WriteButtonProps {
  link: string;
}

const WriteButton = ({ link }: WriteButtonProps) => {
  const { data: member } = useMemberQuery();
  const [isBubbleOpen, setIsBubbleOpen] = useState(true);

  const isShowBubble = isBubbleOpen && !member;

  return (
    <>
      <div className={container}>
        {isShowBubble && (
          <div className={bubble}>
            <p>로그인 후 꿀조합을 작성할 수 있어요</p>
            <button type="button" className={closeButton} onClick={() => setIsBubbleOpen(false)}>
              <SvgIcon variant="close" width={8} height={8} fill="#808080" />
            </button>
          </div>
        )}
        {member ? (
          <Link to={link} className={ableLink}>
            <SvgIcon variant="pencil2" fill="none" stroke="white" width={17} height={17} />
          </Link>
        ) : (
          <div className={disabledLink}>
            <SvgIcon variant="pencil2" fill="none" stroke="white" width={17} height={17} />
          </div>
        )}
      </div>
    </>
  );
};

export default WriteButton;
