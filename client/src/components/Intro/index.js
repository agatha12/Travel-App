import React from "react";
import { UserInput, SelectDate, StartDate } from "../Input";
import { Row, Col } from "react-materialize"

export default function (props) {

    const { destination, startDate, endDate } = props;
    const { handleInputChange } = props;

    return (
        <div>
            <Row>
                <Col s={4}>
                    <UserInput
                        name="destination"
                        onChange={handleInputChange}
                        value={destination}
                        icon = "public"
                        label="Destination" />
                </Col>
            </Row>
            <Row>
                <Col s={3}>
                    <StartDate
                        name="startDate"
                        onChange={handleInputChange}
                        value={startDate}
                        label="Start Date" />

                </Col>
                <Col s={3}>
                    <StartDate
                        name="endDate"
                        onChange={handleInputChange}
                        value={endDate}
                        label="End Date" />

                </Col>
            </Row>
        </div>
    )


}