import React, { Component } from "react";
import API from "../utils/API";
import { DeleteButton } from "../components/Input";
import Moment from "react-moment";
import { Col, Row, Card, CardTitle } from "react-materialize";
import "./style.css";
// import Plane from "../images/plane.jpg";
import Plane from "../images/plane.jpg";
import Hotel from "../images/hotel.jpg";
import Activity from "../images/event.jpg";

class Itinerary extends Component {

    state = {
        itinerary: []
    }

    componentDidMount() {
        this.getuserInput();
        setTimeout(() =>{console.log(this.state)}, 2000)
    }

    // gets user info for specific _id
    getuserInput() {
        API.getForm(this.props.match.params.id)
            .then(res => this.setState({ itinerary: res.data }))
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
            <div>
                <div className="general">
                    <h2>Hello {this.state.itinerary.passengername}! </h2>
                    <h4>Here's your itinerary for your trip to {this.state.itinerary.destination}.</h4>
                </div>
                <Col>
                <Card className="small flight" header={<CardTitle reveal image={Plane} waves='light'>Flight Details</CardTitle>}
                title = "Check your flight"
                reveal= { 
                <div>
                    <Row>
                    <Col s={6}>
                    <div>
                    {!this.state.itinerary.firstDepDate ? 
                        (<p className="text-center">No Date to Display!</p>) 
                        : (<div>
                        <p><Moment format="MM/DD/YYYY">{this.state.itinerary.firstDepDate}</Moment> {this.state.itinerary.firstDepTime}</p>
                        </div>)}
                    </div>
                    </Col>
                    <Col s={6}>
                    <div>
                    {!this.state.itinerary.airport ? 
                        (<p className="text-center">No Date to Display!</p>) 
                        : (<div>
                            <p>Departure from {this.state.itinerary.airport}</p>
                        </div>)}
                    </div>
                    </Col>
                    </Row>
                    <Row>
                    <Col s={6}>
                            <p><Moment format="MM/DD/YYYY">{this.state.itinerary.firstarrivalDate}</Moment> {this.state.itinerary.firstarrivalTime}</p>
                        </Col>
                        <Col s={6}>
                            <p>Arrive to {this.state.itinerary.destination}</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col s={6}>
                            <p><Moment format="MM/DD/YYYY">{this.state.itinerary.seconddepDate}</Moment> {this.state.itinerary.seconddepTime}</p>
                        </Col>
                        <Col s={6}>
                            <p>Departure from {this.state.itinerary.destination}</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col s={6}>
                            <p><Moment format="MM/DD/YYYY">{this.state.itinerary.secondarrivalDate}</Moment> {this.state.itinerary.secondarrivalTime}</p>
                        </Col>
                        <Col s={6}>
                            <p>Arrive at {this.state.itinerary.airport}</p>
                        </Col>
                    </Row>
                </div>}>
                    <p>Flight Number: {this.state.itinerary.flightnumber} Airport: {this.state.itinerary.airport} </p>
                </Card>
                </Col>

                <Card className="small hotel" header={<CardTitle reveal image={Hotel} waves='light'>HOTEL</CardTitle>}
                title="Check Hotel Details"
                reveal= {
                    <div>
                    <Row>
                    <Col s={6}>
                        <p><Moment format="MM/DD/YYYY">{this.state.itinerary.checkinDate}</Moment> {this.state.itinerary.checkinTime}</p>
                    </Col>
                    <Col s={6}>
                        <p>Check-in at {this.state.itinerary.hotelName}</p>
                    </Col>
                    </Row>
                    <Row>
                    <Col s={6}>
                        <p><Moment format="MM/DD/YYYY">{this.state.itinerary.checkoutDate}</Moment> {this.state.itinerary.checkoutTime}</p>
                    </Col>
                    <Col s={6}>
                        <p>Check out at {this.state.itinerary.hotelName}</p>
                    </Col>
                    </Row>
                    </div>}>
                </Card>

                <Card className="small activities" header={<CardTitle reveal image={Activity} waves='light'>ACTIVITIES</CardTitle>}
                title="Check Activities"
                reveal= {
                    <div>
                    <Row>
                    <Col s={6}>
                        <p><Moment format="MM/DD/YYYY">{this.state.itinerary.activityDate}</Moment> {this.state.itinerary.activityTime}</p>
                    </Col>
                    <Col s={6}>
                        <p>{this.state.itinerary.listActivity}</p>
                    </Col>
                    </Row>
                    </div>}>
                </Card>

                <a href="/itinerary" className="deletebutton">
                    <DeleteButton onClick={() => this.deleteIti(this.state.itinerary._id)}>
                        Delete Itinerary
                </DeleteButton>
                </a>
            </div>
        )
    }
}

export default Itinerary;