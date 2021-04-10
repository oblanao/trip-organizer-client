import { checkAuth, withAuth } from '../services/auth';
import DashboardPage from './dashboard';

export async function getServerSideProps(context) {
  return await checkAuth(context);
}

export default withAuth(DashboardPage);
