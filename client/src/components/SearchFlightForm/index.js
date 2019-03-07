import React from "react";
import { UserInput, FormButton, SelectDate } from "../Input";
import { Row, Col, Button, Toast, Divider } from "react-materialize";
import { SelectAirlines, SelectAirports } from "../Select_AirportOrAirline"

export default function (props) {
    // This form component  will take input and call a function (used to get flight) 
    const {
        handleInputChange,
        airline, flNumber,
        depAirport,
        handleFlightFormApi,
        depDate
    } = props;
    // const { handleInputChange, airline, flNumber, year, month, day, depAirport, handleFormButton } = props
    return (
        <form>
            <Row>
                <Col s={8}>
                    <SelectAirlines
                
                        name="airline"
                        value={airline}
                        onChange={handleInputChange}
                    />
                </Col>
                <Col s={4}>
                    <UserInput
                        icon='local_airport'
                        name="flNumber"
                        placeholder="Flight Number"
                        value={flNumber}
                        onChange={handleInputChange}
                    />
                </Col>
            </Row>

            <Row>
                <Col s={3}>
                    <SelectDate
                        name="depDate"
                        onChange={handleInputChange}
                        value={depDate}
                        label="Flying when?" />
                </Col>
                <Col s={6}>
                    <SelectAirports
                        name="depAirport"
                        value={depAirport}
                        onChange={handleInputChange}
                    />
                </Col>

                <Col s={3}>
                    <FormButton color="light-blue accent-4" onClick={handleFlightFormApi}>
                        Check Flight
            </FormButton>
                </Col>
            </Row>
        </form>
    )
}