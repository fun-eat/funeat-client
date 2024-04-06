import type { ChangeEventHandler } from 'react';

import { check, checkbox, container, label } from './rebuyCheckbox.css';

import { SvgIcon } from '@/components/Common';
import { useEnterKeyDown } from '@/hooks/common';
import { useReviewFormActionContext } from '@/hooks/context';
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
    <p onKeyDown={handleKeydown}>
      <label className={container} ref={labelRef}>
        <input type="checkbox" className={checkbox} ref={inputRef} onChange={handleRebuy} tabIndex={0} />
        <span className={isRebuy ? check.checked : check.default} aria-hidden>
          <SvgIcon variant="check2" width={10} height={10} fill={isRebuy ? vars.colors.primary : vars.colors.white} />
        </span>
        <span className={label}>재구매할 생각이 있어요</span>
      </label>
    </p>
  );
};

export default RebuyCheckbox;
