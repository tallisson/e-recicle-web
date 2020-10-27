import React from 'react';

import './styles.css';

function Signup() {
  function submitData(event: any) {    
    event.preventDefault();
    console.log(event);
  }

  return (
    <div>
      <header>

      </header>

      <main className="main-signup">
        <form action="">
          <div>
            <label htmlFor="name">
              <input type="text" name="name" placeholder="Digite Seu Nome:" />
            </label>
          </div>

          <div>
            <label htmlFor="whatsapp">
              <input type="phone" name="phone" placeholder="Digite Seu Whatsapp:" />
            </label>            
          </div>

          <button
            onClick={submitData}
          >
            Cadastrar
          </button>
        </form>
      </main>
    </div>
  )
}

export default Signup;