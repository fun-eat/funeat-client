import { Button, useToastActionContext } from '@fun-eat/design-system';
import type { ChangeEventHandler } from 'react';
import styled from 'styled-components';

import { uploadInput, uploadLabel } from './imageUploader.css';
import SvgIcon from '../Svg/SvgIcon';

import { IMAGE_MAX_SIZE } from '@/constants';
import { useEnterKeyDown } from '@/hooks/common';
import { vars } from '@/styles/theme.css';

interface ReviewImageUploaderProps {
  previewImage: string;
  uploadImage: (imageFile: File) => void;
  deleteImage: () => void;
}

const ImageUploader = ({ previewImage, uploadImage, deleteImage }: ReviewImageUploaderProps) => {
  const { inputRef, handleKeydown } = useEnterKeyDown();
  const { toast } = useToastActionContext();

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

  return (
    <>
      {/*이미지 미리보기 디자인*/}
      {previewImage ? (
        <PreviewImageWrapper>
          <img src={previewImage} alt="업로드한 사진" width={200} />
          <Button type="button" customWidth="80px" color="primary" weight="bold" variant="filled" onClick={deleteImage}>
            삭제하기
          </Button>
        </PreviewImageWrapper>
      ) : (
        <label className={uploadLabel} tabIndex={0} onKeyDown={handleKeydown} aria-label="사진 업로드 버튼" aria-hidden>
          <SvgIcon variant="picture" width={28} height={28} fill={vars.colors.gray2} />
          <input className={uploadInput} ref={inputRef} type="file" accept="image/*" onChange={handleImageUpload} />
        </label>
      )}
    </>
  );
};

export default ImageUploader;

const PreviewImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
`;
