import React from "react";
import { Button } from "react-materialize"
import Moment from "react-moment";
import { Col, Row, Card, CardTitle, SideNav, SideNavItem, Icon } from "react-materialize";
import "./style.css";
import Plane from "../../images/plane.jpg";
import Hotel from "../../images/hotel.jpg";
import Activity from '../../images/event.jpg';
import Wow from "../../images/wow.jpg";


const Item = props => {

    return (

        <div>
            {/* <div className="general">
                <h3>Trip to {props.destination}</h3>
                <h5>{props.passengername}</h5>
                <h5>From <Moment format="MMM D YYYY">{props.startDate}</Moment> to <Moment format="MMM D YYYY">{props.endDate}</Moment></h5>
            </div> */}
            <Col>
                <Card className="small trip"
                    header={<CardTitle reveal image={Wow} waves='light'>
                        <p className="trip_header">ITINERARY</p>
                    </CardTitle>}
                    title={"Trip to " + props.destination}
                    reveal={
                        <div>
                            <Row>
                                <Col s={6}>
                                    <p><Moment format="MMM D YYYY">{props.startDate}</Moment></p>
                                </Col>
                                <Col s={6}>
                                    <p>Start Date</p>
                                </Col>
                            </Row>
                            <Row>
                                <Col s={6}>
                                    <p><Moment format="MMM D YYYY">{props.endDate}</Moment></p>
                                </Col>
                                <Col s={6}>
                                    <p>End Date</p>
                                </Col>
                            </Row>
                        </div>}>
                    <SideNav
                        trigger={
                            <button className="light-blue lighten-3 waves-effect waves-light btn-small">
                                <i className="material-icons right">whatshot</i>
                                ACTION</button>}
                        options={{ closeOnClick: true }}>
                        <h5>Hey, {props.passengername} here's your trip to {props.destination}</h5>
                        <p>Not Happy? You can update or delete your trip to your liking.</p>
                        <SideNavItem>
                            <a href={"/itinerary/" + props._id} className="updatebutton">
                                <button className="light-blue lighten-3 waves-effect waves-light btn-small">
                                    <i className="material-icons right">edit</i>
                                    Update
                                </button>
                            </a>
                        </SideNavItem>
                        <SideNavItem>
                            <button className="deletebutton light-blue lighten-3 waves-effect waves-light btn-small" onClick={props.deleteIti}>
                                <i className="material-icons right">delete</i>
                                Delete
                            </button>
                        </SideNavItem>

                    </SideNav>

                </Card>

                <Card className="small flight"
                    header={<CardTitle reveal image={Plane} waves='light'>
                        <p className="flight_header">FLIGHT</p>
                    </CardTitle>}
                    title="Check your flight"
                    reveal={
                        <div>
                            <Row>
                                <Col s={6}>
                                    <div>
                                        {!props.firstDepDate ?
                                            (<p className="text-center">No Result</p>)
                                            : (<div>
                                                <p><Moment format="MMM D YYYY">{props.firstDepDate}</Moment> {props.firstDepTime}</p>
                                            </div>)}
                                    </div>
                                </Col>
                                <Col s={6}>
                                    <div>
                                        {!props.airport ?
                                            (<p className="text-center">No Result</p>)
                                            : (<div>
                                                <p>Departure from {props.airport}</p>
                                            </div>)}
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col s={6}>
                                    <div>
                                        {!props.firstarrivalDate ?
                                            (<p className="text-center">No Result</p>)
                                            : (<p><Moment format="MMM D YYYY">{props.firstarrivalDate}</Moment> {props.firstarrivalTime}</p>)
                                        }
                                    </div>
                                </Col>
                                <Col s={6}>
                                    <div>
                                        {!props.destination ?
                                            (<p className="text-center">No Result</p>)
                                            : (<p>Arrive to {props.destination}</p>)}

                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col s={6}>
                                    <div>
                                        {!props.seconddepDate ?
                                            (<p className="text-center">No Result</p>)
                                            : (<p><Moment format="MMM D YYYY">{props.seconddepDate}</Moment> {props.seconddepTime}</p>)}
                                    </div>
                                </Col>
                                <Col s={6}>
                                    <div>
                                        {!props.destination ?
                                            (<p className="text-center">No Result</p>)
                                            : (<p>Departure from {props.destination}</p>)}
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col s={6}>
                                    <div>
                                        {!props.secondarrivalDate ?
                                            (<p className="text-center">No Result</p>)
                                            : (<p><Moment format="MMM D YYYY">{props.secondarrivalDate}</Moment> {props.secondarrivalTime}</p>)}
                                    </div>
                                </Col>
                                <Col s={6}>
                                    <div>
                                        {!props.airport ?
                                            (<p className="text-center">No Result</p>)
                                            : (<p>Arrive at {props.airport}</p>)}
                                    </div>
                                </Col>
                            </Row>
                        </div>}>
                    <p>Flight Number: {props.flightnumber} Airport: {props.airport} </p>
                </Card>
            </Col>

            <Card className="small hotel"
                header={<CardTitle reveal image={Hotel} waves='light'>
                    <p className="hotel_header">HOTEL</p>
                </CardTitle>}
                title="Check Hotel Details"
                reveal={
                    <div>
                        {props.hotelList.map((hotel, i) =>
                            <div key={i}>
                                <Row>
                                    <Col s={6}>
                                        {!hotel.checkinDate ?
                                            (<p className="text-center">No Result</p>)
                                            : (<div>
                                                <p><Moment format="MMM D YYYY">{hotel.checkinDate}</Moment> {hotel.checkinTime}</p>
                                            </div>)}
                                    </Col>
                                    <Col s={6}>
                                        {!hotel.hotelName ?
                                            (<p className="text-center">No Result</p>)
                                            : (<div>
                                                <p>Check-in at {hotel.hotelName}</p>
                                            </div>)}
                                    </Col>
                                </Row>
                                <Row>
                                    <Col s={6}>
                                        {!hotel.checkoutDate ?
                                            (<p className="text-center">No Result</p>)
                                            : (<div>
                                                <p><Moment format="MMM D YYYY">{hotel.checkoutDate}</Moment> {hotel.checkoutTime}</p>
                                            </div>)}
                                    </Col>
                                    <Col s={6}>
                                        {!hotel.hotelName ?
                                            (<p className="text-center">No Result</p>)
                                            : (<div>
                                                <p>Check out at {hotel.hotelName}</p>
                                            </div>)}
                                    </Col>
                                </Row>
                            </div>
                        )}
                    </div>}>
            </Card>

            <Card className="small activities"
                header={<CardTitle reveal image={Activity} waves='light'>
                    <p className="events_header">ACTIVITIES</p>
                </CardTitle>}
                title="Check Activities"
                reveal={
                    <div>
                        {props.activityList.map((activity, i) =>
                            <Row key={i}>
                                <Col s={6}>
                                    {!activity.activityDate ?
                                        (<p className="text-center">No Result</p>)
                                        : (<div>
                                            <p><Moment format="MMM D YYYY">{activity.activityDate}</Moment> {activity.activityTime}</p>
                                        </div>)}
                                </Col>
                                <Col s={6}>
                                    {!activity.activityName ?
                                        (<p className="text-center">No Result</p>)
                                        : (<div>
                                            <p>{activity.activityName}</p>
                                        </div>)}
                                </Col>
                            </Row>
                        )}

                    </div>}>
            </Card>
        </div>
    )
}
export default Item