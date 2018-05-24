import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom'
import Login from './containers/Login';
import Count from './containers/Count'

import {connect} from 'react-redux';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>  
          <Switch>
            <Route exact path="/" component={Login}/>
            <Route exact path="/counterapp" component={Count}/>
          </Switch>       
        </Router>
      </div>      
    );
  }
}

export default App;
