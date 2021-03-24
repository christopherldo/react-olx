import React from 'react'
import {PageContainer} from './style'

const Component = props => {
  return (
    <PageContainer>
      {props.children}
    </PageContainer>
  );
};

export default Component;