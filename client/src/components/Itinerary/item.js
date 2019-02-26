import React from "react";
import { DeleteButton } from '../Input/index';
import Moment from "react-moment";
import { Col, Row, Card, CardTitle } from "react-materialize";
import "./style.css";
// import Plane from "../images/plane.jpg";
import Plane from "../../images/plane.jpg";
import Hotel from "../../images/hotel.jpg";
import Activity from '../../images/event.jpg';

const Item = props => {
    
return(

<div>
                <div className="general">
                    <h2>Hello {props.passengername}! </h2>
                    <h4>Here's your itinerary for your trip to {props.destination}.</h4>
                </div>
                <Col>
                <Card className="small flight" header={<CardTitle reveal image={Plane} waves='light'>Flight Details</CardTitle>}
                title = "Check your flight"
                reveal= { 
                <div>
                    <Row>
                    <Col s={6}>
                    <div>
                    {!props.firstDepDate ? 
                        (<p className="text-center">No Date to Display!</p>) 
                        : (<div>
                        <p><Moment format="MM/DD/YYYY">{props.firstDepDate}</Moment> {props.firstDepTime}</p>
                        </div>)}
                    </div>
                    </Col>
                    <Col s={6}>
                    <div>
                    {!props.airport ? 
                        (<p className="text-center">No Date to Display!</p>) 
                        : (<div>
                            <p>Departure from {props.airport}</p>
                        </div>)}
                    </div>
                    </Col>
                    </Row>
                    <Row>
                    <Col s={6}>
                            <p><Moment format="MM/DD/YYYY">{props.firstarrivalDate}</Moment> {props.firstarrivalTime}</p>
                        </Col>
                        <Col s={6}>
                            <p>Arrive to {props.destination}</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col s={6}>
                            <p><Moment format="MM/DD/YYYY">{props.seconddepDate}</Moment> {props.seconddepTime}</p>
                        </Col>
                        <Col s={6}>
                            <p>Departure from {props.destination}</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col s={6}>
                            <p><Moment format="MM/DD/YYYY">{props.secondarrivalDate}</Moment> {props.secondarrivalTime}</p>
                        </Col>
                        <Col s={6}>
                            <p>Arrive at {props.airport}</p>
                        </Col>
                    </Row>
                </div>}>
                    <p>Flight Number: {props.flightnumber} Airport: {props.airport} </p>
                </Card>
                </Col>

                <Card className="small hotel" header={<CardTitle reveal image={Hotel} waves='light'>HOTEL</CardTitle>}
                title="Check Hotel Details"
                reveal= {
                    <div>
                    <Row>
                    <Col s={6}>
                        <p><Moment format="MM/DD/YYYY">{props.checkinDate}</Moment> {props.checkinTime}</p>
                    </Col>
                    <Col s={6}>
                        <p>Check-in at {props.hotelName}</p>
                    </Col>
                    </Row>
                    <Row>
                    <Col s={6}>
                        <p><Moment format="MM/DD/YYYY">{props.checkoutDate}</Moment> {props.checkoutTime}</p>
                    </Col>
                    <Col s={6}>
                        <p>Check out at {props.hotelName}</p>
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
                        <p><Moment format="MM/DD/YYYY">{props.activityDate}</Moment> {props.activityTime}</p>
                    </Col>
                    <Col s={6}>
                        <p>{props.listActivity}</p>
                    </Col>
                    </Row>
                    </div>}>
                </Card>

                <a href="/itinerary" className="deletebutton">
                    <DeleteButton onClick={props.deleteIti}>
                        Delete Itinerary
                </DeleteButton>
                </a>
            </div>
)
}
export default Item