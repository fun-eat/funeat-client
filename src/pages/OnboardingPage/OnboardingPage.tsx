import { container } from './onboardingPage.css';

import { Stepper } from '@/components/Common';
import { useTabMenu } from '@/hooks/common';

export const OnboardingPage = () => {
  const { selectedTabMenu, handleTabMenuClick } = useTabMenu('0');

  return (
    <section className={container}>
      <div style={{ height: 10 }} />
      <Stepper selectedStepper={selectedTabMenu} handleStepperSelect={handleTabMenuClick} />
    </section>
  );
};

export default OnboardingPage;
