import React from "react";
import PropTypes from 'prop-types'
import "./style.css";
import { HomeSlider } from "./slider";



const Home = ({userName}) => (
    <div id="homediv">
    <h1>Trip Pal</h1>
    <HomeSlider />
</div>
)

Home.props = {
    userName: PropTypes.String
  }

export default Home;

