import React from "react";
import PropTypes from 'prop-types'
import "./style.css";



const Home = ({userName}) => (
    <div id="homediv">
    <h1>Travel App</h1>
    <p>Welcome {userName}</p>
</div>
)

Home.props = {
    userName: PropTypes.String
  }

export default Home;

