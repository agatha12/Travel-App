import React, { Component } from "react";
import API from "../utils/API";
import SearchFlightForm from "../components/SearchFlightForm"

class GetFlights extends Component {
    state = {
        response: {},
        airline: '',
        flNumber: '',
        year: '',
        month: '',
        day: '',
        depAirport: ''
    }

    // Get flight from api get result into response
    searchFlight = () => {
        const { airline, flNumber, year, month, day, depAirport } = this.state;
        console.log(airline, flNumber, year, month, day, depAirport);
        API.searchFlight(
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
            const flightInfo = res.data.flightStatuses[0];
            console.log(flightInfo)
            this.setState({ response: flightInfo })

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
                <SearchFlightForm
                handleInputChange={this.handleInputChange}
                handleFormButton={this.handleFormButton}
                airline={this.state.airline}
                flNumber={this.state.flNumber}
                depAirport={this.state.depAirport}
                year={this.state.year}
                month={this.state.month}
                day={this.state.day}
                />
                {this.renderFlightInfo()}
            </div>

        );
    }
};

export default GetFlights;