import React, { Component } from "react";
import API from "../utils/API";
import {DeleteButton} from "../components/Input";
import Moment from "react-moment";
import "./style.css";

class Itinerary extends Component {
    
    state = {
        itinerary: []
    }

    componentDidMount() {
        this.getuserInput();
    }
    
    // gets user info for specific _id
    getuserInput() {
        API.getForm(this.props.match.params.id)
            .then(res => this.setState({itinerary: res.data}))
            .catch(err => console.log(err));
    };

    deleteIti = id => {
        API.deleteForm(id)
        .then(
            alert("You have just deleted your Itinerary"),
            this.location.reload()
        )
        .catch(err => console.log(err))
    }

    render() {
        return (
            <div class="itinerary_id">
                <div className="general">
                <h2>Hello {this.state.itinerary.passengername}! </h2> 
                <h4>Here's your itinerary for your trip to {this.state.itinerary.destination}.</h4>
                <p>
                    Destination: {this.state.itinerary.destination} Flight Number: {this.state.itinerary.flightnumber} Airport: {this.state.itinerary.airport}
                </p>
                </div>

                <div className="firstDep">
                <p><Moment format="MM/DD/YYYY">{this.state.itinerary.firstDepDate}</Moment> {this.state.itinerary.firstDepTime}</p>
                <h3>Departure from {this.state.itinerary.airport} ➡ </h3>
                </div>
                
                <div className="firstArr">
                <p><Moment format="MM/DD/YYYY">{this.state.itinerary.firstarrivalDate}</Moment> {this.state.itinerary.firstarrivalTime}</p>
                <h3>Arrive to {this.state.itinerary.destination} ➡ </h3>
                </div>

                <div className="checkIn">
                <p>{this.state.itinerary.checkinTime}</p>
                <h3>Check-in at {this.state.itinerary.hotelName} ➡ </h3>
                </div>

                <div className="checkOut">
                <p>{this.state.itinerary.checkoutTime}</p>
                <h3>Check out at {this.state.itinerary.hotelName} ⬇ </h3>
                </div>

                <div className="secondDep">
                <p><Moment format="MM/DD/YYYY">{this.state.itinerary.seconddepDate}</Moment> {this.state.itinerary.seconddepTime}</p>
                <h3>⬅ Departure to {this.state.itinerary.airport}</h3>
                </div>
                
                <div className="secondArr">
                
                <p><Moment format="MM/DD/YYYY">{this.state.itinerary.secondarrivalDate}</Moment> {this.state.itinerary.secondarrivalTime}</p>
                
                <h3>Arrival Date</h3>
                </div>
                
                <a href="/home" className="deletebutton">
                <DeleteButton onClick={() => this.deleteIti(this.state.itinerary._id)}>
                Delete Itinerary
                </DeleteButton>
                </a>
            </div>
        )
    }
}

export default Itinerary;