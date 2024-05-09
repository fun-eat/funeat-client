import type { ComponentType, PropsWithChildren } from 'react';
import { Component } from 'react';

import { button, buttonWrapper } from './errorBoundary.css';
import Text from '../Text/Text';

export interface FallbackProps {
  message: string;
}

interface ErrorBoundaryProps {
  handleReset?: () => void;
  fallback: ComponentType<FallbackProps>;
}

interface ErrorBoundaryState {
  error: Error | null;
}

class ErrorBoundary extends Component<PropsWithChildren<ErrorBoundaryProps>, ErrorBoundaryState> {
  state: ErrorBoundaryState = {
    error: null,
  };

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { error };
  }

  resetError = () => {
    if (this.props.handleReset) {
      this.props.handleReset();
    }

    this.setState({ error: null });
  };

  render() {
    const { fallback: FallbackComponent } = this.props;

    if (this.state.error) {
      return (
        <>
          <FallbackComponent message={this.state.error.message} />
          <div className={buttonWrapper}>
            <button type="button" className={button} onClick={this.resetError}>
              <Text size="caption1" weight="semiBold" color="info">
                다시 시도하기
              </Text>
            </button>
          </div>
          <div style={{ height: 10 }} />
        </>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
