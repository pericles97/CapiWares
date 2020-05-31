import React from 'react';
import {  BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Prontuario from './Prontuario';
import Login from './Login';
import Blockchain from './Blockchain';
import Detalhes from './Detalhes';

export default function Routes() {
    return (
    <Router>
        <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/prontuario/:token" component={Prontuario} />
            <Route path="/blockchain" component={Blockchain} />
            <Route path="/detalhes" component={Detalhes} />
        </Switch>    
    </Router>
  );
}
