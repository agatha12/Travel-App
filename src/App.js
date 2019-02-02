import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import LoginForm from './components/Login/login'
import Home from "./components/Home/Home"




class App extends Component {



  render() {
    return (
      <Router>
      <div>
        <Switch>
          <Route exact path="/" component={LoginForm}/>
          <Route exact path="/home" component={Home}/>
      </Switch>
      </div>
      </Router>
    );
  }
}

export default App;
