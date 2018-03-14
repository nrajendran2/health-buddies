import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css'
import HomeView from './components/HomeView'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import axios from 'axios'
import UserProfilePage from './components/UserProfilePage'
import MedicalCondition from './components/MedicalCondition'


class App extends Component {
  render() {


    const MedicalConditionWrapper = (props) => {
      return <UserProfilePage {...props}/>
    }

    // const StocksViewWrapper = (props) => {
    //   return <StockView stocks={this.state.stocks} {...props}/>
    // }





    return (

      <Router>
      <div className="App">
      <Switch>
      <Route exact path ='/' component = {HomeView}/>
      <Route exact path= '/healthbuddies/:userid' render = {MedicalConditionWrapper}/>

       </Switch>

      </div>
      </Router>
    );
  }
}

export default App;
