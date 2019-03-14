import React, { Component } from 'react';
import './NavBar.css';
import PropTypes from 'prop-types'
import ModalContainer from "./modalContainer"
import firebase from "../../utils/firebase"
import { Dropdown, Button, NavItem } from 'react-materialize'




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

  passwordReset = () => {
    firebase.passwordReset(this.state.username)
  }

  _getStateButtons = () => {
    const itinpath = "/itinerary/pass/"+this.props.userName
    if (this.props.userName === "") {
        let path = window.location.pathname
          if (path !== "/"){
             window.location.replace("/")
          }
      return (
        <ul id="nav-mobile" className="right">
        <li id="modalLi"><ModalContainer
          login={this.login}
          signup={this.signup}
          handleInputChange={this.handleInputChange}
          password={this.state.password}
          username={this.state.username}
          currentUser={this.props.userName}
          passwordReset={this.passwordReset}
        ></ModalContainer></li>
        </ul>
      )
    } else {
      return (
      <div  id="drop">
      <Dropdown trigger={
        <Button id="menu">Menu</Button>
      }>
      <NavItem className="navItem" href="/">Home</NavItem>
      <NavItem className="navItem" href="/itinerary">Add Trip</NavItem>
      <NavItem className="navItem" href={`/itinerary/pass/${this.props.userName}`}>View Trips</NavItem>
      {/* <NavItem divider /> */}
      <NavItem className="navItem" href="/getflights"><p className="textP">Flight Search</p></NavItem>
      <NavItem  className="navItem" href="/getairportweather"><p className="textP">Airport Weather</p></NavItem>
      <NavItem  className="navItem" href="/gethotel"><p className="textP">Hotel Search</p></NavItem>
      <NavItem className="navItem" href="/photoAlbum"><p className="textP">Photo Album</p></NavItem>
      <NavItem className="navItem"><button id="logoutButton" onClick={firebase.logout}>Logout</button></NavItem>
    </Dropdown>
    </div>
      
      )
    }

  }

  render() {
    return (
      <div>
        <nav>
          <div className="nav-wrapper">
            <a href="/" className="brand-logo left">Trip Pal</a>

            
             
              {this._getStateButtons()}

            
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