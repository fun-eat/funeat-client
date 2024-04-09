import { useState } from 'react';

import { button, closeButton, bubble, container } from './writeButton.css';
import SvgIcon from '../Svg/SvgIcon';

import { useMemberQuery } from '@/hooks/queries/members';

const WriteButton = () => {
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
        <button className={button} disabled={!member}>
          <SvgIcon variant="pencil2" fill="none" stroke="white" width={17} height={17} />
        </button>
      </div>
    </>
  );
};

export default WriteButton;
