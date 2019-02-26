import React from "react";
import { UserInput, FormButton, SelectDate } from "../Input";
import { SelectAirlines, SelectAirports } from "../Select_AirportOrAirline"

export default function (props) {
    // This form component  will take input and call a function (used to get flight) 
    const {
        handleInputChange,
        airline, flNumber,
        depAirport,
        handleFormButton,
        depDate
    } = props;
    // const { handleInputChange, airline, flNumber, year, month, day, depAirport, handleFormButton } = props
    return (
        <form>
            <SelectAirlines
                name="airline"
                value={airline}
                onChange={handleInputChange}
            />
            <UserInput
                icon='local_airport'
                name="flNumber"
                placeholder="Flight Number"
                value={flNumber}
                onChange={handleInputChange}
            />
            <SelectDate
                s={8}
                name="depDate"
                onChange={handleInputChange}
                value={depDate}
                label="Pick a Date" />
            <SelectAirports
                name="depAirport"
                value={depAirport}
                onChange={handleInputChange}
            />
            <br />
            {/* <UserInput
                name="airline"
                placeholder="Airline"
                value={airline}
                onChange={handleInputChange} /> */}
            {/* <UserInput
                name="depAirport"
                placeholder="Departing Airport"
                value={depAirport}
                onChange={handleInputChange} /> */}
            {/* Date of Flight */}
            {/* <Container value={firstDepTime}>
                <Hour
                    onChange={handleInputChange}
                    name="dept_hour" />
                <Minute
                    name="dept_min"
                    onChange={handleInputChange} />
                <Timezone
                    name="dept_time"
                    onChange={handleInputChange} />
            </Container> */}
            {/* <UserInput
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
                onChange={handleInputChange} /> */}

            <FormButton onClick={handleFormButton}>
                Submit
            </FormButton>
        </form>
    )
}