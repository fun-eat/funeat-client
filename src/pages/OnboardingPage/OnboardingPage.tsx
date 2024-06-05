import { Link } from 'react-router-dom';

import OnboardingContent from './OnboardingContent';
import { container, link } from './onboardingPage.css';

import OnboardingMember from '@/assets/onboarding-member.png';
import OnboardingRecipe from '@/assets/onboarding-recipe.png';
import OnboardingReview from '@/assets/onboarding-review.png';
import { Stepper, Text } from '@/components/Common';
import { PATH } from '@/constants/path';
import { useTabMenu } from '@/hooks/common';

const ONBOARDING_STEPS = [
  {
    title: '상품 조합',
    description: '편의점 음식들을 이용한 \n다양한 조합을 확인할 수 있어요',
    image: OnboardingRecipe,
  },
  {
    title: '상품 리뷰',
    description: '태그, 이미지, 별점을 통해 \n정확한 리뷰를 확인할 수 있어요',
    image: OnboardingReview,
  },
  { title: '마이페이지', description: '마이페이지에서 \n나만의 조합과 리뷰를 관리해요', image: OnboardingMember },
];

export const OnboardingPage = () => {
  const { selectedTabMenu, handleTabMenuClick } = useTabMenu('0');
  const selectedStepper = parseInt(selectedTabMenu);
  const content = ONBOARDING_STEPS[selectedStepper];

  return (
    <>
      <section className={container}>
        <Stepper selectedStepper={selectedStepper} handleStepperSelect={handleTabMenuClick} />
        <div style={{ height: 50 }} />

        <OnboardingContent title={content.title} description={content.description} image={content.image} />
      </section>
      <Link to={PATH.HOME} className={link}>
        <Text size="body" weight="bold" color="white">
          시작하기
        </Text>
      </Link>
    </>
  );
};

export default OnboardingPage;
