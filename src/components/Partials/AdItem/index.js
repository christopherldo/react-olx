import React from 'react'
import { AdItem } from './style';

const Component = props => {
  return (
    <AdItem>
      {props.data.title}
    </AdItem>
  );
};

export default Component;