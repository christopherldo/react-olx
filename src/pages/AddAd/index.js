import React, { useRef, useState, useEffect } from 'react';
import useApi from '../../helpers/OLXApi';
import MaskedInput from 'react-text-mask';
import createNumberMask from 'text-mask-addons/dist/createNumberMask';
import { PageArea } from './style';
import { PageContainer, PageTitle, ErrorMessage } from '../../components';

const Page = () => {
  const api = useApi();

  const fileField = useRef();

  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [categories, setCategories] = useState([]);
  const [price, setPrice] = useState('');
  const [priceNegotiable, setPriceNegotiable] = useState(false)
  const [description, setDescription] = useState('');
  const [disabled, setDisabled] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const getCategories = async () => {
      const categories = await api.getCategories();
      setCategories(categories);
    };
    getCategories();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSubmit = async e => {
    e.preventDefault();
    setError('');

    // if (email && password) {
    // setDisabled(true);
    //   const json = await api.login(email, password);

    //   if (json.error) {
    //     const jsonErrors = [];
    //     for(let err in json.error){
    //       console.log(err.msg);
    //       jsonErrors.push(json.error[err].msg);
    //     };

    //     setError(jsonErrors.join(', '));
    //   } else {
    //     doLogin(json.token, rememberLogin);
    //     window.location.href = '/';
    //     return;
    //   };
    // } else {
    //   setError('Preencha todos os campos.')
    // };

    setDisabled(false);
  };

  const priceMask = createNumberMask({
    prefix: 'R$ ',
    includeThousandsSeparator: true,
    thousandsSeparatorSymbol: '.',
    allowDecimal: true,
    decimalSymbol: ',',
  });

  return (
    <PageContainer>
      <PageTitle>Postar um Anúncio</PageTitle>
      <PageArea>
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <form onSubmit={handleSubmit}>
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
              <select
                disabled={disabled}
                onChange={e => setCategory(e.target.value)}
              >
                <option></option>
                {categories.map((item, key) => (
                  <option key={key} value={item.slug}>{item.name}</option>
                ))}
              </select>
            </div>
          </label>
          <label className="area">
            <div className="area--title">Preço:</div>
            <div className="area--input">
              <MaskedInput
                mask={priceMask}
                placeholder="R$ "
                disabled={disabled || priceNegotiable}
                value={price}
                onChange={e => setPrice(e.target.value)}
              />
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