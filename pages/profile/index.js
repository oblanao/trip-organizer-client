import { checkAuth, withAuth } from '../../services/auth';
import { ProfileScreen } from '../../components/Screens';

export async function getServerSideProps(context) {
  return await checkAuth(context);
}

export default withAuth(ProfileScreen);
