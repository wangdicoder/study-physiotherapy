import React from 'react';
import './header.scss';
import { Dropdown, Menu } from 'antd';
import { NavLink, Link } from 'react-router-dom';
import routers from "../../routers";

const Header = () => {

  return (
    <header className="header">
      <div className="section">
        <div className="header__container">
          <div className="header__logo-container">
            <Link to="/">
              <img src={require('../../assets/logo/logo.svg')} alt="logo" className="header__logo"/>
            </Link>
            <Link to="/">
              <div className="header__title">Multi-lingual Physios</div>
            </Link>
          </div>
          <nav className="header__menu">
            <ul className="header__ul">
              <NavLink to="/">
                <li className="header__li">Home</li>
              </NavLink>
              {routers.map((item) => {
                if (!item.children) {
                  return (
                    <NavLink to={item.route} key={item.name}>
                      <li className="header__li">{item.name}</li>
                    </NavLink>
                  )
                } else {
                  return (
                    <Dropdown key={item.name} overlay={() => (
                      <Menu>
                        {item.children.map((child: any) => (
                          <Menu.Item key={child.name}>
                            <NavLink to={child.route}>{child.name}</NavLink>
                          </Menu.Item>
                        ))}
                      </Menu>
                    )}>
                      <li className="header__li">{item.name}</li>
                    </Dropdown>
                  )
                }
              })}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
