import React from 'react';

/**
 * Last-resort fallback. Rendered outside the I18n provider, so the copy stays in
 * English on purpose. The stack trace is shown only during development.
 */
export class ErrorBoundary extends React.Component<{ children: React.ReactNode }, { error: Error | null }> {
  state = { error: null as Error | null };

  static getDerivedStateFromError(error: Error) {
    return { error };
  }

  componentDidCatch(error: Error) {
    if (import.meta.env.DEV) {
      console.error('Unhandled error:', error);
    }
  }

  private handleReset = () => {
    this.setState({ error: null });
    window.location.reload();
  };

  render() {
    const { error } = this.state;
    if (!error) return this.props.children;

    return (
      <div className="app-error">
        <h1 className="app-error__title">Something went wrong</h1>
        <p className="app-error__text">
          The calculator ran into an unexpected problem. Restarting usually fixes it — your saved
          inputs are kept.
        </p>
        <button className="app-error__btn" onClick={this.handleReset}>
          Restart calculator
        </button>
        {import.meta.env.DEV && (
          <pre className="app-error__stack">{error.stack || error.message}</pre>
        )}
      </div>
    );
  }
}
