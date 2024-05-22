import { contentWrapper, titleWrapper } from './onboardingPage.css';

import { Text } from '@/components/Common';

interface OnboardingContentProps {
  title: string;
  description: string;
  image: string;
}

const OnboardingContent = ({ title, description, image }: OnboardingContentProps) => {
  return (
    <div className={contentWrapper}>
      <div className={titleWrapper}>
        <Text weight="bold" color="yellow" style={{ fontSize: '12px' }}>
          {title}
        </Text>
      </div>
      <div style={{ height: 17 }} />

      <Text size="display1" weight="semiBold" color="sub" style={{ whiteSpace: 'pre-wrap', textAlign: 'center' }}>
        {description}
      </Text>
      <div style={{ height: 28 }} />

      <img width={244} height={'100%'} src={image} alt="온보딩 예시" />
    </div>
  );
};

export default OnboardingContent;
