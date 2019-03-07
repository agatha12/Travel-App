import React from "react";
import { SelectDate, Hour, Minute, Timezone, Container, UserInput, FlightInput, AirportInput } from "../Input";
// import API from "../utils/API";
// import PropTypes from 'prop-types'
import { Row, Col, Button } from "react-materialize";
// import SearchFlight from "../components/SearchFlight";

export default function (props) {
    //This for the flight modal - if API is not available the user can enter all the information manually
    const { flightnumber, airport } = props;
    const { firstDepDate, firstDepTime, firstarrivalDate, firstarrivalTime } = props;
    const { seconddepDate, seconddepTime, secondarrivalDate, secondarrivalTime } = props;
    const { handleInputChange } = props;

    return (
        <div>
            <h4>Flight Details</h4>
            <FlightInput
                name="flightnumber"
                onChange={handleInputChange}
                value={flightnumber}
                label="Flight Number"
            />
            <AirportInput
                name="airport"
                onChange={handleInputChange}
                value={airport}
                label="Departure Airport"
            />
            <h4>Departure Date</h4>
            <Row>
                <Col s={6}>
                    <SelectDate
                        name="firstDepDate"
                        onChange={handleInputChange}
                        value={firstDepDate}
                        label="Pick a Date" />
                </Col>
                <Col s={6}>
                    <Container value={firstDepTime}>
                        <Hour
                            onChange={handleInputChange}
                            name="dept_hour" />
                        <Minute
                            name="dept_min"
                            onChange={handleInputChange} />
                        <Timezone
                            name="dept_time"
                            onChange={handleInputChange} />
                    </Container>
                </Col>
            </Row>

            <h4>Arrival Date</h4>
            <Row>
                <Col s={6}>
                    <SelectDate
                        name="firstarrivalDate"
                        onChange={handleInputChange}
                        value={firstarrivalDate}
                        label="Pick a Date" />
                </Col>
                <Col s={6}>
                    <Container value={firstarrivalTime}>
                        <Hour
                            onChange={handleInputChange}
                            name="arr_hour" /><Minute
                            name="arr_min"
                            onChange={handleInputChange} />
                        <Timezone
                            name="arr_time"
                            onChange={handleInputChange} />
                    </Container>
                </Col>
            </Row>
            <Row>
                <h4>Second Departure</h4>
                <Col s={6}>
                    <SelectDate
                        name="seconddepDate"
                        onChange={handleInputChange}
                        value={seconddepDate}
                        placeholder="Pick a Date" />
                </Col>
                <Col s={6}>
                    <Container value={seconddepTime}>
                        <Hour
                            onChange={handleInputChange}
                            name="deptwo_hour" /><Minute
                            name="deptwo_min"
                            onChange={handleInputChange} />
                        <Timezone
                            name="deptwo_time"
                            onChange={handleInputChange} />
                    </Container>
                </Col>
            </Row>
            <Row>
                <h4>Second Arrival</h4>
                <Col s={6}>
                    <SelectDate
                        name="secondarrivalDate"
                        onChange={handleInputChange}
                        value={secondarrivalDate}
                        placeholder="Pick a Date" />
                </Col>
                <Col s={6}>
                    <Container value={secondarrivalTime}>
                        <Hour
                            onChange={handleInputChange}
                            name="arrtwo_hour" />
                        <Minute
                            name="arrtwo_min"
                            onChange={handleInputChange} />
                        <Timezone
                            name="arrtwo_time"
                            onChange={handleInputChange} />
                    </Container>
                </Col>
            </Row>
        </div>
    )
}
