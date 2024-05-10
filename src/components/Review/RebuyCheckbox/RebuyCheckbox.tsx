import type { ChangeEventHandler } from 'react';

import { check, checkbox, container } from './rebuyCheckbox.css';

import { SvgIcon, Text } from '@/components/Common';
import { useEnterKeyDown } from '@/hooks/common';
import { useReviewFormActionContext } from '@/hooks/context';
import { itemTitle } from '@/styles/form.css';
import { vars } from '@/styles/theme.css';

interface RebuyCheckboxProps {
  isRebuy: boolean;
}

const RebuyCheckbox = ({ isRebuy }: RebuyCheckboxProps) => {
  const { handleReviewFormValue } = useReviewFormActionContext();
  const { inputRef, labelRef, handleKeydown } = useEnterKeyDown();

  const handleRebuy: ChangeEventHandler<HTMLInputElement> = (event) => {
    handleReviewFormValue({ target: 'rebuy', value: event.target.checked });
  };

  return (
    <>
      <h2 className={itemTitle} tabIndex={0}>
        재구매 여부
      </h2>
      <p onKeyDown={handleKeydown}>
        <label className={container} ref={labelRef}>
          <input type="checkbox" className={checkbox} ref={inputRef} onChange={handleRebuy} tabIndex={0} />
          <span className={isRebuy ? check.checked : check.default} aria-hidden>
            <SvgIcon variant="check2" width={10} height={10} fill={isRebuy ? vars.colors.primary : vars.colors.white} />
          </span>
          <Text as="span" weight="semiBold">
            재구매할 생각이 있어요
          </Text>
        </label>
      </p>
    </>
  );
};

export default RebuyCheckbox;
