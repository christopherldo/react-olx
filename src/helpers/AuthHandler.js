import Cookies from 'js-cookie';

export const isLogged = () => {
  const token = Cookies.get('token');
  return token ? true : false;
};