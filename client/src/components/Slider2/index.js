import React from "react";
import { Slider, Slide } from "react-materialize";
import Tools from "../../images/travel.jpg"
import "./style.css"



export function SecondSlider(props) {
    return (
        <Slider className="slider">
            <Slide
                className="slider"
                src={Tools}>
                <h1 className="slider">Itinerary Form</h1>
            </Slide>
        </Slider>
    )
}