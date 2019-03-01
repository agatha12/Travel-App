import React, { Component } from 'react';
import * as firebase from 'firebase';
import './NavBar.css';
import PropTypes from 'prop-types'
import ModalContainer from "./modalContainer"

let _firebase;

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

    _firebase = firebase.initializeApp(config);
    const auth = _firebase.auth();

    auth.onAuthStateChanged(firebaseUser => {
      if (firebaseUser) {
        console.log(firebaseUser.email)
        this.props.handleChange(firebaseUser.email)
        console.log(this.props.userName)
       // this.buttonChooser()
      }
      else {
        console.log("you are logged out")
        this.props.handleChange("")
        //this.buttonChooser()
      }
    })

  }

  login = event => {
    console.log(this.state.username, this.state.password)
    _firebase.auth().signInWithEmailAndPassword(this.state.username, this.state.password);
    // const loginbutton = document.getElementById('loginbutton')
    // const signupbutton = document.getElementById('signupbutton')
    // const logoutbutton = document.getElementById('logoutbutton')
    // loginbutton.style.display = "none"
    // signupbutton.style.display = "none"
    // logoutbutton.style.display = "inline"
    //_firebase.app().delete()
    //setTimeout(() => { _firebase.app().delete() }, 1000)
  }

  signup = event => {
    //console.log(this.state.username, this.state.password)
    //this.connectFirebase()
    _firebase.auth().createUserWithEmailAndPassword(this.state.username, this.state.password);
    // const loginbutton = document.getElementById('loginbutton')
    // const signupbutton = document.getElementById('signupbutton')
    // const logoutbutton = document.getElementById('logoutbutton')
    // loginbutton.style.display = "none"
    // signupbutton.style.display = "none"
    // logoutbutton.style.display = "inline"
   //_firebase.app().delete() }, 1000)
  }

  logout = () => {
    // this.connectFirebase()
    _firebase.auth().signOut()
    //_firebase.app().delete()
    // const loginbutton = document.getElementById('loginbutton')
    // const signupbutton = document.getElementById('signupbutton')
    // const logoutbutton = document.getElementById('logoutbutton')

    // logoutbutton.style.display = "none"
    // loginbutton.style.display = "inline"
    // signupbutton.style.display = "inline"

    //setTimeout(() => { firebase.app().delete() }, 1000)
  }

  // buttonChooser = () => {
  //   if(this.props.userName !== "" && this.props.userName !== undefined){ 
  //   //  document.getElementById("NavModalButton").innerHTML = ""
  //   //  document.getElementById("buttonLi").innerHTML = <button onClick={this.logout}>Logout</button>
  //   // //  buttonLi.style.display.none
  //    console.log("1"+this.props.userName)
  //   }
  //   else{
  //   //   document.getElementById("buttonLi").innerHTML = ""
  //   // document.getElementById("NavModalButton").innerHTML("Log In") 
  //   //   // modalLi.style.display.none
  //     console.log("2"+this.props.userName)
  //   }
  // }

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
      return <li id="buttonLi"><button onClick={this.logout}>Logout</button></li>
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