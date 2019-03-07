import React from "react";
import { Row, Input, Col, Toast, Button, Chip } from "react-materialize";
import FlightFormLong from "../FlightForm_Long";
import { RowContainer, ReactModal, FlightModal, HotelModal, UserInput, SelectDate, Hour, Minute, Timezone, FormButton, ItineraryButton, Container, ModalInput } from "../Input";


export function FlightModalButton(props) {
    const {
        apiNoResults,
        firstDepDate, firstDepTime,
        firstarrivalDate, firstarrivalTime,
        seconddepDate, seconddepTime,
        secondarrivalDate, secondarrivalTime,
        handleInputChange,
        getValue
    } = props;

    return (
        <Col s={2}>
            <FlightModal disabled={apiNoResults} >

                <FlightFormLong
                    firstDepDate={firstDepDate}
                    firstDepTime={firstDepTime}

                    firstarrivalDate={firstarrivalDate}
                    firstarrivalTime={firstarrivalTime}

                    seconddepDate={seconddepDate}
                    seconddepTime={seconddepTime}

                    secondarrivalDate={secondarrivalDate}
                    secondarrivalTime={secondarrivalTime}

                    handleInputChange={handleInputChange}
                />
                <Button
                    floating
                    icon="add"
                    className='btn-floating btn-large waves-effect waves-light red sticky'
                    onClick={props.getValue}
                />
                
            </FlightModal>
        </Col>
    )
};

export function HotelModalButton(props) {
    const {
        hotelName,
        checkinDate, checkinTime,
        checkoutDate, checkoutTime,
        handleInputChange, pushHotel
    } = props;
    return (
        <Col s={2}>
            <HotelModal>
                <h4>Hotel Check-In</h4>
                <Chip>You can add multiple hotel bookings for each trip!</Chip>
                <div className="container">
                    <ModalInput
                        name="hotelName"
                        placeholder="Hotel Name"
                        icon="room_service"
                        value={hotelName}
                        onChange={handleInputChange} />
                </div>

                <Row>
                    <Col s={6}>
                        <SelectDate
                            name="checkinDate"
                            onChange={handleInputChange}
                            value={checkinDate}
                            label="Pick a Date" />
                    </Col>
                    <Col s={6}>
                        <Container value={checkinTime}>
                            <Hour
                                onChange={handleInputChange}
                                name="check_hour" /><Minute
                                name="check_min"
                                onChange={handleInputChange} />
                            <Timezone
                                name="in_time"
                                onChange={handleInputChange} />
                        </Container>
                    </Col>
                </Row>
                <h4>Hotel Check-Out</h4>
                <Row>
                    <Col s={6}>

                        <SelectDate
                            name="checkoutDate"
                            onChange={handleInputChange}
                            value={checkoutDate}
                            label="Pick a Date"
                        />
                    </Col>
                    <Col s={6}>
                        <Container value={checkoutTime}>
                            <Hour
                                onChange={handleInputChange}
                                name="out_hour" /><Minute
                                name="out_min"
                                onChange={handleInputChange} />
                            <Timezone
                                name="out_time"
                                onChange={handleInputChange} />
                        </Container>
                    </Col>
                </Row>
                <Button
                    floating
                    icon="add"
                    className='btn-floating btn-large waves-effect waves-light red sticky'
                    onClick = {props.pushHotel}
                    // onClick={() => { window.Materialize.toast('Hotel Added', 1000) }}
                />
            </HotelModal>
        </Col>
    )
};

export function ActivitiesModalButton(props) {
    const {
        activityName, activityDate, activityTime,
        pushActivity,
        handleInputChange
    } = props;

    return (
        <Col>
            <ReactModal>
                <br/>
                <Chip>You can add multiple activities for each trip!</Chip>
                <Row>
                <ModalInput
                    onChange={handleInputChange}
                    name="activityName"
                    value={activityName}
                    icon="directions_walk"
                    placeholder="Activity" />
                </Row>
                <Row>
                    <Col s={6}>
                        <SelectDate
                            name="activityDate"
                            onChange={handleInputChange}
                            value={activityDate}
                            placeholder="Pick a Date" />
                    </Col>
                    <Col s={6}>
                        <Container value={activityTime}>
                            <Hour
                                onChange={handleInputChange}
                                name="act_hour" /><Minute
                                name="act_min"
                                onChange={handleInputChange} />
                            <Timezone
                                name="act_time"
                                onChange={handleInputChange} />
                        </Container>
                    </Col>
                </Row>
                <Button
                    floating
                    icon="add"
                    className='btn-floating btn-large waves-effect waves-light red sticky'
                    onClick={props.pushActivity}
                />
            </ReactModal>
        </Col>
    )
};