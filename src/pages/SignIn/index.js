import React from 'react'
import { PageArea } from './style';
import { PageContainer, PageTitle } from '../../components';

const Page = () => {
  return (
    <PageContainer>
      <PageTitle>Login</PageTitle>
      <PageArea>
        <form>
          <label className="area">
            <div className="area--title">E-mail:</div>
            <div className="area--input">
              <input autoFocus type="email"/>
            </div>
          </label>
          <label className="area">
            <div className="area--title">Senha:</div>
            <div className="area--input">
              <input type="password"/>
            </div>
          </label>
          <label className="area">
            <div className="area--title">Lembrar senha?</div>
            <div className="area--input">
              <input type="checkbox"/>
            </div>
          </label>
          <label className="area">
            <div className="area--title"></div>
            <div className="area--input">
              <button>Fazer Login</button>
            </div>
          </label>
        </form>
      </PageArea>
    </PageContainer>
  );
};

export default Page;