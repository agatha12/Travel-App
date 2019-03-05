import React from "react";
import { Row, Input } from "react-materialize";

export function AreYouFlying(props) {
    return (
        <div>
            <h4>Are you traveling by plane?</h4>
            <Input onChange={props.onRadioChange} name='FlightAPIWorked' type='radio' value='1' label='Yes' />
            <Input onChange={props.onRadioChange} name='FlightAPIWorked' type='radio' value='0' label='No' />
            <Input name='FlightAPIWorked' type='radio' value='brown' label='Rocket Ship' disabled='disabled' />
        </div>
    )
}

export function AreYouFlying2(props) {
    return (
        <Row>
            <div>
            <h4>Are you flying?</h4>
            <p>
                <label>
                    <input onChange={props.onRadioChange} name="amIFlying" type="radio" value="1" />
                    <span>Yes</span>
                </label>
            </p>
            <p>
                <label>
                    <input onChange={props.onRadioChange} name="amIFlying" type="radio" value="0" />
                    <span>No</span>
                </label>
            </p>
            </div>
            
        </Row>
    )
}