import { contentWrapper, titleWrapper, descriptionText } from './onboardingPage.css';

import { Spacing, Text } from '@/components/Common';

interface OnboardingContentProps {
  title: string;
  description: string;
  image: string;
}

const OnboardingContent = ({ title, description, image }: OnboardingContentProps) => {
  return (
    <div className={contentWrapper}>
      <div className={titleWrapper}>
        <Text size="caption3" weight="bold" color="yellow">
          {title}
        </Text>
      </div>
      <Spacing size={17} />

      <Text size="display1" weight="semiBold" color="sub" className={descriptionText}>
        {description}
      </Text>
      <Spacing size={28} />

      <img width={244} height={'100%'} src={image} alt="온보딩 예시" />
    </div>
  );
};

export default OnboardingContent;
