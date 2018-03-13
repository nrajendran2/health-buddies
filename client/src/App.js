import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css'
import HomeView from './components/HomeView'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import axios from 'axios'
import UserProfilePage from './components/UserProfilePage'


class App extends Component {
  render() {
    return (

      <Router>
      <div className="App">
      <Switch>
      <Route exact path ='/' component = {HomeView}/>
      <Route exact path= '/healthbuddies/:userid' component = {UserProfilePage}/>

       </Switch>

      </div>
      </Router>
    );
  }
}

export default App;
