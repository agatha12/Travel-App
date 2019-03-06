import React, { Component } from "react";
import moment from 'moment';
import API from "../../utils/API";
import SearchFlightForm from "../SearchFlightForm"

class GetFlightsComp extends Component {
    state = {
        response: {},
        airline: '',
        flNumber: '',
        year: '',
        month: '',
        day: '',
        depAirport: '',
        depDate: '',

        apiNoResults=this.props.apiNoResults,
        flightnumber: this.props.flightnumber,
        airport: this.props.airport,
        firstDepDate: this.props.firstDepDate,
        firstDepTime: this.props.firstDepTime,
        firstarrivalDate: this.props.firstarrivalDate,
        firstarrivalTime: this.props.firstarrivalTime
    }
    // Get flight from api get result into response
    searchFlight = () => {
        let flightInfo;
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
                flightInfo = res.data;
                if (res.data.error) {
                    console.log(res.data.error.errorMessage)
                } else if (flightInfo.error) {
                    this.setState({})
                }
                this.setState({ response: flightInfo })

            })
            .catch(function (err) {
                console.log('ERROR')
                console.log(err)
            })
    };
    //Handles form event, lets user know it is checking for flight, then outputs results
    handleFlightFormApi = event => {
        event.preventDefault();
        alert("Checking for Flight");
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

    render() {
        return (
            <div>
                <h2>Get Flight</h2>
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
            </div>
        );
    };
};

export default GetFlightsComp;