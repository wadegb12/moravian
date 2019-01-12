import React, { Component } from 'react'

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import './App.css';

import {Loading} from './Components'

import {
  Landing,
  GetAQuote,
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
            <Route exact path="/GetAQuote" component={GetAQuote} />
            {/* <Route exact path="/AboutUs" component={AboutUs} /> */}
          </Switch>
        </Router>
      );
    }
  }
}



export default App;
