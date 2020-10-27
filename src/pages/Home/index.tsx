import React from 'react';
import { FiLogIn } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import './styles.css';

import logo from '../../images/logo.jpeg';
import coleta from '../../images/coleta.jpeg';

function Home() {
  return (
    <div id="page-home">
      <div className="content">
        <header>
          <img src={logo} alt="e-Recicle" />
        </header>

        <main>
          <h1>Seu app para coleta de óleo.</h1>
          <p>Ajudamos você a descartar o óleo de cozinha de forma consciente :)</p>

          <Link to="/signup">
            <span>
              <FiLogIn />
            </span>
            <strong>Cadastre-se</strong>
          </Link>          
        </main>            
        <div className="image-colect">
          <img src={coleta} alt="e-Recicle" />    
        </div>
      </div>
    </div>
  );
}

export default Home;