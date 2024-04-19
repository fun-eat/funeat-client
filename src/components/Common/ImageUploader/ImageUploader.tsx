import { useToastActionContext } from '@fun-eat/design-system';
import type { ChangeEventHandler } from 'react';

import { container, deleteButton, image, imageWrapper, uploadInput, uploadLabel } from './imageUploader.css';
import SvgIcon from '../Svg/SvgIcon';
import Text from '../Text/Text';

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
    <div className={container}>
      <label
        className={previewImage ? uploadLabel.uploaded : uploadLabel.default}
        tabIndex={0}
        onKeyDown={handleKeydown}
        aria-label="사진 업로드 버튼"
        aria-hidden
      >
        <SvgIcon variant="picture" width={28} height={28} fill={vars.colors.gray2} />
        {previewImage && (
          <Text as="span" size="caption4" color="disabled" weight="medium">
            사진 변경하기
          </Text>
        )}
        <input className={uploadInput} ref={inputRef} type="file" accept="image/*" onChange={handleImageUpload} />
      </label>
      {previewImage && (
        <div className={imageWrapper}>
          <img src={previewImage} className={image} width={80} height={80} alt="업로드한 사진" />
          <button type="button" className={deleteButton} onClick={deleteImage}>
            <SvgIcon variant="close2" width={10} height={10} fill="none" stroke={vars.colors.white} />
          </button>
        </div>
      )}
    </div>
  );
};

export default ImageUploader;
