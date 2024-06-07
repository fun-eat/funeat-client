import type { MouseEventHandler } from 'react';

import { container, stepper, wrapper } from './stepper.css';

interface StepperProps {
  selectedStepper: number;
  handleStepperSelect: (selectedStepper: string) => void;
}

const Stepper = ({ selectedStepper, handleStepperSelect }: StepperProps) => {
  const handleStepperClick: MouseEventHandler<HTMLButtonElement> = (event) => {
    handleStepperSelect(event.currentTarget.value);
  };

  return (
    <ul className={container}>
      {Array.from({ length: 3 }, (_, index) => {
        const isSelected = selectedStepper === index;

        return (
          <li key={index} className={wrapper}>
            <button
              className={isSelected ? stepper['active'] : stepper['default']}
              type="button"
              value={index}
              onClick={handleStepperClick}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default Stepper;
