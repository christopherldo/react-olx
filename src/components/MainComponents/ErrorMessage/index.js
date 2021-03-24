import React from 'react'
import {ErrorMessage} from './style'

const Component = props => {
  return (
    <ErrorMessage>
      {props.children}
    </ErrorMessage>
  );
};

export default Component;