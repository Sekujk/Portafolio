import React from 'react';
import { motion } from 'framer-motion';
import { withTranslation } from 'react-i18next';
import { FaExclamationTriangle, FaRedo, FaHome } from 'react-icons/fa';
import './ErrorBoundary.css';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo
    });
    
    // Log error to console in development
    if (process.env.NODE_ENV === 'development') {
      console.error('Error caught by boundary:', error, errorInfo);
    }
  }

  handleRefresh = () => {
    window.location.reload();
  };

  handleGoHome = () => {
    window.location.href = '/';
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-boundary">
          <div className="error-boundary-container">
            <motion.div
              className="error-boundary-content"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <motion.div
                className="error-icon"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <FaExclamationTriangle />
              </motion.div>

              <motion.div
                className="error-message"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <h1>{this.props.t('error.title')}</h1>
                <p>
                  {this.props.t('error.message')}
                </p>
              </motion.div>

              <motion.div
                className="error-actions"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <button
                  onClick={this.handleRefresh}
                  className="btn btn-primary"
                >
                  <FaRedo />
                  {this.props.t('error.refresh')}
                </button>
                <button
                  onClick={this.handleGoHome}
                  className="btn btn-secondary"
                >
                  <FaHome />
                  {this.props.t('error.goHome')}
                </button>
              </motion.div>

              {process.env.NODE_ENV === 'development' && this.state.error && (
                <motion.details
                  className="error-details"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                >
                  <summary>Detalles del error (Desarrollo)</summary>
                  <pre>{this.state.error.toString()}</pre>
                  <pre>{this.state.errorInfo.componentStack}</pre>
                </motion.details>
              )}
            </motion.div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default withTranslation()(ErrorBoundary);
