import React, { useState, useEffect } from 'react'
import useApi from '../../helpers/OLXApi';
import { PageArea } from './style';
import { PageContainer } from '../../components';
import { useLocation, useHistory } from 'react-router-dom';
import { AdItem } from '../../components';

let timer;

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
  const [adsTotal, setAdsTotal] = useState(0);
  const [pagination, setPagination] = useState([]);
  const [lastPageDisplay, setLastPageDisplay] = useState(false);
  const [nextPageDisplay, setNextPageDisplay] = useState(false);
  const [currentPage, setCurrentPage] = useState(null);
  const [resultOpacity, setResultOpacity] = useState(1);
  const [warningMessage, setWarningMessage] = useState('');
  const [error, setError] = useState(false);

  const getAdsList = async () => {
    setError(false);
    setAdList([]);

    const LIMIT = 1;
    const offset = currentPage ? (currentPage - 1) * LIMIT : 0;

    const json = await api.getAds({
      sort: 'desc',
      limit: LIMIT,
      q,
      cat,
      state,
      offset,
    });
    if (json.error) {
      const jsonErrors = [];
      for (let err in json.error) {
        jsonErrors.push(json.error[err].msg);
      };

      setError(true);
      setWarningMessage(jsonErrors.join(', '));
    } else {
      setAdList(json.ads);
      setAdsTotal(json.total);
      setResultOpacity(1);
      setWarningMessage('');
      setError(false);
    };
  };

  useEffect(() => {
    setAdList([]);
  }, [])

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
    setWarningMessage('Carregando...');
    setPagination([]);

    const queryString = [];
    q && queryString.push(`q=${q}`);
    cat && queryString.push(`cat=${cat}`);
    state && queryString.push(`state=${state}`);

    history.replace({
      search: `?${queryString.join('&')}`,
    });

    if (timer) {
      clearTimeout(timer);
    };

    timer = setTimeout(getAdsList, 500);
    setCurrentPage(1);
    setResultOpacity(0.5);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [q, cat, state, history]);

  useEffect(() => {
    setLastPageDisplay(false);
    setNextPageDisplay(false);

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });

    if (adList.length > 0) {
      const pageCount = (Math.ceil(adsTotal / adList.length));
      const pageCountArray = [];

      if (currentPage === 1) {
        for (let i = 1; i <= pageCount && i <= 3; i++) {
          pageCountArray.push(i);
        };
        setNextPageDisplay(true);
      } else if (currentPage > 1 && currentPage < pageCount) {
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
          pageCountArray.push(i);
        };
        setLastPageDisplay(true);
        setNextPageDisplay(true);
      } else if (currentPage === 2 & pageCount === 2) {
        for (let i = currentPage - 1; i <= currentPage; i++) {
          pageCountArray.push(i);
        };
        setLastPageDisplay(true);
      } else {
        for (let i = currentPage - 2; i <= currentPage; i++) {
          pageCountArray.push(i);
        };
        setLastPageDisplay(true);
      };

      setPagination(pageCountArray);
    } else {
      setPagination([]);
    };
  }, [adsTotal, adList, currentPage]);

  useEffect(() => {
    if(currentPage) {
      setResultOpacity(0.5);
      getAdsList();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage]);

  return (
    <>
      <PageContainer>
        <PageArea
          resultOpacity={resultOpacity}
          lastPageDisplay={lastPageDisplay}
          nextPageDisplay={nextPageDisplay}
        >
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
                <option>Selecione seu estado</option>
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
            {warningMessage && <div className="listWarning">{warningMessage}</div>}
            {error === false &&
              <div className="list">
                {adList.map((item, key) => (
                  <AdItem key={key} data={item}></AdItem>
                ))}
              </div>
            }
            {pagination.length > 1 &&
              <div className="pagination">
                <div onClick={() => lastPageDisplay && setCurrentPage(currentPage - 1)}
                  className='pagItem lastPage'
                >
                  &lt;
                  </div>
                {pagination.map((item, key) => (
                  <div
                    onClick={() => setCurrentPage(item)}
                    className={item === currentPage ? 'pagItem active' : 'pagItem'}
                    key={key}
                  >
                    {item}
                  </div>
                ))}
                <div
                  onClick={() => nextPageDisplay && setCurrentPage(currentPage + 1)}
                  className='pagItem nextPage'
                >
                  &gt;
                </div>
              </div>
            }
          </div>
        </PageArea>
      </PageContainer>
    </>
  );
};

export default Page;