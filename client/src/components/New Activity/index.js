import React from "react";
import { Row, Input, Button, Icon } from "react-materialize";

export function AddInput(props) {
    return (
        <Row>
            <Button onClick={props.addChild} floating large className='red' waves='light' icon='add' />
            <div id="children-pane">
                {props.children}
            </div>
        </Row>
    )
}

export function ChildComponent (props) {
    return(
        <Input type="text" className="form-control validate" placeholder="Activity" {...props} />  
    )
}
