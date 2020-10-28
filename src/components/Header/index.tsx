import React from 'react';
import { Link } from 'react-router-dom';
import styles from 'styled-components';

import logo from '../../images/Logo01.png';

const HeaderT = styles.header`
  position: absolute;
  top: 10px;
  left: 20px;

  @media(max-width: 900px) {
    position: static;    
    width: 100%;

    margin-top: 10px;  
    margin-bottom: 30px;
    text-align: center;
  }
`;

const HeaderImg = styles.img`
  width: 30%;
  border-radius: 56px;

  @media(max-width: 900px) {
    width: 20%;
  }
`;

function Header() {
  return (
    <HeaderT>
      <Link to="/">
        <HeaderImg src={logo} alt="e-Recicle" />
      </Link>        
    </HeaderT>
  );
}

export default Header;