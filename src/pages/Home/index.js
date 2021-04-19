import React, { useState, useEffect } from 'react'
import useApi from '../../helpers/OLXApi';
import { PageArea, SearchArea, Fake } from './style';
import { PageContainer } from '../../components';
import { Link } from 'react-router-dom';
import { AdItem } from '../../components';

const Page = () => {
  const api = useApi();

  const [stateList, setStateList] = useState([]);
  const [categories, setCategories] = useState([]);
  const [adList, setAdList] = useState([]);
  const [loading, setLoading] = useState(true);

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
    const getRecentAds = async () => {
      const json = await api.getAds({
        sort: 'desc',
        limit: 8,
      });
      setAdList(json.ads);
      setLoading(false);
    };
    setTimeout(() => {
      getCategories();
      getRecentAds();
    }, 200)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <SearchArea>
          <div className="searchBox">
            <form method="GET" action="/ads">
              <input type="text" name="q" placeholder="O que você procura?" />
              <select name="state">
                <option></option>
                {stateList.map((item, key) => (
                  <option value={item.uf} key={key}>{item.uf}</option>
                ))}
              </select>
              <button>Pesquisar</button>
            </form>
          </div>
          <div className="categoryList">
            {loading ? <Fake height="70" fillContent/>
            : categories.map((item, key) => (
                <Link key={key} to={`/ads?cat=${item.slug}`} className="categoryItem">
                  <img src={item.img} alt={item.name} />
                  <span>{item.name}</span>
                </Link>
              ))
            }
          </div>
      </SearchArea>
      <PageContainer>
        <PageArea>
          <div className="list">
          {loading ? <Fake height="300" fillContent/>
          : adList.length > 0
            ? adList.map((item, key) => (
                <AdItem key={key} data={item} />
              ))
            : <div className="noAds">
                Parece que nenhum anúncio foi postado ainda...
                <Link to="/post-an-add">Clique aqui para postar o primeiro</Link>
              </div>
          }
          </div>
          <Link to="/ads" className="seeAllLink">Ver todos &gt;&gt;</Link>
          <hr />
          <div className="text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex ducimus minus obcaecati excepturi blanditiis sapiente facere nobis nihil saepe illum eaque omnis iusto debitis, maxime aspernatur quibusdam quos. Explicabo, distinctio!
            Modi, facilis nam. Ea maiores, optio, fugit quasi suscipit temporibus dicta est ratione quia veniam expedita at pariatur? Cum, autem doloremque rem deleniti a eum tenetur iste. Laudantium, ab saepe.
            Iusto quae, architecto dolore excepturi, consectetur natus ab, eaque voluptate eius recusandae itaque aspernatur neque delectus corrupti velit est voluptatibus corporis dolor ad! Porro ea necessitatibus doloribus molestiae omnis?
          </div>
        </PageArea>
      </PageContainer>
    </>
  );
};

export default Page;