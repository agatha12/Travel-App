import React from "react";
import { UserInput, FormButton, SelectDate } from "../Input";
import { Row, Col } from "react-materialize"

export default function (props) {
    // This form component  will take input and call a function (used to get flight) 
    const {
        handleInputChange,
        userCity, checkInDate,
        checkOutDate,
        handleFormButton
    } = props;
    // const { handleInputChange, airline, flNumber, year, month, day, depAirport, handleFormButton } = props
    return (
        <div className='container center-align'>
            <form className="center">
                <h4>Find your hotel</h4>
                <div className="center-align">
                    <UserInput
                        s={8}
                        icon="location_city"
                        name="userCity"
                        placeholder="Where do you want to go?"
                        value={userCity}
                        onChange={handleInputChange}
                    />
                </div>
                <br />
                <Row>
                    <Col>
                        <div className="center-align">
                            <SelectDate
                                name="checkInDate"
                                onChange={handleInputChange}
                                value={checkInDate}
                                label="Check in Date"
                            />
                        </div>
                    </Col>
                    <Col>
                        <div className="right">
                            <SelectDate
                                name="checkOutDate"
                                onChange={handleInputChange}
                                value={checkOutDate}
                                label="Check out Date"
                            />
                        </div>
                    </Col>>
                </Row>
                <FormButton onClick={handleFormButton}>
                        Submit
                    </FormButton>
            </form>
        </div>
    )
}