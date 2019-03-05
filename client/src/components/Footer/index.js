import React from "react";
import { Footer } from "react-materialize";
import "./style.css"

export function NewFooter(props) {
    return (<Footer copyrights="©2019 JAMA All Rights Reserved"
        moreLinks={
            <a className="grey-text text-lighten-4 right" href="#!">More Links</a>
        }
        className='light-blue lighten-3'>
        {props.children}
        <p className="grey-text text-lighten-4">You can use rows and columns here to organize your footer content.</p>
    </Footer>)
}

