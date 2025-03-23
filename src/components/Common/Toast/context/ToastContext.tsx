import type { PropsWithChildren } from 'react';
import { createContext, useState } from 'react';
import { createPortal } from 'react-dom';

import Toast from '../Toast';
import { container } from '../toast.css';

export interface ToastState {
  id: number;
  message: string;
  isError?: boolean;
}

export interface ToastValue {
  toasts: ToastState[];
}

export interface ToastAction {
  toast: {
    success: (message: string) => void;
    error: (message: string) => void;
  };
  deleteToast: (id: number) => void;
}

export const ToastValueContext = createContext<ToastValue | null>(null);
export const ToastActionContext = createContext<ToastAction | null>(null);

export const ToastProvider = ({ children }: PropsWithChildren) => {
  const [toasts, setToasts] = useState<ToastState[]>([]);

  const showToast = (id: number, message: string, isError?: boolean) => {
    setToasts([...toasts, { id, message, isError }]);
  };

  const deleteToast = (id: number) => {
    setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id));
  };

  const toast = {
    success: (message: string) => showToast(Number(Date.now()), message),
    error: (message: string) => showToast(Number(Date.now()), message, true),
  };

  const toastValue = {
    toasts,
  };

  const toastAction = {
    toast,
    deleteToast,
  };

  return (
    <ToastActionContext.Provider value={toastAction}>
      <ToastValueContext.Provider value={toastValue}>
        {children}
        {createPortal(
          <div className={container}>
            {toasts.map(({ id, message, isError }) => (
              <Toast key={id} id={id} message={message} isError={isError} />
            ))}
          </div>,
          document.getElementById('toast-container-root') as HTMLElement
        )}
      </ToastValueContext.Provider>
    </ToastActionContext.Provider>
  );
};

export default ToastProvider;
