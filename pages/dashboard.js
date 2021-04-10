import { checkAuth, withAuth } from '../services/auth';
import { DashboardScreen } from '../components/Screens';

export async function getServerSideProps(context) {
  return await checkAuth(context);
}

export default withAuth(DashboardScreen);
