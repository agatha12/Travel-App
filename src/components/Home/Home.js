import React, { Component } from "react";
import * as firebase from 'firebase';
import "./style.css";

class Home extends Component {


    constructor() {
        super();
        this.state = {
            username: "",
        }
    }


    componentDidMount(){

        var config = {
            apiKey: "AIzaSyA4AhVPBIoyLljkMj4cAo0hNkD2vpoKtMs",
            authDomain: "travel-app-10c33.firebaseapp.com",
            databaseURL: "https://travel-app-10c33.firebaseio.com",
            projectId: "travel-app-10c33",
            storageBucket: "travel-app-10c33.appspot.com",
            messagingSenderId: "78857878836"
        };
        firebase.initializeApp(config);
        firebase.auth().onAuthStateChanged( user => {
            this.setState({
                username: user.email
            });
        });
    }

   

render(){
    return (
        <div id="homediv">
            <h1>Travel App</h1>
            <p>Welcome {this.state.username}</p>
        </div>
    );
}

}

export default Home;

