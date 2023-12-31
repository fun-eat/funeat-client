import { Button, Spacing, useToastActionContext } from '@fun-eat/design-system';
import type { ChangeEventHandler, FormEventHandler } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { SectionTitle, SvgIcon } from '@/components/Common';
import { MemberModifyInput } from '@/components/Members';
import { IMAGE_MAX_SIZE } from '@/constants';
import { useFormData, useImageUploader } from '@/hooks/common';
import { useMemberModifyMutation, useMemberQuery } from '@/hooks/queries/members';
import type { MemberRequest } from '@/types/member';

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
    setNickname(event.target.value);
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

  return (
    <>
      <SectionTitle name="" />
      <MemberForm onSubmit={handleSubmit}>
        <div>
          <MemberImageUploaderContainer>
            <MemberImageUploaderWrapper>
              <UserProfileImageWrapper>
                <ProfileImage src={previewImage ? previewImage : member.profileImage} alt="업로드한 사진" width={80} />
              </UserProfileImageWrapper>
              <UserImageUploaderLabel>
                <input type="file" accept="image/*" onChange={handleImageUpload} />
                <SvgIcon variant="camera" width={20} height={20} />
              </UserImageUploaderLabel>
            </MemberImageUploaderWrapper>
          </MemberImageUploaderContainer>
          <Spacing size={44} />
          <MemberModifyInput nickname={nickname} modifyNickname={modifyNickname} />
        </div>
        <FormButton customWidth="100%" customHeight="60px" size="xl" weight="bold">
          수정하기
        </FormButton>
      </MemberForm>
    </>
  );
};

const MemberImageUploaderContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const MemberImageUploaderWrapper = styled.div`
  position: relative;
`;

const UserProfileImageWrapper = styled.div`
  width: 80px;
  height: 80px;
  border: 1px solid ${({ theme }) => theme.borderColors.disabled};
  border-radius: 50%;
  background: ${({ theme }) => theme.backgroundColors.default};
  overflow: hidden;
`;

const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const UserImageUploaderLabel = styled.label`
  position: absolute;
  top: 54px;
  right: -5px;
  width: 30px;
  height: 30px;
  text-align: center;
  border: 1px solid ${({ theme }) => theme.borderColors.disabled};
  border-radius: 50%;
  background: ${({ theme }) => theme.backgroundColors.default};
  cursor: pointer;

  & > input {
    display: none;
  }

  & > svg {
    transform: translateX(-0.5px) translateY(3px);
  }
`;

const MemberForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 92%;
`;

const FormButton = styled(Button)`
  color: ${({ theme }) => theme.colors.black};
  background: ${({ theme }) => theme.colors.primary};
`;
