import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { HashRouter, Switch, Route } from 'react-router-dom';

import Header from "./components/header";
import Home from './containers/home';
import Document from './containers/document';
import Community from './containers/communication';
import Health from './containers/health';
import University from './containers/university';

const App = () => (
  <HashRouter>
    <Switch>
      <div>
        <Header/>
        <Route exact path="/" component={Home}/>
        <Route path="/communication" component={Community}/>
        <Route path="/documents" component={Document}/>
        <Route path="/health-system" component={Health}/>
        <Route path="/la-trobe" component={University}/>
      </div>
    </Switch>
  </HashRouter>
);

ReactDOM.render(<App/>, document.getElementById('root'));
