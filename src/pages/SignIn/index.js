import React, { useState } from 'react'
import useApi from '../../helpers/OLXApi';
import { doLogin } from '../../helpers/AuthHandler';
import { PageArea } from './style';
import { PageContainer, PageTitle, ErrorMessage } from '../../components';

const Page = () => {
  const api = useApi();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberLogin, setRememberLogin] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();
    setError('');

    if(email && password){
      setDisabled(true);
      const json = await api.login(email, password);

      if (json.error) {
        setError(json.error);
      } else {
        doLogin(json.token, rememberLogin);
        window.location.href = '/';
        return;
      };
    } else {
      setError('Preencha todos os campos.')
    };

    setDisabled(false);
  };

  return (
    <PageContainer>
      <PageTitle>Login</PageTitle>
      <PageArea>
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <form onSubmit={handleSubmit}>
          <label className="area">
            <div className="area--title">E-mail:</div>
            <div className="area--input">
              <input
                autoFocus
                type="email"
                disabled={disabled}
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
            </div>
          </label>
          <label className="area">
            <div className="area--title">Senha:</div>
            <div className="area--input">
              <input
                type="password"
                disabled={disabled}
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
            </div>
          </label>
          <label className="area">
            <div className="area--title">Lembrar senha?</div>
            <div className="area--input">
              <input
                type="checkbox"
                disabled={disabled}
                checked={rememberLogin}
                onChange={() => setRememberLogin(!rememberLogin)}
              />
            </div>
          </label>
          <label className="area">
            <div className="area--title"></div>
            <div className="area--input">
              <button disabled={disabled}>Fazer Login</button>
            </div>
          </label>
        </form>
      </PageArea>
    </PageContainer>
  );
};

export default Page;