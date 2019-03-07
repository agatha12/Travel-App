import React, { Component } from "react";
import API from "../utils/API";
import PropTypes from 'prop-types'
import { Row, Col, Toast } from "react-materialize";
import { RowContainer, ReactModal, FlightModal, HotelModal, UserInput, SelectDate, Hour, Minute, Timezone, FormButton, ItineraryButton, Container, ModalInput } from "../components/Input";
// import SearchFlight from "../components/SearchFlightForm";
// import FlightForm_Long from "../components/FlightForm_Long";
import "./style.css";
import UpdateItem from "../components/Update/update"




class Update extends Component {

    state = {
        
        itinerary: {
            flightnumber: '',
            airport: '',
            destination: '',
            popcorn: '',

            firstDepDate: '',
            firstDepTime: '',
            firstarrivalDate: '',
            firstarrivalTime: '',

            seconddepDate: '',
            seconddepTime: '',
            secondarrivalDate: '',
            secondarrivalTime: '',
            
            hotelList: [
                {
                    hotelName: '',
                    checkinDate: '',
                    checkinTime: '',
                    checkoutTime: '',
                    checkoutDate: ''
                }
            ],

            activityList: [
                {
                    activityName: '',
                    activityDate: '',
                    activityTime: ''
                }
            ]

        }
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

    handleUpdate = e => {

        e.preventDefault();

        const { flightnumber, airport, destination,
            firstDepDate, firstDepTime, firstarrivalDate,
            firstarrivalTime, seconddepDate, seconddepTime,
            secondarrivalDate, secondarrivalTime, hotelList,
            // hotelName, checkinDate, checkinTime,
            // checkoutDate, checkoutTime
        } = this.state.itinerary

        alert("Update Complete");

        API.updateForm(this.props.match.params.id, {
            flightnumber, airport, destination,
            firstDepDate, firstDepTime, firstarrivalDate,
            firstarrivalTime, seconddepDate, seconddepTime,
            secondarrivalDate, secondarrivalTime, hotelList,
            // hotelName, checkinDate, checkinTime,
            // checkoutDate, checkoutTime
        }).then((result) => {
                console.log(result.data)
                // this.props.history.push("/itinerary/" + this.props.match.params.id)
            })
        console.log(this.state)
    }

    render() {
        
        console.log(this.state.itinerary)
        
        return (
            <div>
                <UpdateItem
                    passengername={this.state.itinerary.passengername}
                    destination={this.state.itinerary.destination}
                    flightnumber={this.state.itinerary.flightnumber}
                    airport={this.state.itinerary.airport}

                    firstDepDate={this.state.itinerary.firstDepDate}
                    firstDepTime={this.state.itinerary.firstDepTime}
                    firstarrivalDate={this.state.itinerary.firstarrivalDate}
                    firstarrivalTime={this.state.itinerary.firstarrivalTime}

                    seconddepDate={this.state.itinerary.seconddepDate}
                    seconddepTime={this.state.itinerary.seconddepTime}
                    secondarrivalDate={this.state.itinerary.secondarrivalDate}
                    secondarrivalTime={this.state.itinerary.secondarrivalTime}
                    
                    hotelList={this.state.itinerary.hotelList}
                    activityList={this.state.itinerary.activityList}

                    handleUpdate={this.handleUpdate}
                    onChange={this.onChange} />
            </div>

        )
    }
}

export default Update