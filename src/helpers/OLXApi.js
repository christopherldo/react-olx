import Cookies from 'js-cookie';
import qs from 'qs';

const BASEAPI = 'http://127.0.0.1:3001/api';

const apiFetchGet = async (endpoint, body = {}) => {
  if (body.token === undefined) {
    const token = Cookies.get('token');
    if (token) {
      body.token = token;
    };
  };

  const res = await fetch(`${BASEAPI + endpoint}?${qs.stringify(body)}`);

  const json = await res.json();

  if (json.notallowed) {
    window.location.href = '/signin';
    return;
  };

  return json;
};

const apiFetchPost = async (endpoint, body) => {
  if (body.token === undefined) {
    const token = Cookies.get('token');
    if (token) {
      body.token = token;
    };
  };

  const res = await fetch(BASEAPI + endpoint, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });

  const json = await res.json();

  if (json.notallowed) {
    window.location.href = '/signin';
    return;
  };

  return json;
};

const OLXApi = () => ({
  login: async (email, password) => {
    const json = await apiFetchPost(
      '/user/signin', {
        email,
        password,
      },
    );
    return json;
  },
  register: async (name, stateLoc, email, password, password_confirmation) => {
    const json = await apiFetchPost(
      '/user/signup', {
        name,
        email,
        password,
        password_confirmation,
        state: stateLoc,
      },
    );

    return json;
  },
  getStates: async () => {
    const json = await apiFetchGet('/states');

    return json.states;
  },
  getCategories: async () => {
    const json = await apiFetchGet('/categories');

    return json.categories;
  },
  getAds: async options => {
    const json = await apiFetchGet(
      '/ad/list',
      options,
    );

    return json;
  },
  getAd: async (id, otherAds = false) => {
    const json = await apiFetchGet(
      '/ad/item',
      {
        id,
        other: otherAds,
      },
    );
    return json;
  },
});

export default OLXApi;