import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiHeart } from 'react-icons/fi';
import Switch from 'react-input-switch';

import logo from '../../images/Logo01.png';

import './styles.css';

function Signup() {
  const [isCollector, enableCollector] = useState(true);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  function submitData(event: any) {    
    event.preventDefault();
    console.log(event);
  }
  
  return (
    <>
      <div className="page-signup">
        <header>
          <Link to="/">
            <img src={logo} alt="e-Recicle" />
          </Link>        
        </header>
        <main>
          <div className="header-main">
            <p>Junte-se ao e-Recicle</p>
            <h1>Crie sua conta</h1>
          </div>
          <form action="" method="POST">
            <div className="form-group">
              <label htmlFor="name">
                Nome <span className="required">*</span>
              </label>
              <input 
                type="text" 
                name="name" 
                placeholder="Seu Nome" 
                required
                value={name}
                onChange={event => () => {
                  setName(event.target.value);
                }}
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">
                E-mail <span className="required">*</span>
              </label>
              <input 
                type="email" 
                name="email" 
                placeholder="Seu Email" 
                required
                value={email}
                onChange={event => () => {
                  setEmail(event.target.value);
                }}
              />
            </div>

            <div className="form-group">
              <label htmlFor="whatsapp">              
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

            <div className="form-group">
              <label htmlFor="confirm-pass">              
                Confirmação de senha <span className="required">*</span>
              </label>            
              <input 
                type="password" 
                name="confirm-pass" 
                placeholder="Confirme sua Senha" 
                required 
                value={confirmPassword}
                onChange={event => () => {
                  setConfirmPassword(event.target.value);
                }}
              />
            </div>

            <div className="form-group form-switch">
              <label htmlFor="is-collector">              
                Deseja reciclar óleo <span className="required">*</span>
              </label>
              <span className="span-switch">
                <Switch 
                  on={true} 
                  off={false} 
                  value={isCollector}
                  onChange={enableCollector}
                  name="is-collector"
                />
              </span>
            </div>

            <button
              onClick={submitData}
              className="btn-submit"
            >
              Cadastrar
            </button>
          </form>
        </main>

        <footer>
          <span>IFMA-BdC <i><FiHeart /></i> 2020</span>
        </footer>
      </div>
    </>
  )
}

export default Signup;