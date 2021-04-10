/* useful for /login routes, where we want to redirect to dashboard */
import { isLoggedIn } from '.';
import { Router } from 'next/router';
import { useEffect } from 'react';

const withoutAuth = (Component) => {
  const WrappedComponent = () => {
    useEffect(() => {
      if (isLoggedIn()) {
        Router.push('/');
      }
    }, []);
    return <Component />;
  };

  return WrappedComponent;
};

export default withoutAuth;
