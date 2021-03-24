import React from 'react'
import {PageTitle} from './style'

const Component = props => {
  return (
    <PageTitle>
      {props.children}
    </PageTitle>
  );
};

export default Component;