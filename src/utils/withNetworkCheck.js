// withNetworkCheck.js

import React, { useState, useEffect } from 'react';
import ErrorPageNetwork from '../Components/ErrorPageNetwork';

const withNetworkCheck = (WrappedComponent) => {
  const WithNetworkCheck = (props) => {
    const [isOnline, setIsOnline] = useState(window.navigator.onLine);

    useEffect(() => {
      function handleNetworkChange() {
        setIsOnline(window.navigator.onLine);
      }

      window.addEventListener('online', handleNetworkChange);
      window.addEventListener('offline', handleNetworkChange);

      // it is cleanup this is senior developer code and good practice // componentWillunmount
      return () => {
        window.removeEventListener('online', handleNetworkChange);
        window.removeEventListener('offline', handleNetworkChange);
      };
    }, []);

    return isOnline ? <WrappedComponent {...props} /> : <ErrorPageNetwork />;
  };

  return WithNetworkCheck;
};

export default withNetworkCheck;
