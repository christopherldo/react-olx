import React from 'react'
import { Link } from 'react-router-dom';

const Page = () => {
  return (
    <div>
      <div>Página HOME</div>
      <Link to="/about">Sobre</Link>
    </div>
  );
};

export default Page;