import React from "react";
import { Row, Col, Toast } from "react-materialize";
import { RowContainer, ReactModal, FlightModal, HotelModal, UserInput, SelectDate, Hour, Minute, Timezone, FormButton, ItineraryButton, Container, ModalInput } from "../Input";
import UpdateHotel from './updateHotel'
import UpdateActivity from './updateActivity'
const UpdateItem = props => {
    console.log(props)
    return (
        <div id="form-div">
            <h4>Hey {props.passengername}</h4>

            <h5>You can update your trip to {props.destination}</h5>
            <RowContainer>
                <form>
                    <Row>
                        <Col s={3}>
                            <label>Destination</label>
                            <UserInput
                                type="text"
                                name="destination"
                                icon="public"
                                value={props.destination}
                                onChange={props.onChange} />
                        </Col>
                    </Row>
                    <Row>
                        <Col s={3}>
                            <label>Start Date</label>
                            <SelectDate
                                name="startDate"
                                icon="public"
                                value={props.startDate}
                                onChange={props.onChange} />
                        </Col>
                        <Col s={3}>
                            <label>End Date</label>
                            <SelectDate
                                name="endDate"
                                icon="public"
                                value={props.endDate}
                                onChange={props.onChange} />
                        </Col>
                    </Row>
                    <Col>
                        <FlightModal>
                            <Row>
                                <h4>Flight Details</h4>
                                <Col>
                                    <label>Flight Number</label>
                                    <UserInput
                                        type="text"
                                        name="flightnumber"
                                        icon="local_airport"
                                        value={props.flightnumber}
                                        onChange={props.onChange} />
                                </Col>
                                <Col>
                                    <label>Airport</label>
                                    <UserInput
                                        type="text"
                                        name="airport"
                                        icon="local_airport"
                                        value={props.airport}
                                        onChange={props.onChange} />
                                </Col>
                            </Row>
                            <h4>First Departure</h4>
                            <Row>
                                <Col>
                                    <label>Departure Time</label>
                                    <SelectDate
                                        name="firstDepDate"
                                        onChange={props.onChange}
                                        value={props.firstDepDate} />
                                </Col>
                                <Col>
                                </Col>
                                <Col>
                                    <label>Departure Time</label>
                                    <UserInput
                                        name="firstDepTime"
                                        value={props.firstDepTime}
                                        icon="access_time"
                                        onChange={props.onChange} />
                                </Col>
                            </Row>
                            <h4>First Arrival</h4>
                            <Row>
                                <Col>
                                    <label>Arrival Date</label>
                                    <SelectDate
                                        name="firstarrivalDate"
                                        onChange={props.onChange}
                                        value={props.firstarrivalDate} />
                                </Col>
                                <Col>
                                </Col>
                                <Col>
                                    <label>Arrival Time</label>
                                    <UserInput
                                        name="firstarrivalTime"
                                        icon="access_time"
                                        value={props.firstarrivalTime}
                                        onChange={props.onChange} />
                                </Col>
                            </Row>
                            <h4>Second Departure</h4>
                            <Row>
                                <Col>
                                    <label>Departure Date</label>
                                    <SelectDate
                                        name="seconddepDate"
                                        onChange={props.onChange}
                                        value={props.seconddepDate} />
                                </Col>
                                <Col>
                                </Col>
                                <Col>
                                    <label>Departure Time</label>
                                    <UserInput
                                        name="seconddepTime"
                                        icon="access_time"
                                        value={props.seconddepTime}
                                        onChange={props.onChange} />
                                </Col>
                            </Row>
                            <h4>Second Arrival</h4>
                            <Row>
                                <Col>
                                    <label>Arrival Date</label>
                                    <SelectDate
                                        name="secondarrivalDate"
                                        onChange={props.onChange}
                                        value={props.secondarrivalDate} />
                                </Col>
                                <Col></Col>
                                <Col>
                                    <label>Arrival Time</label>
                                    <UserInput
                                        name="secondarrivalTime"
                                        icon="access_time"
                                        onChange={props.onChange}
                                        value={props.secondarrivalTime} />
                                </Col>
                            </Row>
                            <Toast toast="Integrate Changes" className="light-blue lighten-3 waves-effect waves-light btn-small">
                                Update
                                    <i className="material-icons right">add_circle</i>
                            </Toast>
                        </FlightModal>
                    </Col>

                    <Col>
                        <HotelModal>

                            {props.hotelList.map((hotel, i) =>

                                <div key={i}>
                                    <UpdateHotel
                                        hotelName={hotel.hotelName}
                                        checkinDate={hotel.checkinDate}
                                        checkinTime={hotel.checkinTime}
                                        checkoutDate={hotel.checkoutDate}
                                        checkoutTime={hotel.checkoutTime}
                                        updateHotel={props.updateHotel}
                                        index={i}
                                    />
                                    <Row>
                                        <button onClick={() => { props.delHotel(i) }}>Delete</button>
                                    </Row>

                                </div>


                            )}

                            <h1>Add Hotel</h1>
                            <label>Hotel Name</label>
                            <Row>
                                <ModalInput
                                    name="newhotelName"
                                    icon="room_service"
                                    value={props.hotelName}
                                    onChange={props.handleInputChange}
                                />
                            </Row>
                            <Row>
                                <Col>
                                    <label>Check-in Date</label>
                                    <SelectDate
                                        name="newcheckinDate"
                                        value={props.checkinDate}
                                        onChange={props.handleInputChange}
                                    />
                                </Col>
                                <Col></Col>
                                <Col>
                                    <label>Check-in Time</label>
                                    <UserInput
                                        name="newcheckinTime"
                                        icon="access_time"
                                        value={props.checkinTime}
                                        onChange={props.handleInputChange}
                                    />
                                </Col>
                            </Row>

                            <h4>Hotel Check-Out</h4>
                            <Row>
                                <Col>
                                    <label>Check-out Date</label>
                                    <SelectDate
                                        name="newcheckoutDate"
                                        onChange={props.onChange}
                                        value={props.checkoutDate}
                                    />
                                </Col>
                                <Col>
                                    <label>Check-out Time</label>
                                    <UserInput
                                        name="newcheckoutTime"
                                        value={props.checkoutTime}
                                        onChange={props.handleInputChange}
                                    />
                                </Col>
                            </Row>


                            {/* <Toast toast="Integrate Changes" className="light-blue lighten-3 waves-effect waves-light btn-small">
                                Update
                                    <i className="material-icons right">add_circle</i>
                            </Toast> */}
                            <button onClick={props.addHotel}>ADD HOTEL</button>
                        </HotelModal>
                    </Col>
                    <Col s={2}>
                        <ReactModal>

                            {props.activityList.map((act, i) =>
                                <div key={i}>
                                    <UpdateActivity
                                        updateActivity={props.updateActivity}
                                        delActivity={props.delActivity}
                                        activityName={act.activityName}
                                        activtyDate={act.activityDate}
                                        activityTime={act.activtyTime}
                                        index={i}

                                    />
                    
                                </div>)}
                                <Row>
                                    <h1>Add Activity</h1>
                                        <ModalInput
                                            onChange={props.handleInputChange}
                                            name="newactivityName"
                                            value={props.activityName}
                                            icon="directions_walk"
                                            placeholder="Activity" />
                                    </Row>
                                    <Row>
                                        <Col>
                                            <label>Activity Date</label>
                                            <SelectDate
                                                name="newactivityDate"
                                                onChange={props.handleInputChange}
                                                value={props.activityDate} />
                                        </Col>
                                        <Col>
                                            <UserInput
                                                name="newactivityTime"
                                                icon="access_time"
                                                value={props.activityTime}
                                                onChange={props.handleInputChange} 
                                                />
                                        </Col>
                                    </Row>
                                    <Row>
                                        <button onClick={props.addActivity}>Add Activity</button>
                                    </Row>
                            {/* <Toast toast="Integrate Changes" className="light-blue lighten-3 waves-effect waves-light btn-small">
                                Update
                                <i className="material-icons right">add_circle</i>
                            </Toast> */}
                        </ReactModal>
                    </Col>
                </form>
            </RowContainer>
            <div className="divider"></div>
            <br />
            <Col>
                <FormButton onClick={props.handleUpdate}>
                    Update
                </FormButton>
            </Col>
            <br />
            <Col>
                <a href={"/itinerary/pass/" + props.passengername}>
                    <ItineraryButton>VIEW </ItineraryButton>
                </a>
            </Col>

        </div >
    )
}

export default UpdateItem