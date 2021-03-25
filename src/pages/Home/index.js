import React, { useState, useEffect } from 'react'
import useApi from '../../helpers/OLXApi';
import { PageArea, SearchArea } from './style';
import { PageContainer } from '../../components';
import { Link } from 'react-router-dom';

const Page = () => {
  const api = useApi();

  const [stateList, setStateList] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getStates = async () => {
      const stateList = await api.getStates();
      setStateList(stateList);
    };
    getStates();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const getCategories = async () => {
      const stateList = await api.getCategories();
      setCategories(stateList);
    };
    getCategories();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <SearchArea>
        <PageContainer>
          <div className="searchBox">
            <form method="GET" action="/ads">
              <input type="text" name="q" placeholder="O que você procura?" />
              <select name="state">
                <option></option>
                {stateList.map((item, key) => (
                  <option value={item.name} key={key}>{item.name}</option>
                ))}
              </select>
              <button>Pesquisar</button>
            </form>
          </div>
          <div className="categoryList">
            {categories.map((item, key) => (
              <Link key={key} to={`/ads?cat=${item.slug}`} className="categoryItem">
                <img src={item.img} alt={item.name} />
                <span>{item.name}</span>
              </Link>
            ))}
          </div>
        </PageContainer>
      </SearchArea>

      <PageContainer>
        <PageArea>

        </PageArea>
      </PageContainer>
    </>
  );
};

export default Page;