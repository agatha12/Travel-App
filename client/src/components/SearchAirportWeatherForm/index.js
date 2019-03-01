import React from "react";
import {FormButton} from "../Input";
import {SelectAirports} from "../Select_AirportOrAirline"

 export default function (props) {
    
    // This form component  will take input and call a function (used to get airport weather for the week based on airport) 
    const { handleInputChange, airport, handleFormButton } = props
    return (
        <form>
            <SelectAirports
                name="airport"
                label="Enter Airport"
                icon="cloud"
                value={airport}
                onChange={handleInputChange} />

            <FormButton onClick={handleFormButton}>Submit</FormButton>
        </form>
    )
}