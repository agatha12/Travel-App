import React, { Component } from "react";
import { Row, Col } from "react-materialize"
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
        this.setState({ isLoaded: true })
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
                    this.setState({
                        response: response
                    })
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
        const { airline, flNumber, year, month, depAirport, depDate } = this.state;
        // alert("Checking for Flight");
        if ((airline === "") || (flNumber === "") || (depAirport === "") || (depDate === "")) {
            alert('Please fill out the form before checking flight.')
        } else {
            this.searchFlight();
        }
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

    renderGateConditions = (gateConditions) => {
        return (
            <div className="card-action">
                <Row>
                    <Col s={6} className="center-align">
                        {gateConditions.departureTerminal && <p>Departure Terminal: {gateConditions.departureTerminal}</p>}
                        {gateConditions.departureGate && <p>Departure Gate: {gateConditions.departureGate}</p>}
                    </Col>
                    <Col s={6} className="center-align">
                        {gateConditions.arrivalTerminal && <p>Arrival Terminal: {gateConditions.departureTerminal}</p>}
                        {gateConditions.arrivalGate && <p>Arrival Gate: {gateConditions.arrivalGate}</p>}
                    </Col>
                </Row>
            </div>
        )

    };

    render() {
        return (
            <div className="container">
                <h3 className="center-align">Get Flight</h3>

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
                {this.state.response.error && <h4>Response Message: Date was not within range.</h4>}
                {/* If there is a flight status and it is empty return no results. if there is something then output  */}

                {this.state.response.flightStatuses &&
                    (this.state.response.flightStatuses.length === 0 ?
                        <p>No results</p>
                        : this.state.isLoaded ?
                            <div>
                                <h4>Checking for Flight</h4>
                                <PreloaderAnimate />
                            </div>
                            :
                            this.state.response.flightStatuses.map((eachFlight => {
                                return (
                                    <div key={eachFlight.flightId} className="card">
                                        <div className="card-content center-align">
                                            {/* <div class="row">
                                                <div class="col s12"><p>s12</p></div>
                                                <div class="col s12 m4 l2"><p>s12 m4</p></div>
                                                <div class="col s12 m4 l8"><p>s12 m4</p></div>
                                                <div class="col s12 m4 l2"><p>s12 m4</p></div>
                                            </div>
                                            <div class="row white">
                                                <div class="col s12 m6 l3"><p>s12 m6 l3</p></div>
                                                <div class="col s12 m6 l3"><p>s12 m6 l3</p></div>
                                                <div class="col s12 m6 l3"><p>s12 m6 l3</p></div>
                                                <div class="col s12 m6 l3"><p>s12 m6 l3</p></div>
                                            </div> */}
                                            <p className='right-align'> Flight Duration: {this.changeMinutestoHours(eachFlight.flightDurations.scheduledBlockMinutes)}</p>
                                            <div className="container">
                                                <span className="card-title">Flight Info </span>
                                                <Row>
                                                    <Col>
                                                        <p>Departing at: {this.state.response.appendix.airports[1].name} </p>

                                                        <p>({eachFlight.departureAirportFsCode}) Airport on {moment(eachFlight.departureDate.dateLocal).format('LLLL')} at Local Time</p>
                                                    </Col>
                                                </Row>
                                                <br/>
                                                {/* <Col className='valign-wrapper'>TO</Col> */}
                                                <Row>
                                                    <Col>
                                                        <p>Arriving at: {this.state.response.appendix.airports[0].name}</p>
                                                        <p> ({eachFlight.arrivalAirportFsCode}) Airport on {moment(eachFlight.arrivalDate.dateLocal).format('LLLL')} at Local Time </p>
                                                    </Col>
                                                </Row>
                                        </div>
                                        {eachFlight.airportResources && (this.renderGateConditions(eachFlight.airportResources))}
                                        {/* {eachFlight.airportResources && (() => this.renderGateConditions(eachFlight.airportResources))} */}
                                    </div>
                                    </div>)
        })
        ))}
            </div>
        );
    };
};

export default GetFlights;