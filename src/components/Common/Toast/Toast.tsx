import cx from 'classnames';

import { wrapper, toastMessage } from './toast.css';
import useToast from './useToast';
import Text from '../Typography/Text/Text';

export interface ToastProps {
  id: number;
  message: string;
  isError?: boolean;
}

const Toast = ({ id, message, isError = false }: ToastProps) => {
  const isShown = useToast(id);

  return (
    <div className={cx(wrapper, { isError, isShown })}>
      <Text color="white" aria-live="assertive" className={toastMessage}>
        {message}
      </Text>
    </div>
  );
};

export default Toast;
