import { fetch } from '../../services/api';

const fetchProfile = async () => {
  return await fetch('profile', { withAuth: true });
};

export default fetchProfile;
