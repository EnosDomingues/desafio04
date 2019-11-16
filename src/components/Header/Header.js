import React from 'react';
import './Header.css';
import logo from '../../assets/facebook-1.png';

function Header() {
  return (
    <header id="main-header">
      <div className="content">
        <img src={logo} />
        <div id="side">
           <a>
             <strong>
              Meu perfil
             </strong>
           </a>
        </div>
      </div>
    </header>
  );
}

export default Header;