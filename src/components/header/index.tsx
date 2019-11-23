import React from 'react';
import './header.scss';
import {NavLink} from 'react-router-dom';
import routers from "../../routers";

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
              <NavLink to="/"><li className="header__li">Home</li></NavLink>
              {routers.map((item) => (
                <NavLink to={item.route} key={item.name}><li className="header__li">{item.name}</li></NavLink>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
