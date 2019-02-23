import React from "react";
import { UserInput, FormButton } from "../Input";

export default function (props) {
    
    // This form component  will take input and call a function (used to get airport weather for the week based on airport) 
    const { handleInputChange, airport, handleFormButton } = props
    return (
        <form>
            <UserInput
                name="airport"
                placeholder="Enter Airport"
                value={airport}
                onChange={handleInputChange} />

            <FormButton onClick={handleFormButton}>Submit</FormButton>
        </form>
    )
}