import React from 'react'
import { Link } from 'react-router-dom';
import { HeaderArea } from './style'

import {doLogout, isLogged} from '../../../helpers/AuthHandler';

const Component = () => {
  const logged = isLogged();

  const handleLogout = () => {
    doLogout();
    window.location.href = '/';
    return;
  };
  return (
    <HeaderArea>
      <div className="container">
        <div className="logo">
          <Link to="/">
            <span className="logo-1">O</span>
            <span className="logo-2">L</span>
            <span className="logo-3">X</span>
          </Link>
        </div>
        <nav>
          <ul>
            {logged
              ? 
              <>
                <li><Link to="/my-account">Minha Conta</Link></li>
                <li><button onClick={handleLogout}>Sair</button></li>
                <li><Link to="/post-an-add" className="button">Poste um anúncio</Link></li>
              </>
              :
              <>
                <li><Link to="/signin">Login</Link></li>
                <li><Link to="/signup">Cadastre-se</Link></li>
                <li><Link to="/signin" className="button">Poste um anúncio</Link></li>
              </>
            }
          </ul>
        </nav>
      </div>
    </HeaderArea>
  );
};

export default Component;