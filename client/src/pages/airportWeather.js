import React, { Component } from "react";
import API from "../utils/API";
import { UserInput, FormButton } from "../components/Input";
import SearchAirportWeatherForm from "../components/SearchAirportWeatherForm"

class getAirportWeather extends Component {
    state = {
        response: {},
        airport: "",
    }
    
    //get airport weather from api get result into response
    searchAirportWeather = () => {
        API.searchAirportWeather(
            {
                airport: this.state.airport
            }
        ).then(res => {
            if (res) {
                console.log('got result')
            }
            const airportWeather = res.data.zoneForecast;
            console.log(airportWeather)
            this.setState({ response: airportWeather })
        })
            .catch(function (err) {
                console.log('ERROR')
                console.log(err)
            })
    };

    handleFormButton = event => {
        event.preventDefault();
        alert("Checking for Weather");
        this.searchAirportWeather()
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    renderWeatherInfo = () => {
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
                <h1>Get Airport Weather</h1>
                <SearchAirportWeatherForm
                airline={this.state.airport}
                handleInputChange={this.handleInputChange}
                handleFormButton={this.handleFormButton}
                />
                {/* {this.renderFlightInfo()} */}
            </div>

        );
    }
};

export default getAirportWeather;