import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css'
import HomeView from './components/HomeView'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import axios from 'axios'
import UserProfilePage from './components/UserProfilePage'
import MedicalCondition from './components/MedicalCondition'
import {injectGlobal} from 'styled-components'


injectGlobal`
@import url('https://fonts.googleapis.com/css?family=Permanent+Marker|Sorts+Mill+Goudy');
@import url('https://fonts.googleapis.com/css?family=Lobster');
<style>
@import url('https://fonts.googleapis.com/css?family=Quicksand');
</style>
`



class App extends Component {
  render() {


    const MedicalConditionWrapper = (props) => {
      return <UserProfilePage {...props}/>
    }

   const EditPageWrapper = (props) => {
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
      <Route exact path ='/healthbuddies/:userid/' render = {HomeView}/>

       </Switch>

      </div>
      </Router>
    );
  }
}

export default App;
