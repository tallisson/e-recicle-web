import React from 'react';
import { FiLogIn, FiPlus } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import './styles.css';

import logo from '../../images/Logo.png';
import homeBg from '../../images/home-background.svg';

function Home() {
  return (
    <div id="page-home">
      <div className="content">
        <header>
          <img src={logo} alt="e-Recicle"/>
        </header>

        <main>
          <h1>Seu app para coleta de óleo.</h1>
          <p>Ajudamos você a descartar o óleo de cozinha de forma consciente :)</p>

          <Link to="/login" className="link-primary">
            <span>
              <FiLogIn />
            </span>
            <strong>Fazer Login</strong>
          </Link>

          <Link to="/signup">
            <span>
              <FiPlus />
            </span>
            <strong>Cadastre-se</strong>
          </Link>          
        </main>            
        <div className="image-colect">
          <img src={homeBg} alt="e-Recicle" />    
        </div>
      </div>
    </div>
  );
}

export default Home;