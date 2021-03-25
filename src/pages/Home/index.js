import React, { useState } from 'react'
import useApi from '../../helpers/OLXApi';
import { PageArea, SearchArea } from './style';
import { PageContainer } from '../../components';

const Page = () => {
  const api = useApi();

  return (
    <>
      <SearchArea>
        <PageContainer>
          <div className="searchBox">
            <form method="GET" action="/ads">
              <input type="text" name="q" placeholder="O que você procura?" />
              <select name="state">

              </select>
              <button>Pesquisar</button>
            </form>
          </div>
          <div className="categoryList">

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