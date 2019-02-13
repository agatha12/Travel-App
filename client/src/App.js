import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import LoginForm from './components/Login/login';
import Home from "./components/Home/Home";
import Form from "./pages/itinerary";
import Itinerary from "./pages/itinerary2";
import NoMatch from "./pages/nomatch";



class App extends Component {

  render() {
    return (
      <Router>
      <div>
        <Switch>
          <Route exact path="/" component={LoginForm}/>
          <Route exact path="/home" component={Home}/>
          <Route exact path="/itinerary" component={Form}/>
          <Route exact path = "/itinerary/:id" component= {Itinerary} />
          <Route component={NoMatch} />
      </Switch>
      </div>
      </Router>
    );
  }
}

export default App;
