import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useApi from '../../helpers/OLXApi';
import { PageArea, Fake } from './style';
import { PageContainer } from '../../components';

const Page = () => {
  const api = useApi();
  const { id } = useParams();

  const [loading, setLoading] = useState(true);
  const [adInfo, setAdInfo] = useState({});

  useEffect(() => {
    const getAdInfo = async id => {
      const getOtherAds = true;
      const json = await api.getAd(id, getOtherAds);
      setAdInfo(json);
      setLoading(false);
    };
    setTimeout(() => {
      getAdInfo(id);
    }, 1000);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

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

  return (
    <PageContainer>
      <PageArea>
        <div className="leftSide">
          <div className="box">
            <div className="adImage">
              {loading && <Fake height={300} />}
            </div>
            <div className="adInfo">
              <div className="adName">
                {loading
                ? <Fake height={40} />
                : <>
                    <h2>{adInfo.title}</h2>
                    <small>Criado em: {formatDate(adInfo.dateCreated)}</small>
                  </>
                }
              </div>
              <div className="adDescription">
                {loading
                ? 
                  <Fake height={100} />
                : <>
                  {adInfo.description}
                  <hr/>
                  <small>Visualizações: {adInfo.views}</small>
                </>
                }
              </div>
            </div>
          </div>
        </div>
        <div className="rightSide">
          <div className="box box--padding">
            {loading && <Fake height={30} />}
          </div>
          <div className="box box--padding">
            {loading && <Fake height={100} />}
          </div>
        </div>
      </PageArea>
    </PageContainer>
  );
};

export default Page;