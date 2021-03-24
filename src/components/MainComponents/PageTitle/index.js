import React from 'react'
import {PageBody} from './style'

const Component = props => {
  return (
    <PageBody>
      {props.children}
    </PageBody>
  );
};

export default Component;