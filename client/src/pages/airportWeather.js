import React, { Component } from "react";
import moment from 'moment';
import API from "../utils/API";
// import { UserInput, FormButton } from "../components/Input";
import SearchAirportWeatherForm from "../components/SearchAirportWeatherForm"

class getAirportWeather extends Component {
    state = {
        response: {},
        airport: "",
    };
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
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };
    //added icons to a few weather conditon using font awesome 
    weatherConditions = condition => {
        // console.log(`Condition is: ${condition}`)
        switch (condition) {
            case 'Thunderstorms':
                return (<i className="fas fa-bolt"></i>);
                break;

            case 'Showers':
                return <i className="fas fa-cloud-rain"></i>
                break;

            case 'Rain':
                return <i className="fas fa-cloud-rain"></i>
                break;

            case 'Ice':
                return <i class="fas fa-icicles"></i>
                break;

            case 'Partly Sunny':
                return <i class="fas fa-cloud-sun"></i>
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
    };

    cToF = celsius => {
        let cTemp = Number(celsius);
        const cToFahr = cTemp * 9 / 5 + 32;
        console.log(cToFahr);
        return cToFahr
    };

    renderWithMetarWeather = () => {
        if (this.state.response.metar) {
            const { appendix, metar } = this.state.response
            return (
                <div className="collection-item">
                    <h4>Location: {appendix.airports[0].city}, {appendix.airports[0].countryName}</h4>
                    <h5>Local Time: {moment(appendix.airports[0].localTime).format('LT')}</h5>
                    <p>Current Temperture at {appendix.airports[0].name}</p>
                    <p>Temperture: {this.cToF(metar.temperatureCelsius)}°F</p>

                    {/* <p>{this.state.response.metar.weatherConditions[0] || ""}</p> */}
                </div>
            )
        }
        else {
            return (<div>No Response</div>)
        }
    };

    renderWithZoneForcast = () => {
        //wrap everything in one return
        return (
            (this.state.response.zoneForecast.dayForecasts.map((eachWeather, i) => {
                return (
                    <div key={i} className="collection-item">
                        <h5>{eachWeather.day}</h5>
                        <p>Forcast: {eachWeather.forecast}</p>
                        <p>From: {moment(eachWeather.start).format('LT')} to {moment(eachWeather.end).format('LT')}</p>
                        <p>Conditions: {eachWeather.tags[0].value}  {this.weatherConditions(eachWeather.tags[0].value)}</p>
                        <br />
                    </div>)
            })
            )
        ) //final return
    };

    render() {
        return (
            <div>
                <h2>Get Airport Weather</h2>
                <SearchAirportWeatherForm
                    s={6}
                    airline={this.state.airport}
                    handleInputChange={this.handleInputChange}
                    handleFormButton={this.handleFormButton}
                />
                <br />
                <div className="container collection">
                    {this.state.response.zoneForecast ?
                        this.renderWithZoneForcast()
                        :
                        this.renderWithMetarWeather()
                    }
                </div>
            </div>

        );
    }
};

export default getAirportWeather;