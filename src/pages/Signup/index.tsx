import React from 'react';
import { Link } from 'react-router-dom';
import { FiHeart } from 'react-icons/fi';

import logo from '../../images/Logo01.png';

import './styles.css';


function Signup() {
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
              <input type="text" name="name" placeholder="Seu Nome:" required />
            </div>

            <div className="form-group">
              <label htmlFor="whatsapp">              
                Whatsapp <span className="required">*</span>
              </label>            
              <input type="phone" name="phone" placeholder="Seu Whatsapp" required />
            </div>

            <div className="form-group">
              <label htmlFor="pass">              
                Senha <span className="required">*</span>
              </label>            
              <input type="password" name="pass" placeholder="Sua Senha" required />
            </div>

            <div className="form-group">
              <label htmlFor="confirm-pass">              
                Confirmação de senha <span className="required">*</span>
              </label>            
              <input type="password" name="confirm-pass" placeholder="Confirme sua Senha" required />
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