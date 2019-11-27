import React, { useState } from 'react';
import './header.scss';
import { Dropdown, Menu, Drawer, Icon } from 'antd';
import { NavLink, Link } from 'react-router-dom';
import routers from "../../routers";

const { SubMenu } = Menu;

const Header = () => {
  const [drawerVisible, setDrawerVisible] = useState(false);

  return (
    <header className="header">
      <div className="section">
        <div className="header__container">
          <div className="header__logo-container">
            <Link to="/">
              <img src={require('../../assets/logo/logo.svg')} alt="logo" className="header__logo"/>
            </Link>
            <Link to="/">
              <div className="header__title">Studying Physiotherapy</div>
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
          <Icon type="menu" className="header__menu-icon" onClick={() => setDrawerVisible(true)}/>
          <Drawer
            width="300"
            onClose={() => setDrawerVisible(false)}
            visible={drawerVisible}>
            <Menu mode="inline" style={{ borderRight: 0, paddingTop: 30 }}>
              <Menu.Item onClick={() => setDrawerVisible(false)}>
                <NavLink to="/">Home
                </NavLink>
              </Menu.Item>
              {routers.map((item) => {
                if (!item.children) {
                  return (
                    <Menu.Item key={item.name} onClick={() => setDrawerVisible(false)}>
                      <NavLink to={item.route}>
                        {item.name}
                      </NavLink>
                    </Menu.Item>
                  )
                } else {
                  return (
                    <SubMenu key={item.name} title={item.name}>
                      {item.children.map((child: any) => (
                        <Menu.Item key={child.name} onClick={() => setDrawerVisible(false)}>
                          <NavLink to={child.route}>{child.name}</NavLink>
                        </Menu.Item>
                      ))}
                    </SubMenu>
                  )
                }
              })}
            </Menu>
          </Drawer>
        </div>
      </div>
    </header>
  );
};

export default Header;
