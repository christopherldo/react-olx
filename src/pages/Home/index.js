import React from 'react'
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <div>Página HOME</div>
      <Link to="/about">Sobre</Link>
    </div>
  );
};

export default Home;