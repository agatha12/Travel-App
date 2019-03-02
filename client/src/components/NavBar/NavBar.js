import React, { Component } from 'react';
import './NavBar.css';
import PropTypes from 'prop-types'
import ModalContainer from "./modalContainer"
import firebase from "../../utils/firebase"




class NavBar extends Component {

  constructor() {
    super();
    this.state = {
      username: "",
      password: ""
    }
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  componentDidMount = () => {

    firebase.mount(this.props.handleChange)


  }

  login = () => {
    firebase.login(this.state.username, this.state.password)
  }
  
  signup = () => {
    firebase.signup(this.state.username, this.state.password)
  }

  _getStateButtons = () => {
    if (this.props.userName === "") {
      return (
        <li id="modalLi"><ModalContainer
          login={this.login}
          signup={this.signup}
          handleInputChange={this.handleInputChange}
          password={this.state.password}
          username={this.state.username}
          currentUser={this.props.userName}
        ></ModalContainer></li>
      )
    } else {
      return <li id="buttonLi"><button onClick={firebase.logout}>Logout</button></li>
    }

  }

  render() {
    return (
      <div>
        <nav>
          <div className="nav-wrapper">
            <a href="/" className="brand-logo hide-on-med-and-down">Travel App</a>

            <ul id="nav-mobile" className="right">
              <li><a href="/">Home</a></li>
              <li><a href="/itinerary">Itinerary</a></li>
              <li><a href="/getflights">Flight Search</a></li>
              <li><a href="/getairportweather">Airport Weather</a></li>
              {this._getStateButtons()}

            </ul>
          </div>
        </nav>


      </div>

    );
  }

}

NavBar.props = {
  handleChange: PropTypes.func,
  userName: PropTypes.String
}
export default NavBar