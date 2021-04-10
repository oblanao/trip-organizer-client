/* useful for /login routes, where we want to redirect to dashboard */
import React, { useEffect } from 'react';
import Router from 'next/router';
import ensureUser from './ensure-user';

/**
 * @see https://github.com/zeit/next.js/issues/153#issuecomment-257924301
 */
const withoutAuth = (WrappedComponent) => {
  const verifyUser = async () => {
    try {
      await ensureUser();
      Router.push('/');
    } catch (err) {
      console.log('not auth, staying here')
    }
  };

  const Wrapper = (props) => {
    useEffect(() => {
      verifyUser();
    }, []);

    return <WrappedComponent withAuth {...props} />;
  };

  return Wrapper;
};

export default withoutAuth;
