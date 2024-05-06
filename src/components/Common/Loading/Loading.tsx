import { container, loadingDot, wrapper } from './loading.css';

import LoadingImage from '@/assets/loading.png';

const Loading = () => {
  return (
    <div className={container}>
      <img src={LoadingImage} width={108} height={108} />
      <div className={wrapper}>
        <span className={loadingDot} />
        <span className={loadingDot} />
        <span className={loadingDot} />
      </div>
    </div>
  );
};

export default Loading;
