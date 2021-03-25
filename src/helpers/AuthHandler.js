import Cookies from 'js-cookie';

export const isLogged = () => {
  const token = Cookies.get('token');
  return token ? true : false;
};

export const doLogin = (token, rememberLogin = false) => {
  if (rememberLogin) {
    Cookies.set('token', token, {
      expires: 999,
    });
  } else {
    Cookies.set('token', token);
  };
};

export const doLogout = () => {
  Cookies.remove('token');
};