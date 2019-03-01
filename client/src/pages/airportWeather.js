import React, { Component } from "react";
import moment from 'moment';
import API from "../utils/API";
// import { UserInput, FormButton } from "../components/Input";
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
                console.log('Response Receieved')
            }
            const airportWeather = res.data;
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

    weatherConditions = condition => {
        console.log(`Condition is: ${condition}`)
        switch (condition) {
            case 'Thunderstorms':
                return (<i className="fas fa-bolt"></i>);
                break;

            case 'Showers':
                return <i className="fas fa-cloud-rain"></i>
                break;

            // case 'Fog':
            //     break;

            case 'Rain':
                return <i className="fas fa-cloud-rain"></i>
                break;

            case 'Sunny':
                return <i className="fas fa-sun"></i>
                break;

            case 'Cloudy':
                return <i className="fas fa-cloud"></i>
                break;

            case 'Snow':
                return <i className="fas fa-snowflake"></i>
                break;

            case 'Partly Cloudy':
                return <i className="fas fa-cloud"></i>
                break;
            default:
                return '';
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

                {this.state.response.zoneForecast ?
                    (this.state.response.zoneForecast.dayForecasts.map((eachWeather, i) => {
                        return (
                            <div key={i}>
                                <h4>{eachWeather.day}</h4>
                                <p>Forcast: {eachWeather.forecast}</p>
                                <p>From: {moment(eachWeather.start).format('LT')} to {moment(eachWeather.end).format('LT')}</p>
                                <p>Conditions: {eachWeather.tags[0].value}  {this.weatherConditions(eachWeather.tags[0].value)}</p>
                            </div>)
                    })
                    ) : <div>-</div>
                }
            </div>

        );
    }
};

export default getAirportWeather;