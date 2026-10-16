import React from 'react';

class ErrorBoundary extends React.Component {
  state = {
    error: null,
    errorInfo: null,
  };

  static getDerivedStateFromError(error) {
    return { error, hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.log('A component had an error:', error);
    this.setState({ errorInfo });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="card my-5 error-card">
          <h3>Something went wrong</h3>
          <p>{this.state.error?.toString()}</p>
          {this.state.errorInfo && (
            <details>
              <summary>Error details</summary>
              <pre>{this.state.errorInfo.componentStack}</pre>
            </details>
          )}
          <button onClick={this.props.onReset || (() => window.location.reload())}>
            {this.props.onReset ? 'Close' : 'Reload'}
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
