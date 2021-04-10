import { checkAuth, withoutAuth } from '../services/auth';
import { LoginScreen } from '../components/Screens';

export async function getServerSideProps(context) {
  return await checkAuth(context);
}

export default withoutAuth(LoginScreen);
