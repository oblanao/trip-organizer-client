import jwt from 'jsonwebtoken';
import cookie from 'js-cookie';

const isLoggedIn = () => {
  const token = cookie.get(process.env.COOKIE);
  return jwt.decode(token);
};

export default isLoggedIn;
