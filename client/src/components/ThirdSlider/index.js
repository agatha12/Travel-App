import React from "react";
import { Slider, Slide } from "react-materialize";
import Update from "../../images/update.jpg"



export function Third(props) {
    return (
        <Slider className="slider">
            <Slide
                className="slider"
                src={Update}>
                <h1 className="slider">Update Itinerary</h1>
            </Slide>
        </Slider>
    )
}