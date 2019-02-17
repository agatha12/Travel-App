import React, { Component } from 'react';
import * as firebase from 'firebase';
import './NavBar.css';
import PropTypes from 'prop-types'
import Example from "./modal"


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
    var config = {
      apiKey: "AIzaSyA4AhVPBIoyLljkMj4cAo0hNkD2vpoKtMs",
      authDomain: "travel-app-10c33.firebaseapp.com",
      databaseURL: "https://travel-app-10c33.firebaseio.com",
      projectId: "travel-app-10c33",
      storageBucket: "travel-app-10c33.appspot.com",
      messagingSenderId: "78857878836"
    };

    firebase.initializeApp(config);

    setTimeout(() => {
      var user = firebase.auth().currentUser
      if (user !== null) { this.props.handleChange(user.email) }
    }
      , 500)
    setTimeout(() => { firebase.app().delete() }, 800)

  }

  connectFirebase = () => {
    var config = {
      apiKey: "AIzaSyA4AhVPBIoyLljkMj4cAo0hNkD2vpoKtMs",
      authDomain: "travel-app-10c33.firebaseapp.com",
      databaseURL: "https://travel-app-10c33.firebaseio.com",
      projectId: "travel-app-10c33",
      storageBucket: "travel-app-10c33.appspot.com",
      messagingSenderId: "78857878836"
    };

    firebase.initializeApp(config);
    const auth = firebase.auth();

    auth.onAuthStateChanged(firebaseUser => {
      if (firebaseUser) {
        console.log(firebaseUser.email)
        this.props.handleChange(firebaseUser.email)
        console.log(this.props.userName)
      }
      else {
        console.log("you are logged out")
        this.props.handleChange("")

      }
    })
  }


  login = event => {
    console.log(this.state.username, this.state.password)
    this.connectFirebase()
    firebase.auth().signInWithEmailAndPassword(this.state.username, this.state.password);
    const loginbutton = document.getElementById('loginbutton')
    const signupbutton = document.getElementById('signupbutton')
    const logoutbutton = document.getElementById('logoutbutton')
    loginbutton.style.display = "none"
    signupbutton.style.display = "none"
    logoutbutton.style.display = "inline"
    setTimeout(() => { firebase.app().delete() }, 1000)
  }

  signup = event => {
    console.log(this.state.username, this.state.password)
    this.connectFirebase()
    firebase.auth().createUserWithEmailAndPassword(this.state.username, this.state.password);
    const loginbutton = document.getElementById('loginbutton')
    const signupbutton = document.getElementById('signupbutton')
    const logoutbutton = document.getElementById('logoutbutton')
    loginbutton.style.display = "none"
    signupbutton.style.display = "none"
    logoutbutton.style.display = "inline"
    setTimeout(() => { firebase.app().delete() }, 1000)
  }

  logout = () => {
    this.connectFirebase()
    firebase.auth().signOut()
    const loginbutton = document.getElementById('loginbutton')
    const signupbutton = document.getElementById('signupbutton')
    const logoutbutton = document.getElementById('logoutbutton')

    logoutbutton.style.display = "none"
    loginbutton.style.display = "inline"
    signupbutton.style.display = "inline"

    setTimeout(() => { firebase.app().delete() }, 1000)
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
              <li><Example
                logout={this.logout}
                login={this.login}
                signup={this.signup}
                handleInputChange={this.handleInputChange}
                password={this.state.password}
                username={this.state.username}
              ></Example></li>
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