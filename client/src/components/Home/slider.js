import React from "react";
import { Slider, Slide } from "react-materialize";
import Japan from "../../images/japan.jpg"
import Beach from "../../images/beach.jpg"
import Japan2 from "../../images/japan2.jpg"
import Sunset from "../../images/sunset.jpg"
import Mountain from "../../images/mountain.jpg"


export function HomeSlider(props) {
    return (
        <Slider className="slider">
            <Slide
                className="slider"
                src={Beach}
                title="We can store all your trip info">

            </Slide>
            <Slide
                src={Japan}
                title="Search flight details and airport weather"
                placement="left">

            </Slide>
            <Slide
                src={Sunset}
                title="Search for hotels around the world"
                placement="right">

            </Slide>
            <Slide
                src={Mountain}
                title="Create albums to store your photos"
                placement="left">

            </Slide>
            <Slide
                src={Japan2}
                title=""
                placement="right">
                Trip Pal is always by your side
            </Slide>
        </Slider>
    )
}