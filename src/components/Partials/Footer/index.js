import React from 'react'
import {FooterArea} from './style'

const Component = props => {
  return (
    <FooterArea>
      {props.children}
    </FooterArea>
  );
};

export default Component;