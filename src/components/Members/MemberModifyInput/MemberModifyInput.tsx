import type { ChangeEventHandler } from 'react';

import { container, inputWrapper, letterCount } from './memberModifyInput.css';

import { Text } from '@/components/Common';

const MIN_LENGTH = 1;
const MAX_LENGTH = 10;

interface MemberModifyInputProps {
  nickname: string;
  modifyNickname: ChangeEventHandler<HTMLInputElement>;
}

const MemberModifyInput = ({ nickname, modifyNickname }: MemberModifyInputProps) => {
  return (
    <>
      <Text size="caption2" weight="semiBold">
        닉네임
      </Text>
      <div style={{ height: 8 }} />
      <div className={container}>
        <Text className={letterCount} as="span" size="caption4" weight="medium" color="disabled">
          {nickname.length} / {MAX_LENGTH}
        </Text>
        <input
          className={inputWrapper}
          value={nickname}
          onChange={modifyNickname}
          minLength={MIN_LENGTH}
          maxLength={MAX_LENGTH}
        />
      </div>
    </>
  );
};

export default MemberModifyInput;
