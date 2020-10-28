import React, { useState } from 'react';

import Footer from '../../components/Footer';
import Header from '../../components/Header';

import './styles.css';

function Login() {
  const [password, setPassword] = useState('');
  const [whatsapp, setWhatsapp] = useState('');

  function submitData() {   
  }

  return (
    <div className="page-login">
      <Header />
      
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

      <Footer />
    </div>
  );
}

export default Login;