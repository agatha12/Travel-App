import React from "react";
import { Slider, Slide } from "react-materialize";
import Update from "../../images/update.jpg"



export function Third(props) {
    return (
        <Slider className="slider">
            <Slide
                className="slider"
                src={Update}>
                <p className="slider">Update Itinerary</p>
            </Slide>
        </Slider>
    )
}