import React from "react";
import { Slider, Slide } from "react-materialize";
import Japan from "../../images/japan.jpg"
import Beach from "../../images/beach.jpg"
import Japan2 from "../../images/japan2.jpg"


export function HomeSlider(props) {
    return (
        <Slider className="slider">
            <Slide
                className="slider"
                src={Beach}
                title="Plan your next trip with us">

            </Slide>
            <Slide
                src={Japan}
                title="Search available flights"
                placement="left">

            </Slide>
            <Slide
                src={Japan2}
                title=""
                placement="right">
                Here's our small slogan.
            </Slide>
        </Slider>
    )
}