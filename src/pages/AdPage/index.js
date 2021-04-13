import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import { Link } from 'react-router-dom';
import useApi from '../../helpers/OLXApi';
import { BreadCrumb, PageArea, Fake, AdImage, OthersArea } from './style';
import { PageContainer, AdItem, ErrorMessage } from '../../components';

const Page = () => {
  const api = useApi();
  const { id } = useParams();

  const [loading, setLoading] = useState(true);
  const [adInfo, setAdInfo] = useState({});
  const [error, setError] = useState('');

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
    setLoading(true);
    const getAdInfo = async id => {
      const getOtherAds = true;
      const json = await api.getAd(id, getOtherAds);

      if (json.error) {
        const jsonErrors = [];
        for (let err in json.error) {
          console.log(err.msg);
          jsonErrors.push(json.error[err].msg);
        };

        setError(jsonErrors.join(', '));
      };

      setAdInfo(json);
      setLoading(false);
    };
    setTimeout(() => {
      getAdInfo(id);
    }, 200);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id])

  const formatDate = date => {
    const currentDate = new Date(date);

    const months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
      'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro',
    ];

    let currentDay = currentDate.getDate();
    const currentMotnh = currentDate.getMonth();
    const currentYear = currentDate.getFullYear();

    currentDay = currentDay < 10 ? '0' + currentDay : currentDay;

    return `${currentDay} de ${months[currentMotnh]} de ${currentYear}`;
  };

  const formatPrice = price => {
    return parseFloat(price).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  };

  return (
    <PageContainer>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      {error === '' &&
        <>
          <BreadCrumb>
            <div className="box">
              {loading
                ? <Fake height={18} />
                :
                <>
                  Você está aqui:
               <Link to="/">Home</Link>
               &gt;
               <Link to={`/ads?state=${adInfo.user_info.state}`}>
                    {adInfo.user_info.state}
                  </Link>
               &gt;
               <Link to={`/ads?state=${adInfo.user_info.state}&cat=${adInfo.category.slug}`}>
                    {adInfo.category.name}
                  </Link>
               &gt; {adInfo.title}
                </>
              }
            </div>
          </BreadCrumb>

          <PageArea>
            <div className="leftSide">
              <div className="box">
                <div className="adImage">
                  {loading
                    ? <Fake height={320} />
                    : adInfo.images && <Slide>{adInfo.images.map((item, key) => (
                      <div key={key} className="each-slide">
                        <AdImage background={item} />
                      </div>
                    ))}</Slide>
                  }
                </div>
                <div className="adInfo">
                  <div className="adName">
                    {loading
                      ? <Fake height={55} />
                      :
                      <>
                        <h2>{adInfo.title}</h2>
                        <small>Criado em: {formatDate(adInfo.date_created)}</small>
                      </>
                    }
                  </div>
                  <div className="adDescription">
                    {loading
                      ?
                      <Fake height={100} fillContent />
                      :
                      <>
                        <div className="adDescriptionContent">
                          {adInfo.description}
                        </div>
                        <div className="adDescriptionContentBottom">
                          <hr />
                          <small>Visualizações: {adInfo.views}</small>
                        </div>
                      </>
                    }
                  </div>
                </div>
              </div>
            </div>
            <div className="rightSide">
              <div className="box box--padding">
                {loading
                  ? <Fake height={59} />
                  : adInfo.price_negotiable
                    ? "Preço negociável"
                    :
                    <div className="price">
                      Preço: <span>{formatPrice(adInfo.price)}</span>
                    </div>
                }
              </div>
              {loading
                ? <div className="box-blue box box--padding">
                  <Fake height={15} />
                </div>
                : <a
                  href={`mailto:${adInfo.user_info.email}`}
                  target="_blank"
                  rel="noreferrer"
                  className="contactSellerLink"
                >Fale com o vendedor</a>
              }
              <div className="createdBy box box--padding">
                {loading
                  ? <Fake height={102} />
                  :
                  <>
                    Criado por:
                 <strong>{adInfo.user_info.name}</strong>
                    <small>E-mail: {adInfo.user_info.email}</small>
                    <small>Estado: {adInfo.user_info.state}</small>
                  </>
                }
              </div>
            </div>
          </PageArea>

          <OthersArea>
            {loading
              ? <Fake height={300} />
              : adInfo.others &&
              <>
                <h2>Outras ofertas do vendedor</h2>
                <div className="list">
                  {adInfo.others.map((item, key) => (
                    <AdItem key={key} data={item} />
                  ))}
                </div>
              </>
            }
          </OthersArea>
        </>
      }
    </PageContainer>
  );
};

export default Page;