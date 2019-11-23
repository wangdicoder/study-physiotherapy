import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { HashRouter, Switch, Route } from 'react-router-dom';

import Header from "./components/header";
import Home from './containers/home';
import routers from './routers';

const App = () => (
  <HashRouter>
    <Switch>
      <>
        <Header/>
        <div className="app">
          <Route exact path="/" component={Home}/>
          {routers.map((item) => (
            <Route key={item.name} path={item.route} component={item.component}/>
          ))}
        </div>
      </>
    </Switch>
  </HashRouter>
);

ReactDOM.render(<App/>, document.getElementById('root'));
