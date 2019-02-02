import React, { Component } from 'react';
import * as firebase from 'firebase';
import './style.css';


class LoginForm extends Component {

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
        const auth = firebase.auth();
        const loginbutton = document.getElementById('loginbutton')
        const signupbutton = document.getElementById('signupbutton')
        const logoutbutton = document.getElementById('logoutbutton')

        signupbutton.addEventListener("click", event =>{
            console.log(this.state.username, this.state.password)
            auth.createUserWithEmailAndPassword(this.state.username, this.state.password);
        
        })
        
        loginbutton.addEventListener("click", event =>{
            console.log(this.state.username, this.state.password)
            auth.signInWithEmailAndPassword(this.state.username, this.state.password);
        
        })
        logoutbutton.addEventListener("click", event => {
            firebase.auth().signOut()
        })
        firebase.auth().onAuthStateChanged(firebaseUser => {
            if(firebaseUser){
                console.log(firebaseUser.email)
                loginbutton.style.display="none"
                signupbutton.style.display="none"
                logoutbutton.style.display="inline"
            }
            else{
                console.log("you are logged out")
                logoutbutton.style.display="none"
                loginbutton.style.display="inline"
                signupbutton.style.display="inline"
            }
        })
    }


    render() {
        return (
            <div id="logindiv">
            <h1>Travel App</h1>
            <h4>Sign In</h4>
                <input onChange={this.handleInputChange} name="username" id="username" placeholder="username" value={this.state.username}></input><br></br>
                <input onChange={this.handleInputChange} name="password" type="text" id="password" placeholder="password" value={this.state.password}></input><br></br>
                <button className="btn btn-action" id="loginbutton">Log In</button>
                <button className="btn btn-action" id="signupbutton">Sign Up</button>
                <button className="btn btn-action hide" id="logoutbutton">Log Out</button>
            </div>
        );
    }
}

export default LoginForm;