import React, { Component } from "react";

// Error Boundary enables us to catch errors on runtime.
// Benefit?
//      - Enables us to avoid app crash on error occurence.
//      - Enables us to set fallback ui on error

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError = (error) => {
    // Update state so the next render will show the fallback UI.
    // this.setState({
    //   hasError: true,
    // });
    return { hasError: true };
  };

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    // logErrorToMyService(error, errorInfo);
    console.log(error);
    console.log(errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
