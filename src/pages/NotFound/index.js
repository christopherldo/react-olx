import React from 'react'
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div>
      <div>Página não encontrada</div>
      <Link to="/">Voltar para a HOME</Link>
    </div>
  );
};

export default NotFound;