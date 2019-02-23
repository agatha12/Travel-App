import React from "react";
import { UserInput, FormButton } from "../Input";

export default function (props) {
    // This form component  will take input and call a function (used to get flight) 
    const { handleInputChange, airline, flNumber, year, month, day, depAirport, handleFormButton } = props
    return (
        <form>
            <UserInput
                name="airline"
                placeholder="Airline"
                value={airline}
                onChange={handleInputChange} />
            <UserInput
                name="flNumber"
                placeholder="Flight Number"
                value={flNumber}
                onChange={handleInputChange} />
            <UserInput
                name="depAirport"
                placeholder="Departing Airport"
                value={depAirport}
                onChange={handleInputChange} />

            <UserInput
                name="year"
                value={year}
                onChange={handleInputChange} />
            <UserInput
                name="month"
                value={month}
                onChange={handleInputChange} />
            <UserInput
                name="day"
                value={day}
                onChange={handleInputChange} />

            <FormButton onClick={handleFormButton}>
                Submit
                    </FormButton>
        </form>
    )
}