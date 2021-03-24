import React from 'react'
import './App.css';
import {BrowserRouter} from 'react-router-dom';
import Routes from './Routes';
import {Template, Header, Footer} from './components';

const App = () => {
  return (
    <BrowserRouter>
      <Template>
        <Header />
        <Routes />
        <Footer />
      </Template>
    </BrowserRouter>
  );
};

export default App;
