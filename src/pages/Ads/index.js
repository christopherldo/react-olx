import React, { useState, useEffect } from 'react'
import useApi from '../../helpers/OLXApi';
import { PageArea } from './style';
import { PageContainer } from '../../components';
import { useLocation, useHistory } from 'react-router-dom';
import { AdItem } from '../../components';

const Page = () => {
  const api = useApi();
  const history = useHistory();

  const useQueryString = () => {
    return new URLSearchParams(useLocation().search);
  };

  const query = useQueryString();

  const [q, setQ] = useState('');
  const [cat, setCat] = useState('');
  const [state, setState] = useState('');
  const [stateList, setStateList] = useState([]);
  const [categories, setCategories] = useState([]);
  const [adList, setAdList] = useState([]);

  useEffect(() => {
    const queryQ = query.get('q');
    const queryCat = query.get('cat');
    const queryState = query.get('state');
    
    queryQ && setQ(queryQ);
    queryCat && setCat(queryCat);
    queryState && setState(queryState);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const getStates = async () => {
      const stateList = await api.getStates();
      setStateList(stateList);
    };
    setTimeout(() => {
      getStates();
    }, 200);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const getCategories = async () => {
      const stateList = await api.getCategories();
      setCategories(stateList);
    };
    setTimeout(() => {
      getCategories();
    }, 200);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const getRecentAds = async () => {
      const json = await api.getAds({
        sort: 'desc',
        limit: 8,
      });
      setAdList(json.ads);
    };
    setTimeout(() => {
      getRecentAds();
    }, 200);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const queryString = [];
    q && queryString.push(`q=${q}`);
    cat && queryString.push(`cat=${cat}`);
    state && queryString.push(`state=${state}`);

    history.replace({
      search: `?${queryString.join('&')}`,
    });
  }, [history, q, cat, state]);

  return (
    <>
      <PageContainer>
        <PageArea>
          <div className="leftSide">
            <form method="GET">
              <input
                type="text"
                name="q"
                placeholder="O que você procura?"
                value={q}
                onChange={e => setQ(e.target.value)}
              />

              <div className="filterName">Estado:</div>
              <select name="state" value={state} onChange={e => setState(e.target.value)}>
                <option></option>
                {stateList.map((item, key) => (
                  <option key={key} value={item.uf}>{item.uf}</option>
                ))}
              </select>

              <div className="filterName">Categoria:</div>
              <ul>
                {categories.map((item, key) => (
                  <li
                    key={key}
                    className={`categoryItem ${cat === item.slug && 'active'}`}
                    onClick={() => setCat(item.slug)}
                  >
                    <img src={item.img} alt={item.name} />
                    <span>{item.name}</span>
                  </li>
                ))}
              </ul>
            </form>
          </div>
          <div className="rightSide">
            ...
          </div>
        </PageArea>
      </PageContainer>
    </>
  );
};

export default Page;