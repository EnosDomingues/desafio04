import React from 'react';
import './Header.css';
import logo from '../../assets/facebook-1.png';
import userSVG from '../../assets/profile-user.svg';
import SVG from 'react-inlinesvg';


function Header() {
  return (
    <header id="main-header">
      <div className="content">
        <img src={logo} />
        <div id="side">
           <a>
             <strong className="str">
              Meu perfil
              <SVG src={userSVG} className="profile-svg"/>
             </strong>
           </a>
        </div>
      </div>
    </header>
  );
}

export default Header;