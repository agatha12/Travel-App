import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
// import Form from "./pages/itinerary";
import ItinFormContainer from './pages/ItinFormContainer'
import Itinerary from "./pages/itinerary2";
import Calendar from "./pages/calendar/calendar";
import NoMatch from "./pages/nomatch";
import GetFlights from './pages/flights';
import GetAirportWeather from './pages/airportWeather';
import Hotel from './pages/hotel';
import PropTypes from 'prop-types'
import HomeContainer from './pages/Home/Home'
import NavContainer from "./components/NavBar/NavContainer"
import { Provider } from "react-redux";

import TestPage from './pages/testpage'

const App = ({store}) => (

  <Provider store={store}>
    <Router>
    <div>
      <NavContainer/>
      <Switch>
        <Route exact path="/" component={HomeContainer}/>
        <Route exact path="/itinerary" component={ItinFormContainer}/>
        <Route exact path = "/itinerary/:id" component= {Itinerary} />
        <Route exact path = "/calendar/:id" component= {Calendar} />
        <Route exact path = "/getflights" component= {GetFlights} />
        <Route exact path = "/getairportweather" component= {GetAirportWeather} />

        <Route exact path = "/testpage" component= {TestPage} />

        <Route exact path = "/gethotel" component= {Hotel} />
        <Route component={NoMatch} />
    </Switch>
    </div>
    </Router>
  </Provider>
  )

  App.propTypes = {
    store: PropTypes.object.isRequired
  }


export default App;
