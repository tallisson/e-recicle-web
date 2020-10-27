import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import logo from '../../images/Logo01.png';
import { FiHeart } from 'react-icons/fi';

function Login() {
  const [password, setPassword] = useState('');
  const [whatsapp, setWhatsapp] = useState('');

  function submitData() {   
  }

  return (
    <div className="page-signup">
      <header>
        <Link to="/">
          <img src={logo} alt="e-Recicle" />
        </Link>        
      </header>
      <main>
        <div className="header-main">
          <p>e-Recicle</p>
          <h1>Acesse sua conta</h1>
        </div>
        <form action="" method="POST">
          <div className="form-group">
            <label htmlFor="name">
              Whatsapp <span className="required">*</span>
            </label>
            <input 
              type="phone" 
              name="phone" 
              placeholder="Seu Whatsapp" 
              required
              value={whatsapp}
              onChange={event => () => {
                setWhatsapp(event.target.value);
              }}
            />
          </div>

          <div className="form-group">
            <label htmlFor="pass">              
              Senha <span className="required">*</span>
            </label>            
            <input 
              type="password" 
              name="pass" 
              placeholder="Sua Senha" 
              required 
              value={password}
              onChange={event => () => {
                setPassword(event.target.value);
              }}
            />
          </div>

          <button
            onClick={submitData}
            className="btn-submit"
          >
            Fazer Login
          </button>
        </form>
      </main>

      <footer>
        <span>IFMA-BdC <i><FiHeart /></i> 2020</span>
      </footer>
    </div>
  );
}

export default Login;