import { container } from './errorComponent.css';
import Text from '../Text/Text';

import Error from '@/assets/error.png';

const ErrorComponent = () => {
  return (
    <div className={container}>
      <div style={{ height: 30 }} />
      <img src={Error} alt="404 캐릭터" width={92} height={58} />
      <div style={{ height: 12 }} />
      <Text size="headline" weight="semiBold" color="sub">
        에러가 발생했습니다
      </Text>
      <div style={{ height: 32 }} />
    </div>
  );
};

export default ErrorComponent;
