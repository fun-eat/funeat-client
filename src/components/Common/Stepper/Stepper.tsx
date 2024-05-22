import type { MouseEventHandler } from 'react';

import { container, stepper, wrapper } from './stepper.css';

import { useTabMenu } from '@/hooks/common';

const Stepper = () => {
  const { selectedTabMenu, handleTabMenuClick } = useTabMenu('0');

  const handleStepperClick: MouseEventHandler<HTMLButtonElement> = (event) => {
    handleTabMenuClick(event.currentTarget.value);
  };

  return (
    <ul className={container}>
      {Array.from({ length: 3 }, (_, index) => {
        const isSelected = selectedTabMenu === String(index);

        return (
          <li key={index} className={wrapper}>
            <button
              className={isSelected ? stepper['active'] : stepper['default']}
              type="button"
              value={String(index)}
              onClick={handleStepperClick}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default Stepper;
