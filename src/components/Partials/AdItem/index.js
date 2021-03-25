import React from 'react'
import { Link } from 'react-router-dom';
import { AdItem } from './style';

const Component = props => {
  let price = '';

  if (props.data.priceNegotiable) {
    price = 'Preço Negociável';
  } else {
    price = parseFloat(props.data.price).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  };

  return (
    <AdItem className="aditem">
      <Link to={`/ad/${props.data.id}`}>
        <div className="itemImage">
          <img src={props.data.image} alt={props.data.title} />
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