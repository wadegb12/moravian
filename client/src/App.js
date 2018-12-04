import React, { Component } from 'react'

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import './App.css';

import {Loading} from './Components'

import {
  Landing,
  BookAnEvent,
} from './Pages'

export const UserContext = React.createContext('GUEST')

class App extends Component {

  state = {loading:false}

  render() {

    if(this.state.loading){
      return <Loading />
    }else{
      return (
        <Router>
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/BookAnEvent" component={BookAnEvent} />
          </Switch>
        </Router>
      );
    }
  }
}



export default App;
