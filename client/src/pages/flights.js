import React, { Component } from "react";
import moment from 'moment';
import API from "../utils/API";
import SearchFlightForm from "../components/SearchFlightForm";
import PreloaderAnimate from "../components/PreloaderAnimation"

class GetFlights extends Component {
    state = {
        response: {},
        airline: '',
        flNumber: '',
        year: '',
        month: '',
        day: '',
        depAirport: '',
        depDate: '',
        isLoaded: false
    }
    // Get flight from api get result into response
    searchFlight = () => {
        this.setState({isLoaded: true})
        let response;
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
            })
            .then(res => {
                response = res.data;
                // if (res) {
                //     console.log('response attained')
                // }
                // Lets developer know what the error is
                if (response.error) {
                    console.log(response.error.errorMessage)
                }
                // console.log(flightInfo.flightStatuses.length)
                this.setState({
                    response: response,
                    isLoaded: false
                 })

            })
            .catch(function (err) {
                console.log('ERROR')
                console.log(err)
            })
    };
    
    //Handles form event, lets user know it is checking for flight, then outputs results
    handleFlightFormApi = event => {
        event.preventDefault();
        // alert("Checking for Flight");
        this.searchFlight();
    };
    // Boilerplate - handles user changes
    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
        this.changeDateWithMoment();
        console.log(this.state)

    };
    // Changes firstDepDate into 3 parts: year, month, day
    changeDateWithMoment = () => {
        let firstDepDate = moment(this.state.depDate, 'DD MMMM YYYY');
        let yearFormat = firstDepDate.format('YYYY');
        let monthFormat = firstDepDate.format('MM');
        let dayFormat = firstDepDate.format('DD');
        // console.log(firstDepDate.format('L'));
        this.setState({
            year: yearFormat,
            month: monthFormat,
            day: dayFormat
        });
    };
    //
    changeMinutestoHours = (minutes) => {
        console.log(minutes)
        parseInt(minutes)
        let realmin = minutes % 60
        let hours = Math.floor(minutes / 60)
        return (`${hours}h ${realmin}m`)

    };

    render() {
        return (
            <div>
                <h1>Get Flight</h1>
                <SearchFlightForm
                    handleInputChange={this.handleInputChange}
                    handleFlightFormApi={this.handleFlightFormApi}
                    airline={this.state.airline}
                    flNumber={this.state.flNumber}
                    depAirport={this.state.depAirport}
                    year={this.state.year}
                    month={this.state.month}
                    day={this.state.day}
                    depDate={this.state.depDate}
                />
                {/* if there is an error then it will return 'Error' */}
                {this.state.response.error ? <h4>Error: Bad Response </h4> : <h4>Results Here</h4>}
                {/* If there is a flight status and it is empty return no results. if there is something then output  */}

                {this.state.response.flightStatuses ? 
                    (this.state.response.flightStatuses.length === 0 ?
                        <p>No Results</p>
                        : this.isLoaded ?
                        <div>
                        <h2>Checking for Flight</h2>
                        <PreloaderAnimate/>
                        </div>
                         :
                        this.state.response.flightStatuses.map((eachFlight => {
                            return (
                                <div key={eachFlight.flightId}>

                                    <p>Departing at {eachFlight.departureAirportFsCode} Airport on {moment(eachFlight.departureDate.dateLocal).format('LLLL')} Local Time</p>
                                    <p>Arriving at {eachFlight.arrivalAirportFsCode} Airport on {moment(eachFlight.arrivalDate.dateLocal).format('LLLL')} Local Time </p>
                                    <p>Flight Duration: {this.changeMinutestoHours(eachFlight.flightDurations.scheduledBlockMinutes)}</p>
                                </div>)
                        })
                        )) : <div>-</div>}
            </div>
        );
    };
};

export default GetFlights;