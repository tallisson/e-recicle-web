import React from 'react';
import styles from 'styled-components';
import { FiHeart } from 'react-icons/fi';

const FooterT = styles.footer` 
  font-size: 14px;
  margin-bottom: 4px;
  margin-top: 8px;
`;

const FooterContent = styles.span`
`;

const I = styles.i`
  color: red;
`;

function Footer() {
  return (
    <FooterT>
      <FooterContent>
        IFMA-BdC <I><FiHeart /></I> 2020
      </FooterContent>
    </FooterT>
  );
}

export default Footer;