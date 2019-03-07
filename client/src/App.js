import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
// import Form from "./pages/itinerary";
import Update from "./pages/itineraryUpdate";
import ItinFormContainer from './pages/ItinFormContainer'
import Itinerary from "./pages/itinerary2";
import NoMatch from "./pages/nomatch";
import GetFlights from './pages/flights';
import GetAirportWeather from './pages/airportWeather';
import Hotel from './pages/hotel';
import PropTypes from 'prop-types'
import HomeContainer from './pages/Home/Home'
import NavContainer from "./components/NavBar/NavContainer"
import PhotoAlbumContainer from './pages/photoAlbum'
import { Provider } from "react-redux";
import { NewFooter } from "./components/Footer"
import testpage from "./pages/testpage"

const App = ({ store }) => (
  <Provider store={store}>
    <Router>
      <div>
        <div>
          <NavContainer />
          <Switch>
            <Route exact path="/" component={HomeContainer} />
            <Route exact path="/itinerary" component={ItinFormContainer} />
            <Route exact path="/itinerary/:id" component={Update} />
            <Route exact path="/itinerary/pass/:id" component={Itinerary} />
            <Route exact path="/getflights" component={GetFlights} />
            <Route exact path="/getairportweather" component={GetAirportWeather} />
            <Route exact path="/gethotel" component={Hotel} />
            <Route exact path="/photoAlbum" component={PhotoAlbumContainer} />
            <Route component={NoMatch} />
          </Switch>
        </div>
        <div className="App Site">
          </div>
        <div className="Site-content">
          <NewFooter />
        </div>
      </div>
    </Router>
  </Provider>
)

App.propTypes = {
  store: PropTypes.object.isRequired
}


export default App;