import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { BackTop } from 'antd';
import { HashRouter, Switch, Route } from 'react-router-dom';
import './config/westeros';

import Header from "./components/header";
import Home from './containers/home';
import routers from './routers';
import ScrollToTop from "./components/scroll-top";

const App = () => (
  <HashRouter>
    <Switch>
      <>
        <ScrollToTop />
        <Header/>
        <div className="app">
          <Route exact path="/" component={Home}/>
          {routers.map((item) => {
            if (item.children) {
              return item.children.map((child) => (
                <Route key={child.name} path={child.route} component={child.component}/>
              ))
            } else {
              return (
                <Route key={item.name} path={item.route} component={item.component}/>
              )
            }
          })}
        </div>
        <BackTop className="app__backtop"/>
      </>
    </Switch>
  </HashRouter>
);

ReactDOM.render(<App/>, document.getElementById('root'));
