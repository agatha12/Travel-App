import React, { Component } from "react";
import API from "../utils/API";
import { Input, Container, Year, Month, Day, FormButton } from "../components/Input";

class GetFlights extends Component {
    state = {
        response: {},
        airline: '',
        flNumber: '',
        year: '',
        month: '',
        day: '',
        depAirport: ''
        // query: []
    }

    //get flight from api get result into response
    searchFlight = () => {
        const { airline, flNumber, year, month, day, depAirport } = this.state;
        console.log(airline, flNumber, year, month, day, depAirport);
        API.searchFlight(
            // this.state.airline
            {
            airline: airline,
            flNumber: flNumber,
            year: year,
            month: month,
            day: day,
            depAirport: depAirport
        }
        ).then(res => {
            if(res){
                console.log('got result')
            }
            // console.log(res)
            const flightInfo = res.data.flightStatuses[0];
            const queryInfo = res.data.request;
            console.log(flightInfo)
            this.setState({ response: flightInfo })
            // console.log(this.state)
        })
            .catch(function (err) {
                console.log('ERROR')
                console.log(err)
            })
    };

    handleFormButton = event => {
        event.preventDefault();
        alert("Checking for Flight");
        this.searchFlight()
    }

    // componentDidMount() {
    //     this.searchFlight('AA', 3750, 2019, 2, 9, 'JFK')
    // };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    renderFlightInfo = () => {
        if (this.state.response.departureAirportFsCode) {
            return (
                <div>
                    <p>Arriving: <span>{this.state.response.departureAirportFsCode}</span></p>
                    <p>{this.state.response.arrivalAirportFsCode}</p>
                    <p>{this.state.response.departureDate.dateLocal}</p>
                    <p>{this.state.response.arrivalDate.dateLocal}</p>
                    <p>{this.state.response.flightDurations.scheduledBlockMinutes}</p>
                </div>
            )

        } else {
            return (<h3>No Results to Display</h3>)
        }
    }

    render() {
        return (
            <div>
                <h1>Get Flight</h1>
                <form>
                    <Input
                        name="airline"
                        placeholder="Airline"
                        value={this.state.airline}
                        onChange={this.handleInputChange} />
                    <Input
                        name="flNumber"
                        placeholder="Flight Number"
                        value={this.state.flNumber}
                        onChange={this.handleInputChange} />
                    <Input
                        name="depAirport"
                        placeholder="Departing Airport"
                        value={this.state.depAirport}
                        onChange={this.handleInputChange} />

                    <Year
                        name="year"
                        value={this.state.year}
                        onChange={this.handleInputChange} />
                    <Month
                        name="month"
                        value={this.state.month}
                        onChange={this.handleInputChange} />
                    <Day
                        name="day"
                        value={this.state.day}
                        onChange={this.handleInputChange} />

                    <FormButton onClick={this.handleFormButton}>
                        Submit
                    </FormButton>
                </form>
                {this.renderFlightInfo()}
            </div>

        );
    }
};

export default GetFlights;