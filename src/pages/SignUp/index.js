import React, { useState, useEffect } from 'react'
import useApi from '../../helpers/OLXApi';
import { doLogin } from '../../helpers/AuthHandler';
import { PageArea } from './style';
import { PageContainer, PageTitle, ErrorMessage } from '../../components';

const Page = () => {
  const api = useApi();

  const [name, setName] = useState('');
  const [stateLoc, setStateLoc] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password_confirmation, setPassword_confirmation] = useState('');
  const [disabled, setDisabled] = useState(false);
  const [error, setError] = useState('');
  const [stateList, setStateList] = useState([]);

  useEffect(() => {
    const getStates = async () => {
      const stateList = await api.getStates();
      setStateList(stateList);
    };
    getStates();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSubmit = async e => {
    setError('');
    e.preventDefault();

    if (name && stateLoc && email && password && password_confirmation) {
      setDisabled(true);
      const json = await api.login(email, password);

      if (json.error) {
        setError(json.error);
      } else {
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
      <PageTitle>Cadastro</PageTitle>
      <PageArea>
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <form onSubmit={handleSubmit}>
          <label className="area">
            <div className="area--title">Nome Completo:</div>
            <div className="area--input">
              <input
                autoFocus
                type="text"
                disabled={disabled}
                value={name}
                onChange={e => setName(e.target.value)}
              />
            </div>
          </label>
          <label className="area">
            <div className="area--title">Estado:</div>
            <div className="area--input">
              <select
                value={stateLoc}
                onChange={e => setStateLoc(e.target.value)}
                disabled={disabled}
              >
                <option></option>
                {stateList && stateList.map((item, key) => (
                  <option value={item.id} key={key}>{item.name}</option>
                ))}
              </select>
            </div>
          </label>
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
            <div className="area--title">Confirmar Senha:</div>
            <div className="area--input">
              <input
                type="password"
                disabled={disabled}
                value={password_confirmation}
                onChange={e => setPassword_confirmation(e.target.value)}
              />
            </div>
          </label>
          <label className="area">
            <div className="area--title"></div>
            <div className="area--input">
              <button disabled={disabled}>Fazer cadastro</button>
            </div>
          </label>
        </form>
      </PageArea>
    </PageContainer>
  );
};

export default Page;