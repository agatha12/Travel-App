import React from "react";
import { SelectDate, Hour, Minute, Timezone, Container } from "../Input";
// import API from "../utils/API";
// import PropTypes from 'prop-types'
import { Row, Col, Button, Toast, Divider } from "react-materialize";
// import SearchFlight from "../components/SearchFlight";

export default function (props) {
    //This for the not flying 
    const { firstDepDate, firstarrivalDate } = props;
    const { seconddepDate, secondarrivalDate } = props;
    const { handleInputChange } = props;

    return (
        <div>
            
            <Row>
                <Col s={6} >
                <h4>Starting Trip</h4>
                    <SelectDate
                        name="firstDepDate"
                        onChange={handleInputChange}
                        value={firstDepDate}
                        label="Pick a Date" />
                </Col>
                <Col s={6}>
                    <h4>Arrival Date</h4>
                    <SelectDate
                        name="firstarrivalDate"
                        onChange={handleInputChange}
                        value={firstarrivalDate}
                        label="Pick a Date" />
                </Col>
            </Row>
            {/* <div className="divider"></div> */}
            <Row>
                <Col s={6}>
                    <h4>Leaving</h4>
                    <SelectDate
                        name="seconddepDate"
                        onChange={handleInputChange}
                        value={seconddepDate}
                        placeholder="Pick a Date" />
                </Col>
                <Col s={6}>
                    <h4>Getting Back Home</h4>
                    <SelectDate
                        name="secondarrivalDate"
                        onChange={handleInputChange}
                        value={secondarrivalDate}
                        placeholder="Pick a Date" />
                </Col>
            </Row>
        </div>
    )
}
