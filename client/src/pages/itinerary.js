import React, { Component } from "react";
import { Input, SelectDate, Time, FormButton } from "../components/Input";
import API from "../utils/API";


class Form extends Component {
    state = {
        itinerarydata: [],
        passengername: "",
        flightnumber: "",
        airport: "",
        destination: "",
        firstDepDate: "",
        firstDepTime: "",
        firstarrivalDate: "",
        firstarrivalTime: "",
        seconddepDate: "",
        seconddepTime: "",
        secondarrivalDate: "",
        secondarrivalTime: "",
        value:""
    }

    // componentDidMount() {
    //     this.loadUsers();   
    // }

    
    // loadUsers = () => {
    //     API.getForms()
    //     .then(res => console.log(res.data))
    //     .catch(err => console.log(err))
    // }


    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleFormButton = event => {
        event.preventDefault();
        API.saveForm({
            passengername: this.state.passengername,
            flightnumber: this.state.flightnumber,
            airport: this.state.airport,
            destination: this.state.destination,
            firstDepDate: this.state.firstDepDate,
            firstDepTime: this.state.firsDepTime,
            firstarrivalDate: this.state.firstarrivalDate,
            firstarrivalTime: this.state.firstarrivalTime,
            seconddepDate: this.state.seconddepDate,
            // seconddepTime: this.state.seconddepTime,
            secondarrivalDate: this.state.secondarrivalDate
            // secondarrivalTime: this.state.secondarrivalTime
        }).catch(err => console.log(err))
    }
    
    render() {
        return (
            <div id="form-div">
                <h1>Itinerary Form</h1>
                <form>
                    <Input
                        name="passengername"
                        placeholder="Full Name"
                        value={this.state.passengername}
                        onChange={this.handleInputChange} />
                    <Input
                        name="flightnumber"
                        placeholder="Flight Number"
                        value={this.state.flightnumber}
                        onChange={this.handleInputChange} />
                    <Input
                        name="airport"
                        placeholder="Airport"
                        value={this.state.airport}
                        onChange={this.handleInputChange} />
                    <Input
                        name="destination"
                        placeholder="Destination"
                        value={this.state.destination}
                        onChange={this.handleInputChange} />
                    
                    
                    <h4>Departure Date</h4>
                    
                    <SelectDate
                        name="firstDepDate"
                        onChange={this.handleInputChange}
                        value={this.state.firstDepDate}
                        placeholder = "MM/DD/YYYY"
                    />
                    
                    <Time
                        name="firstDepTime"
                        onChange={this.handleInputChange}
                        value={this.state.firstDepTime}
                        placeholder="Time of Departure"
                    />
                    <h4>Arrival Date</h4>
                    <SelectDate
                        name="firstarrivalDate"
                        onChange={this.handleInputChange}
                        value = {this.state.firstarrivalDate}
                        placeholder = "MM/DD/YYYY"
                    />
                    <Time
                        name="firstarrivalTime"
                        onChange={this.handleInputChange}
                        value={this.state.firstarrivalTime}
                        placeholder="Time of Arrival"
                    />
                    <h4>Departure Date</h4>
                    <SelectDate
                        name="seconddepDate"
                        onChange={this.handleInputChange}
                        value={this.state.seconddepDate}
                        placeholder = "MM/DD/YYYY"
                    />
                    <Time
                        name="seconddepTime"
                        onChange={this.handleInputChange}
                        value={this.state.seconddepTime}
                        placeholder="Time of Departure"
                    />
                    <h4>Arrival Date</h4>
                    <SelectDate
                        name="secondarrivalDate"
                        onChange={this.handleInputChange}
                        value = {this.state.secondarrivalDate}
                        placeholder = "MM/DD/YYYY"
                    />
                    <Time
                        name="secondarrivalTime"
                        onChange={this.handleInputChange}
                        value={this.state.secondarrivalTime}
                        placeholder="Time of Arrival"
                    />
                    <br></br>
                    <FormButton onClick={this.handleFormButton}>
                        Submit
                    </FormButton>
                </form>
                <button>Generate Itinerary</button>
            </div>
        )
    }
}

export default Form;