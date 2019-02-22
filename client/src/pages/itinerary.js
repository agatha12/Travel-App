import React, { Component } from "react";
import { RowContainer, ReactModal, FlightModal, HotelModal, UserInput, SelectDate, Hour, Minute, Timezone, FormButton, ItineraryButton, Container, ModalInput } from "../components/Input";
import API from "../utils/API";
import { Row, Col, Button, Toast } from "react-materialize";

class Form extends Component {

    state = {
        useritinerary: [],
        passengername: "",
        flightnumber: "",
        airport: "",
        destination: "",
        firstDepDate: "",
        firstDepTime: "",
        firstarrivalDate: "",
        firstarrivalTime: "",
        hour: "",
        minute: "",
        checkinDate: "",
        hotelName: "",
        checkinTime: "",
        checkoutDate: "",
        checkoutTime: "",
        listActivity: "",
        activityDate: "",
        activityTime: "",
        seconddepDate: "",
        seconddepTime: "",
        secondarrivalDate: "",
        secondarrivalTime: ""
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    handleLoad = event => {
        event.preventDefault();
    }

    register(name) {
        console.log(name);
    }

    getValue = () => {
        console.log("Hey")
    }

    handleFormButton = event => {
        event.preventDefault();
        alert("You just made an itinerary!")
        API.saveForm({
            passengername: this.state.passengername,
            flightnumber: this.state.flightnumber,
            airport: this.state.airport,
            destination: this.state.destination,
            firstDepDate: this.state.firstDepDate,
            firstDepTime: this.state.dept_hour + ":" + this.state.dept_min + this.state.dept_time,
            firstarrivalDate: this.state.firstarrivalDate,
            firstarrivalTime: this.state.arr_hour + ":" + this.state.arr_min + this.state.arr_time,
            checkinDate: this.state.checkinDate,
            hotelName: this.state.hotelName,
            checkinTime: this.state.check_hour + ":" + this.state.check_min + this.state.in_time,
            checkoutDate: this.state.checkoutDate,
            checkoutTime: this.state.out_hour + ":" + this.state.out_min + this.state.out_time,
            listActivity: this.state.listActivity,
            activityDate: this.state.activityDate,
            activityTime: this.state.act_hour + ":" + this.state.act_min + this.state.act_time,
            seconddepDate: this.state.seconddepDate,
            seconddepTime: this.state.deptwo_hour + ":" + this.state.deptwo_min + this.state.deptwo_time,
            secondarrivalDate: this.state.secondarrivalDate,
            secondarrivalTime: this.state.arrtwo_hour + ":" + this.state.arrtwo_min + this.state.arrtwo_time
        }).then(res => this.setState({ useritinerary: res.data }))
            .catch(err => console.log(err));
    }

    render() {
        return (
            <div id="form-div">
                <h3>Itinerary Form</h3>
                 <RowContainer>
                    <form>
                        <Row>
                            <UserInput
                                name="passengername"
                                value={this.state.passengername}
                                onChange={this.handleInputChange}
                                label="Full Name" />
                            <UserInput
                                name="flightnumber"
                                label="Flight Number"
                                value={this.state.flightnumber}
                                onChange={this.handleInputChange} />
                        </Row>
                        <Row>
                            <UserInput
                                name="airport"
                                label="Airport"
                                value={this.state.airport}
                                onChange={this.handleInputChange} />
                            <UserInput
                                name="destination"
                                label="Destination"
                                value={this.state.destination}
                                onChange={this.handleInputChange} />
                        </Row>
                        {/* Button for modals */}
                        <Row onClick={this.handleLoad}>
                            <Col s={2}>
                                {/* ADD FLIGHT */}
                                <FlightModal>
                                    <h4>Departure Date</h4>
                                    <br />
                                    <SelectDate
                                        name="firstDepDate"
                                        onChange={this.handleInputChange}
                                        value={this.state.firstDepDate}
                                        label="Pick a Date" />

                                    <Container value={this.state.firstDepTime}>
                                        <Hour
                                            onChange={this.handleInputChange}
                                            name="dept_hour" /><Minute
                                            name="dept_min"
                                            onChange={this.handleInputChange} />
                                        <Timezone
                                            name="dept_time"
                                            onChange={this.handleInputChange} />
                                    </Container>
                                    <h4>Arrival Date</h4>
                                    <SelectDate
                                        name="firstarrivalDate"
                                        onChange={this.handleInputChange}
                                        value={this.state.firstarrivalDate}
                                        label="Pick a Date" />

                                    <Container value={this.state.firstarrivalTime}>
                                        <Hour
                                            onChange={this.handleInputChange}
                                            name="arr_hour" /><Minute
                                            name="arr_min"
                                            onChange={this.handleInputChange} />
                                        <Timezone
                                            name="arr_time"
                                            onChange={this.handleInputChange} />
                                    </Container>
                                    <h4>Departure Date</h4>
                                    <SelectDate
                                        name="seconddepDate"
                                        onChange={this.handleInputChange}
                                        value={this.state.seconddepDate}
                                        placeholder="Pick a Date" />

                                    <Container value={this.state.seconddepTime}>
                                        <Hour
                                            onChange={this.handleInputChange}
                                            name="deptwo_hour" /><Minute
                                            name="deptwo_min"
                                            onChange={this.handleInputChange} />
                                        <Timezone
                                            name="deptwo_time"
                                            onChange={this.handleInputChange} />
                                    </Container>

                                    <h4>Arrival Date</h4>
                                    <SelectDate
                                        name="secondarrivalDate"
                                        onChange={this.handleInputChange}
                                        value={this.state.secondarrivalDate}
                                        placeholder="Pick a Date" />

                                    <Container value={this.state.secondarrivalTime}>
                                        <Hour
                                            onChange={this.handleInputChange}
                                            name="arrtwo_hour" /><Minute
                                            name="arrtwo_min"
                                            onChange={this.handleInputChange} />
                                        <Timezone
                                            name="arrtwo_time"
                                            onChange={this.handleInputChange} />
                                    </Container>            
                                    <Toast toast="Added Flight" className="button blue darken-1" onClick={this.getValue}>
                                        Add 
                                        <i className="material-icons right">add_circle</i>
                                    </Toast>
                                </FlightModal>
                            </Col>
                            <Col s={2}>
                                {/* ADD HOTEL */}
                                <HotelModal>
                                    <h4>Hotel Check-In</h4>
                                    <Row>
                                    <ModalInput
                                        name="hotelName"
                                        placeholder="Hotel Name"
                                        value={this.state.hotelName}
                                        onChange={this.handleInputChange} />
                                    </Row>
                                    <SelectDate
                                        name="checkinDate"
                                        onChange={this.handleInputChange}
                                        value={this.state.checkinDate}
                                        label="Pick a Date"/>

                                    <Container value={this.state.checkinTime}>
                                        <Hour
                                            onChange={this.handleInputChange}
                                            name="check_hour" /><Minute
                                            name="check_min"
                                            onChange={this.handleInputChange} />
                                        <Timezone
                                            name="in_time"
                                            onChange={this.handleInputChange} />
                                    </Container>

                                    <h4>Hotel Check-Out</h4>
                                    <SelectDate
                                        name="checkoutDate"
                                        onChange={this.handleInputChange}
                                        value={this.state.checkoutDate}
                                        label="Pick a Date"
                                    />
                                    <Container value={this.state.checkoutTime}>
                                        <Hour
                                            onChange={this.handleInputChange}
                                            name="out_hour" /><Minute
                                            name="out_min"
                                            onChange={this.handleInputChange} />
                                        <Timezone
                                            name="out_time"
                                            onChange={this.handleInputChange} />
                                    </Container>
                                    <Toast toast="Added Hotel" className="button blue darken-1" onClick={this.getValue}>
                                    Add 
                                    <i className="material-icons right">add_circle</i>
                                    </Toast>
                                </HotelModal>
                            </Col>
                            <Col s={2}>
                                {/* ADD EVENT */}
                                <ReactModal>
                                    <h4>Activities</h4>
                                    <Row>
                                        <ModalInput
                                            onChange={this.handleInputChange}
                                            name="listActivity"
                                            value={this.state.listActivity}
                                            placeholder="Activity" />
                                    </Row>
                                    <SelectDate
                                        name="activityDate"
                                        onChange={this.handleInputChange}
                                        value={this.state.activityDate}
                                        placeholder="Pick a Date" />

                                    <Container value={this.state.activityTime}>

                                        <Hour
                                            onChange={this.handleInputChange}
                                            name="act_hour" /><Minute
                                            name="act_min"
                                            onChange={this.handleInputChange} />
                                        <Timezone
                                            name="act_time"
                                            onChange={this.handleInputChange} />
                                    </Container>
                                    <Toast toast="Added Event" className="button blue darken-1" onClick={this.getValue}> 
                                    <i className="material-icons right">add_circle</i>
                                    Add
                                    </Toast>
                                </ReactModal>
                            </Col>
                        </Row>
                        <Col s={2}>
                            <FormButton onClick={this.handleFormButton}>
                                Submit
                        </FormButton>
                        </Col>
                    </form>
                    <Col s={2}>
                        <a href={"/itinerary/" + this.state.useritinerary._id}>
                            <ItineraryButton>Go to Itinerary</ItineraryButton>
                        </a>
                    </Col>
                </RowContainer>
            </div >

        )
    }
}

export default Form;