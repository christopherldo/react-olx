import React from 'react'
import { Link } from 'react-router-dom';
import { AdItem, AdImage } from './style';

const Component = props => {
  let price = '';

  if (props.data.price_negotiable) {
    price = 'Preço Negociável';
  } else {
    price = parseFloat(props.data.price).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  };

  return (
    <AdItem className="aditem">
      <Link to={`/ad/${props.data.public_id}`}>
        <div className="itemImage">
          <AdImage defaultImage={props.data.image}/>
        </div>
        <div className="itemName">
          {props.data.title}
        </div>
        <div className="itemPrice">{price}</div>
      </Link>
    </AdItem>
  );
};

export default Component;