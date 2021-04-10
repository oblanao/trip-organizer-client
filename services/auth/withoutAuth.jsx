import React, { useContext, useEffect, useState } from 'react';
import Router from 'next/router';
import store from './store';
import ensureUser from './ensure-user';
import { AppContext } from '../../components'
/**
 * @see https://github.com/zeit/next.js/issues/153#issuecomment-257924301
 */
const withoutAuth = (WrappedComponent) => {
  const verifyUser = async (setEnsured, redirectTo) => {
    try {
      const refresh = await ensureUser();
      store.dispatch({ type: 'SET', jwt: refresh });
      Router.push(redirectTo);
    } catch (err) {
      setEnsured(true)
    }
  };

  const Wrapper = () => {
    const [ensured, setEnsured] = useState(false)
    const { entryPoint } = useContext(AppContext)
    useEffect(async () => {
      await verifyUser(setEnsured, entryPoint);
    }, []);

    return ensured && <WrappedComponent />;
  };

  return Wrapper;
};

export default withoutAuth;
