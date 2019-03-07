import React, { Component } from "react";
import API from "../utils/API";
import PropTypes from 'prop-types'
import { Row, Col, Toast } from "react-materialize";
import {Third} from "../components/ThirdSlider"
// import SearchFlight from "../components/SearchFlightForm";
// import FlightForm_Long from "../components/FlightForm_Long";
import "./style.css";
import UpdateItem from "../components/Update/update"




class Update extends Component {

    state = {
        
        itinerary: {
            destination: '',
            startDate: '',
            endDate: '',

            flightnumber: '',
            airport: '',            
            firstDepDate: '',
            firstDepTime: '',
            firstarrivalDate: '',
            firstarrivalTime: '',

            seconddepDate: '',
            seconddepTime: '',
            secondarrivalDate: '',
            secondarrivalTime: '',
            
            hotelList: [],

            activityList: []

        },
        newHotelList: [],
        newActivityList: []
    }

    componentDidMount() {
        this.getuserInput();
        setTimeout(() => { console.log(this.state) }, 2000)
    }

    // gets user info for specific _id
    getuserInput() {
        API.getForm(this.props.match.params.id)
            .then(res => this.setState({ itinerary: res.data,
                                         newHotelList: res.data.hotelList,
                                         newActivityList: res.data.activityList }))
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

        const { startDate, endDate, 
            destination,flightnumber, airport, 
            firstDepDate, firstDepTime, firstarrivalDate,
            firstarrivalTime, seconddepDate, seconddepTime,
            secondarrivalDate, secondarrivalTime, hotelList, activityList,
            // hotelName, checkinDate, checkinTime,
            // checkoutDate, checkoutTime
        } = this.state.itinerary

        alert("Update Complete");

        API.updateForm(this.props.match.params.id, {
            startDate, endDate,
            flightnumber, airport, destination,
            firstDepDate, firstDepTime, firstarrivalDate,
            firstarrivalTime, seconddepDate, seconddepTime,
            secondarrivalDate, secondarrivalTime, hotelList,
            activityList,
            // hotelName, checkinDate, checkinTime,
            // checkoutDate, checkoutTime
        }).then((result) => {
                console.log(result.data)
                // this.props.history.push("/itinerary/" + this.props.match.params.id)
            })
        console.log(this.state)
    }
    delHotel = index => {
        console.log(index)
        console.log(this.state.itinerary.hotelList[index])
        let newArray = this.state.itinerary.hotelList
        newArray.splice((index), 1)
        
         this.setState({
             newHotelList: newArray
             
         })
    }

    delActivity = index => {
        console.log(index)
        console.log(this.state.itinerary.activityList[index])
        let newArray = this.state.itinerary.activityList
        newArray.splice((index), 1)
        
         this.setState({
             newActivityList: newArray
             
         })
    }
    render() {
        
        console.log(this.state.itinerary)
        
        return (
            <div>
                <Third/>
                <UpdateItem
                    passengername={this.state.itinerary.passengername}
                    
                    destination={this.state.itinerary.destination}
                    startDate={this.state.itinerary.startDate}
                    endDate={this.state.itinerary.endDate}

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
                    
                    hotelList={this.state.newHotelList}
                    activityList={this.state.newActivityList}

                    handleUpdate={this.handleUpdate}
                    onChange={this.onChange} 
                    delHotel ={this.delHotel}
                    delActivity={this.delActivity}/>
            </div>

        )
    }
}

export default Update