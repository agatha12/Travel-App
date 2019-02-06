import React, { Component } from "react";
import API from "../utils/API";
import {DeleteButton} from "../components/Input";

class Itinerary extends Component {
    
    state = {
        itinerary: []
    }

    componentDidMount() {
        this.getuserInput();
    }
    
    getuserInput() {
        API.getForm(this.props.match.params.id)
            .then(res => this.setState({itinerary: res.data}))
            .catch(err => console.log(err));
    };

    deleteIti = id => {
        API.deleteForm(id)
        .then(
            alert("You have just deleted your Itinerary")
        )
        .catch(err => console.log(err))
    }

    render() {
        return (
            <div id="form-div">
                <h1>Hello {this.state.itinerary.passengername}</h1>
                <p>Destination: {this.state.itinerary.destination}</p>
                <p>Flight Number: {this.state.itinerary.flightnumber}</p>
                <p>Airport: {this.state.itinerary.airport}</p>
                <h3>Departure Date</h3>
                <p>{this.state.itinerary.firstDepDate}</p>
                <h3>Arrival Date</h3>
                <p>{this.state.itinerary.firstarrivalDate}</p>
                <h3>Departure Date</h3>
                <p>{this.state.itinerary.seconddepDate}</p>
                <h3>Arrival Date</h3>
                <p>{this.state.itinerary.secondarrivalDate}</p>

                <DeleteButton onClick={() => this.deleteIti(this.state.itinerary._id)}>Delete Itinerary</DeleteButton>
            </div>
        )
    }
}

export default Itinerary;