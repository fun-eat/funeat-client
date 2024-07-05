import { useToastActionContext } from '@fun-eat/design-system';
import type { ChangeEventHandler, FormEventHandler } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import {
  button,
  buttonWrapper,
  container,
  imageUploaderContainer,
  imageUploaderIcon,
  imageUploaderInput,
  imageUploaderLabel,
  imageUploaderWrapper,
  profileImage,
  profileImageWrapper,
} from './memberModifyPage.css';

import { SvgIcon, TopBar } from '@/components/Common';
import { MemberModifyInput } from '@/components/Members';
import { IMAGE_MAX_SIZE } from '@/constants';
import { useFormData, useImageUploader } from '@/hooks/common';
import { useMemberModifyMutation, useMemberQuery } from '@/hooks/queries/members';
import { vars } from '@/styles/theme.css';
import type { MemberRequest } from '@/types/member';

const MAX_LENGTH = 10;

export const MemberModifyPage = () => {
  const { data: member } = useMemberQuery();
  const { mutate } = useMemberModifyMutation();

  const { previewImage, imageFile, uploadImage } = useImageUploader();
  const { toast } = useToastActionContext();

  const [nickname, setNickname] = useState(member?.nickname ?? '');
  const navigate = useNavigate();

  const formData = useFormData<MemberRequest>({
    imageKey: 'image',
    imageFile: imageFile,
    formContentKey: 'memberRequest',
    formContent: { nickname },
  });

  if (!member) {
    return null;
  }

  const modifyNickname: ChangeEventHandler<HTMLInputElement> = (event) => {
    const { value } = event.target;

    if (value.length <= MAX_LENGTH) {
      event.preventDefault();
      setNickname(value);
    }
  };

  const handleImageUpload: ChangeEventHandler<HTMLInputElement> = (event) => {
    if (!event.target.files) {
      return;
    }

    const imageFile = event.target.files[0];

    if (imageFile.size > IMAGE_MAX_SIZE) {
      toast.error('이미지 크기가 너무 커요. 5MB 이하의 이미지를 골라주세요.');
      event.target.value = '';
      return;
    }

    uploadImage(imageFile);
  };

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();

    mutate(formData, {
      onSuccess: () => {
        navigate('/members');
      },
      onError: (error) => {
        if (error instanceof Error) {
          toast.error(error.message);
          return;
        }

        toast.error('회원정보 수정을 다시 시도해주세요.');
      },
    });
  };

  const isValid = imageFile || member?.nickname !== nickname;

  console.log(isValid);

  return (
    <>
      <TopBar>
        <TopBar.BackLink />
      </TopBar>
      <div style={{ height: '24px' }} />

      <section className={container}>
        <form onSubmit={handleSubmit}>
          <div className={imageUploaderContainer}>
            <div className={imageUploaderWrapper}>
              <div className={profileImageWrapper}>
                <img
                  className={profileImage}
                  src={previewImage ? previewImage : member.profileImage}
                  alt="업로드한 사진"
                  width={84}
                  height={84}
                />
              </div>
              <label className={imageUploaderLabel}>
                <input className={imageUploaderInput} type="file" accept="image/*" onChange={handleImageUpload} />
                <SvgIcon
                  className={imageUploaderIcon}
                  variant="camera2"
                  width={14}
                  height={14}
                  fill={vars.colors.text.disabled}
                />
              </label>
            </div>
          </div>
          <div style={{ height: 20 }} />

          <MemberModifyInput nickname={nickname} modifyNickname={modifyNickname} />
          <div className={buttonWrapper}>
            <button className={button} disabled={!isValid}>
              수정하기
            </button>
          </div>
        </form>
      </section>
    </>
  );
};
