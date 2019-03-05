import React, { Component } from "react";
import { RowContainer, ReactModal, FlightModal, HotelModal, UserInput, SelectDate, Hour, Minute, Timezone, FormButton, ItineraryButton, Container, ModalInput } from "../components/Input";
import API from "../utils/API";
import PropTypes from 'prop-types'
import { Row, Col, Toast } from "react-materialize";
import SearchFlight from "../components/SearchFlightForm";
import FlightForm_Long from "../components/FlightForm_Long";
import "./style.css";

class Update extends Component {

    state = {
        itinerary: {
            flightnumber: '',
            airport: '',
            destination: '',
            // hotelName: '',
            firstDepDate: '',
            firstDepTime: '',
            firstarrivalDate: '',
            firstarrivalTime: '',
            // checkinDate: '',
            // checkinTime: '',
            // checkoutTime: '',
            // checkoutDate: '',
            seconddepDate: '',
            seconddepTime: '',
            secondarrivalDate: '',
            hotelList: []
        },
        FlightAPIWorked: 0
    }

    componentDidMount() {
        this.getuserInput();
        setTimeout(() => { console.log(this.state) }, 2000)
    }

    // gets user info for specific _id
    getuserInput() {
        API.getForm(this.props.match.params.id)
            .then(res => this.setState({ itinerary: res.data }))
            .catch(err => console.log(err));
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    onChange = (e) => {
        const state = this.state.itinerary
        state[e.target.name] = e.target.value;
        this.setState({ itinerary: state });
    }

    handleUpdate = event => {

        event.preventDefault();

        const { flightnumber, airport, destination,
            firstDepDate, firstDepTime, firstarrivalDate,
            firstarrivalTime, seconddepDate, seconddepTime,
            secondarrivalDate, hotelList,
            hotelName, checkinDate, checkinTime,
            checkoutDate, checkoutTime
            } = this.state.itinerary

        alert("Update Complete");

        API.updateForm(this.props.match.params.id, {
            flightnumber, airport, destination,
            firstDepDate, firstDepTime, firstarrivalDate,
            firstarrivalTime, seconddepDate, seconddepTime,
            secondarrivalDate, hotelList,
            hotelName, checkinDate, checkinTime,
            checkoutDate, checkoutTime
        })
            .then((result) => {
                console.log(result.data)
                // this.props.history.push("/itinerary/" + this.props.match.params.id)
            })
        console.log(this.state)
    }

    render() {

        return (

            <div id="form-div">
                <h4>Hey {this.state.itinerary.passengername}</h4>
                <h4>Trip to {this.state.itinerary.destination}</h4>
                <RowContainer>
                    <form>
                        <Row>
                            <Col s={3}>
                                <label>Destination</label>
                                <UserInput type="text" name="destination" value={this.state.itinerary.destination} onChange={this.onChange} />
                            </Col>
                        </Row>
                        <Row>
                            <Col s={3}>
                                <label>Flight Number</label>
                                <UserInput type="text" name="flightnumber" value={this.state.itinerary.flightnumber} onChange={this.onChange} />
                            </Col>
                            <Col s={3}>
                                <label>Airport</label>
                                <UserInput type="text" name="airport" value={this.state.itinerary.airport} onChange={this.onChange} />
                            </Col>
                        </Row>
                        <Col s={2}>
                            <FlightModal>
                                <h4>Departure Date</h4>
                                <SelectDate
                                    name="firstDepDate"
                                    onChange={this.onChange}
                                    value={this.state.itinerary.firstDepDate} />
                                <UserInput
                                    s={6}
                                    name="firstDepTime"
                                    value={this.state.itinerary.firstDepTime}
                                    icon="access_time"
                                    onChange={this.onChange} />
                                <h4>Arrival Date</h4>
                                <SelectDate
                                    name="firstarrivalDate"
                                    onChange={this.onChange}
                                    value={this.state.itinerary.firstarrivalDate} />
                                <UserInput
                                    s={6}
                                    name="firstarrivalTime"
                                    icon="access_time"
                                    value={this.state.itinerary.firstarrivalTime}
                                    onChange={this.onChange} />
                                <h4>Departure Date</h4>
                                <SelectDate
                                    name="seconddepDate"
                                    onChange={this.onChange}
                                    value={this.state.itinerary.seconddepDate} />
                                <UserInput
                                    s={6}
                                    name="seconddepTime"
                                    icon="access_time"
                                    value={this.state.itinerary.seconddepTime}
                                    onChange={this.onChange} />
                                <h4>Arrival Date</h4>
                                <SelectDate
                                    name="secondarrivalDate"
                                    onChange={this.onChange}
                                    value={this.state.itinerary.secondarrivalDate} />
                            </FlightModal>
                        </Col>

                        <Col s={2}>
                            {/* ADD HOTEL */}
                            <HotelModal>
                                <h4>Hotel Check-In</h4>

                                <label>Hotel Name</label>
                                <Row>
                                    <ModalInput
                                        name="hotelName"
                                        value={this.state.itinerary.hotelList.hotelName}
                                        onChange={this.onChange} />
                                </Row>

                                <label>Check-in Date</label>
                                <SelectDate
                                    name="checkinDate"
                                    onChange={this.onChange}
                                    value={this.state.itinerary.hotelList.checkinDate} />

                                <label>Check-in Time</label>
                                <UserInput
                                    name="checkinTime"
                                    value={this.state.itinerary.hotelList.checkinTime}
                                    onChange={this.onChange} />

                                <h4>Hotel Check-Out</h4>
                                <label>Check-out Date</label>
                                <SelectDate
                                    name="checkoutDate"
                                    onChange={this.onChange}
                                    value={this.state.itinerary.hotelList.checkoutDate} />

                                <label>Check-out Time</label>
                                <UserInput
                                    name="checkoutTime"
                                    value={this.state.itinerary.hotelList.checkoutTime}
                                    onChange={this.onChange} />

                                <Toast toast="Integrate Changes" className="button blue darken-1">
                                    Update
                                    <i className="material-icons right">add_circle</i>
                                </Toast>
                            </HotelModal>
                        </Col>
                        <Col s={2}>
                            {/* ADD EVENT */}

                            <ReactModal>
                                <h4>Activities</h4>

                                {/* <Row>
                                    <ModalInput
                                        onChange={this.onChange}
                                        name="activityName"
                                        value={this.state.activityName}
                                        placeholder="Activity" />
                                </Row>
                                <SelectDate
                                    name="activityDate"
                                    onChange={this.onChange}
                                    value={this.state.activityDate}
                                    placeholder="Pick a Date" /> */}

                                {/* <Container value={this.state.activityTime}>

                                    <Hour
                                        onChange={this.handleInputChange}
                                        name="act_hour" /><Minute
                                        name="act_min"
                                        onChange={this.handleInputChange} />
                                    <Timezone
                                        name="act_time"
                                        onChange={this.handleInputChange} />
                                </Container> */}
                                <button onClick={this.handleUpdate}>
                                    <i className="material-icons right">add_circle</i>
                                    Add
                                </button>
                            </ReactModal>
                        </Col>
                        <Col s={2}>
                            <FormButton onClick={this.handleUpdate}>
                                Update
                            </FormButton>
                        </Col>
                    </form>
                    <Col s={2}>
                        <a href={"/itinerary/pass/" + this.state.itinerary.passengername}>
                            <ItineraryButton>Go to Itinerary</ItineraryButton>
                        </a>
                    </Col>
                </RowContainer>
            </div >

        )
    }
}

export default Update