import React, { useRef, useState } from 'react';
import useApi from '../../helpers/OLXApi';
import { doLogin } from '../../helpers/AuthHandler';
import { PageArea } from './style';
import { PageContainer, PageTitle, ErrorMessage } from '../../components';

const Page = () => {
  const api = useApi();

  const fileField = useRef();

  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState('');
  const [priceNegotiable, setPriceNegotiable] = useState(false)
  const [description, setDescription] = useState('');
  const [disabled, setDisabled] = useState(false);
  const [error, setError] = useState('');

  // const handleSubmit = async e => {
  //   e.preventDefault();
  //   setError('');

  //   if (email && password) {
  //     setDisabled(true);
  //     const json = await api.login(email, password);

  //     if (json.error) {
  //       const jsonErrors = [];
  //       for(let err in json.error){
  //         console.log(err.msg);
  //         jsonErrors.push(json.error[err].msg);
  //       };

  //       setError(jsonErrors.join(', '));
  //     } else {
  //       doLogin(json.token, rememberLogin);
  //       window.location.href = '/';
  //       return;
  //     };
  //   } else {
  //     setError('Preencha todos os campos.')
  //   };

  //   setDisabled(false);
  // };

  return (
    <PageContainer>
      <PageTitle>Postar um Anúncio</PageTitle>
      <PageArea>
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <form>
          <label className="area">
            <div className="area--title">Título:</div>
            <div className="area--input">
              <input
                autoFocus
                type="text"
                disabled={disabled}
                value={title}
                onChange={e => setTitle(e.target.value)}
              />
            </div>
          </label>
          <label className="area">
            <div className="area--title">Categoria:</div>
            <div className="area--input">
              <select>
                <option></option>
              </select>
            </div>
          </label>
          <label className="area">
            <div className="area--title">Preço:</div>
            <div className="area--input">
              
            </div>
          </label>
          <label className="area">
            <div className="area--title">Preço negociável?</div>
            <div className="area--input">
              <input
                type="checkbox"
                disabled={disabled}
                checked={priceNegotiable}
                onChange={() => setPriceNegotiable(!priceNegotiable)}
              />
            </div>
          </label>
          <label className="area">
            <div className="area--title">Descrição:</div>
            <div className="area--input">
              <textarea
                disabled={disabled}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </div>
          </label>
          <label className="area">
            <div className="area--title">Imagens (1 ou mais):</div>
            <div className="area--input">
              <input
                type="file"
                disabled={disabled}
                ref={fileField}
                multiple
              />
            </div>
          </label>
          <label className="area">
            <div className="area--title"></div>
            <div className="area--input">
              <button disabled={disabled}>Adicionar anúncio</button>
            </div>
          </label>
        </form>
      </PageArea>
    </PageContainer>
  );
};

export default Page;