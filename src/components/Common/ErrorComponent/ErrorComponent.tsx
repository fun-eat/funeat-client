import { container } from './errorComponent.css';
import Text from '../Text/Text';

import NotFound from '@/assets/not-found.png';

const ErrorComponent = () => {
  return (
    <div className={container}>
      <div style={{ height: 10 }} />
      <img src={NotFound} alt="404 캐릭터" width={83} height={77} />
      <div style={{ height: 24 }} />
      <Text size="headline" weight="semiBold" color="sub">
        에러가 발생했습니다
      </Text>
      <div style={{ height: 20 }} />
    </div>
  );
};

export default ErrorComponent;
