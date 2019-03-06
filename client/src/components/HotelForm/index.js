import React from "react";
import { UserInput, FormButton, SelectDate } from "../Input";

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
        <div class='container'>
        <form>
        <h4>Find your hotel</h4>
            <UserInput
                s={4}
                icon="location_city"
                name="userCity"
                placeholder="Where do you want to go?"
                value={userCity}
                onChange={handleInputChange}
            />
            <br />
            <SelectDate
                s={4}
                name="checkInDate"
                onChange={handleInputChange}
                value={checkInDate}
                label="Pick a Date"
            />
            <br />
            <SelectDate
                s={4}
                name="checkOutDate"
                onChange={handleInputChange}
                value={checkOutDate}
                label="Pick a Date"
            />
            <FormButton onClick={handleFormButton}>
                Submit
            </FormButton>
        </form>
        </div>
    )
}