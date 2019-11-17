import React from 'react';
import './header.scss';

const Header = () => {

  return (
    <header className="header">
      <div className="section">
        <div className="header__container">
          <div className="header__logo-container">
            <img src={require('../../assets/logo/logo.svg')} alt="logo" className="header__logo"/>
            <div className="header__title">Multi-lingual Physios</div>
          </div>
          <nav className="header__menu">
            <ul className="header__ul">
              <li className="header__li">Home</li>
              <li className="header__li">Communication</li>
              <li className="header__li">Documents</li>
              <li className="header__li">Health System</li>
              <li className="header__li">La Trobe ISS</li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
