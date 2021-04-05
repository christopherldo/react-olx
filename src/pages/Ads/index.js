import React, { useState, useEffect } from 'react'
import useApi from '../../helpers/OLXApi';
import { PageArea } from './style';
import { PageContainer } from '../../components';
import { Link } from 'react-router-dom';
import { AdItem } from '../../components';

const Page = () => {
  const api = useApi();

  const [stateList, setStateList] = useState([]);
  const [categories, setCategories] = useState([]);
  const [adList, setAdList] = useState([]);

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

  return (
    <>
      <PageContainer>
        <PageArea>
          <div className="leftSide">
            <form method="GET">
              <input type="text" name="q" />

              <div className="filterName">Estado:</div>
              <select name="state">
                <option></option>
                {stateList.map((item, key) => (
                  <option key={key} value={item.uf}>{item.uf}</option>
                ))}
              </select>

              <div className="filterName">Categoria:</div>
              <ul>
                {categories.map((item, key) => (
                  <li key={key} className="categoryItem">
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