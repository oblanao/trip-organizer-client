// TODO: add loading component while show is false

/* useful for /login routes, where we want to redirect to dashboard */
import { useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router'
import { AppContext } from '../../components'
import ensureUser from './ensure-user';

const withoutAuth = (Component) => {
  const WrappedComponent = () => {
    const [show, setShow] = useState(false)
    const router = useRouter()
    const { entryPoint } = useContext(AppContext)

    useEffect(async () => {
      const user = await ensureUser()
      console.log('user?', user)
      if (user) {
        router.push(entryPoint);
      } else {
        setShow(true);
      }
    }, []);
    return show && <Component />;
  };

  return WrappedComponent;
};

export default withoutAuth;
