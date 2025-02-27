import { container } from './errorComponent.css';
import Spacing from '../Spacing/Spacing';
import Text from '../Typography/Text/Text';

import Error from '@/assets/error.png';

const ErrorComponent = () => {
  return (
    <div className={container}>
      <Spacing size={30} />
      <img src={Error} alt="404 캐릭터" width={92} height={58} />
      <Spacing size={12} />
      <Text size="headline" weight="semiBold" color="sub">
        에러가 발생했습니다
      </Text>
      <Spacing size={32} />
    </div>
  );
};

export default ErrorComponent;
