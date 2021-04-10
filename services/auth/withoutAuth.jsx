import React, { useEffect, useState } from 'react';
import Router from 'next/router';
import store from './store';
import ensureUser from './ensure-user';

/**
 * @see https://github.com/zeit/next.js/issues/153#issuecomment-257924301
 */
const withoutAuth = (WrappedComponent) => {
  const verifyUser = async (setEnsured) => {
    try {
      const refresh = await ensureUser();
      store.dispatch({ type: 'SET', jwt: refresh });
      Router.push('/dashboard');
    } catch (err) {
      setEnsured(true)
    }
  };

  const Wrapper = () => {
    const [ensured, setEnsured] = useState(false)
    useEffect(async () => {
      await verifyUser(setEnsured);
    }, []);

    return ensured && <WrappedComponent />;
  };

  return Wrapper;
};

export default withoutAuth;
