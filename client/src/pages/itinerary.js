import React, { Component } from "react";
import { RowContainer, UserInput, SelectDate, Hour, Minute, Timezone, FormButton, ItineraryButton, Container, ModalInput } from "../components/Input";
import API from "../utils/API";
import PropTypes from 'prop-types'
import { Row, Col } from "react-materialize";
import Intro from "../components/Intro";
import FlightFormLong from "../components/FlightForm_Long"
import { AreYouFlying2 } from "../components/AreYouFlying";
import { FlightModalButton, HotelModalButton, ActivitiesModalButton } from "../components/Modals";
import NotFlyingForm from "../components/NotFlyingForm";
import { GenerateSlider } from "../components/Slider";
import SearchFlightForm from "../components/SearchFlightForm"
import moment from 'moment';

class Form extends Component {
    state = {
        // amIFlying is IF 1 Shows API form if 0 (false) shows long form
        amIFlying: 'No',
        apiNoResults: '',
        test: '',

        response: {},
        airline: '',
        flNumber: '',
        year: '',
        month: '',
        day: '',
        depAirport: '',
        depDate: '',

        useritinerary: [],
        activityList: [],

        startDate: "",
        endDate: "",
        destination: "",

        passengername: "",
        flightnumber: "",
        airport: "",
        firstDepDate: "",
        firstDepTime: "",
        firstarrivalDate: "",
        firstarrivalTime: "",

        hour: "",
        minute: "",

        checkinDate: "",
        hotelList: [],
        hotelName: "",
        checkinTime: "",
        checkoutDate: "",
        checkoutTime: "",

        activityName: "",
        activityDate: "",
        activityTime: "",

        seconddepDate: "",
        seconddepTime: "",

        secondarrivalDate: "",
        secondarrivalTime: "",

    };

    // Get flight from api get result into response
    searchFlight = () => {
        let response;
        const { airline, flNumber, year, month, day, depAirport } = this.state;
        console.log(airline, flNumber, year, month, day, depAirport);
        API.searchFlight(
            {
                airline: airline,
                flNumber: flNumber,
                year: year,
                month: month,
                day: day,
                depAirport: depAirport
            })
            .then(res => {
                response = res.data;
                // if (res) {
                //     console.log('response attained')
                // }
                // Lets developer know what the error is
                if (response.error || (response.flightStatuses.length === 0)) {
                    console.log(res.data.error.errorMessage)
                    this.setState({
                        response: response,
                        apiNoResults: 0,
                    })
                } else {
                    let eachFlight = response.flightStatuses[0];
                    // console.log(flightInfo.flightStatuses.length)
                    this.setState({
                        response: response,
                        apiNoResults: 1,
                        flightnumber: (this.state.airline + this.state.flNumber),
                        airport: eachFlight.departureAirportFsCode,
                        firstDepDate: eachFlight.departureDate.dateLocal,
                        firstDepTime: moment(eachFlight.departureDate.dateLocal).format('LT'),
                        firstarrivalDate: eachFlight.arrivalDate.dateLocal,
                        firstarrivalTime: moment(eachFlight.arrivalDate.dateLocal).format('LT'),
                    })
                }


            })
            .catch(function (err) {
                console.log('ERROR')
                console.log(err)
            })
    };
    //Handles form event, lets user know it is checking for flight, then outputs results
    handleFlightFormApi = event => {
        event.preventDefault();
        alert("Checking for Flight");
        this.searchFlight();
    };
    // Changes firstDepDate into 3 parts: year, month, day
    changeDateWithMoment = () => {
        let firstDepDate = moment(this.state.depDate, 'DD MMMM YYYY');
        let yearFormat = firstDepDate.format('YYYY');
        let monthFormat = firstDepDate.format('MM');
        let dayFormat = firstDepDate.format('DD');
        // console.log(firstDepDate.format('L'));
        this.setState({
            year: yearFormat,
            month: monthFormat,
            day: dayFormat
        });
    };

    componentDidMount = () => {
        console.log(this.props.userName)
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
        this.changeDateWithMoment();

        console.log(this.state);
    };

    handleLoad = event => {
        event.preventDefault();
    };

    getValue = () => {
        console.log(this.state.useritinerary);
    }

    showAddFlightManually = () => {
        this.setState({ apiNoResults: "disabled" })
    };

    handleSubmitFlightData = () => {
    };

    userNotFlying = () => {
        // if user not flying
        this.setState({
            flightnumber: "Not Flying",
            airport: "None",

            firstDepTime: "N/A",
            firstarrivalTime: "N/A",

            seconddepTime: "N/A",
            secondarrivalTime: "N/A",
        })
    };

    handleFlightFormApi = event => {
        event.preventDefault();
        console.log("clicked on handleFlightFormApi");
        this.searchFlight();
    };

    pushActivity = () => {
        alert("Added Event")

        console.log("Here");

        let act = {
            activityName: this.state.activityName,
            activityDate: this.state.activityDate,
            activityTime: this.state.act_hour + ":" + this.state.act_min + this.state.act_time
        }

        this.setState({
            activityList: [...this.state.activityList, act]
        })
    };


    pushHotel = () => {

        alert("Added Hotel")

        console.log("Hotel");

        let newHotel = {
            hotelName: this.state.hotelName,
            checkinDate: this.state.checkinDate,
            checkinTime: this.state.check_hour + ":" + this.state.check_min + this.state.in_time,
            checkoutDate: this.state.checkoutDate,
            checkoutTime: this.state.out_hour + ":" + this.state.out_min + this.state.out_time
        }

        this.setState({
            hotelList: [...this.state.hotelList, newHotel]
        })

    };

    handleFormButton = event => {
        event.preventDefault();
        alert("You just made an itinerary!")
        API.saveForm({
            passengername: this.props.userName,
            flightnumber: this.state.flightnumber,
            airport: this.state.airport,
            destination: this.state.destination,
            startDate: this.state.startDate,
            endDate: this.state.endDate,
            firstDepDate: this.state.firstDepDate,
            firstDepTime: this.state.dept_hour + ":" + this.state.dept_min + this.state.dept_time,
            firstarrivalDate: this.state.firstarrivalDate,
            firstarrivalTime: this.state.arr_hour + ":" + this.state.arr_min + this.state.arr_time,
            hotelList: [...this.state.hotelList],
            seconddepDate: this.state.seconddepDate,
            seconddepTime: this.state.deptwo_hour + ":" + this.state.deptwo_min + this.state.deptwo_time,
            secondarrivalDate: this.state.secondarrivalDate,
            secondarrivalTime: this.state.arrtwo_hour + ":" + this.state.arrtwo_min + this.state.arrtwo_time,
            activityList: [...this.state.activityList]
        }).then(res => this.setState({ useritinerary: res.data }))
            .catch(err => console.log(err));
    };

    onRadioChange = e => {
        //changes string value to an interger. which will be used a boolean value for this.state.amIFlying
        const yesOrNo = parseInt(e.target.value)
        // const yesOrNo = e
        this.setState({ [e.target.name]: yesOrNo })
    };

    notFlyingForm = () => {
        return (
            <NotFlyingForm
                firstDepDate={this.state.firstDepDate}
                firstarrivalDate={this.state.firstarrivalDate}

                seconddepDate={this.state.seconddepDate}
                secondarrivalDate={this.state.secondarrivalDate}

                handleInputChange={this.handleInputChange}
            />
        )
    };

    renderLongForm = () => {
        return (
            <FlightFormLong
                firstDepDate={this.state.firstDepDate}
                firstDepTime={this.state.firstDepTime}

                firstarrivalDate={this.state.firstarrivalDate}
                firstarrivalTime={this.statefirstarrivalTime}

                seconddepDate={this.state.seconddepDate}
                seconddepTime={this.state.seconddepTime}

                secondarrivalDate={this.state.secondarrivalDate}
                secondarrivalTime={this.state.secondarrivalTime}

                handleInputChange={this.handleInputChange}
            />
        )
    }

    renderSearchFlight = () => {
        return (
            <SearchFlightForm
                handleFlightFormApi={this.handleFlightFormApi}
                handleInputChange={this.handleInputChange}
                airline={this.state.airline}
                flNumber={this.state.flNumber}
                depAirport={this.state.depAirport}
                year={this.state.year}
                month={this.state.month}
                day={this.state.day}
                depDate={this.state.depDate}
            />
        )
    };

    render() {
        // console.log(this.state.hotelList)
        return (
            <div id="form-div">
                <RowContainer>
                    <GenerateSlider/>
                <div className="container">
                    <Row>
                        <Col className="col s6 offset-s6">
                        <h1>Itinerary Form</h1>
                        <p>{this.props.userName}</p>
                        </Col>
                    </Row>

                    <Intro
                        destination={this.state.destination}
                        startDate={this.state.startDate}
                        endDate={this.state.endDate}
                        handleInputChange={this.handleInputChange} />
                    {/* <AreYouFlying2
                        // value={this.amIFlying}
                        onRadioChange={this.onRadioChange}
                    /> */}
                    {/* {this.state.amIFlying === 1 && this.renderSearchFlight()} */}
                    {this.renderLongForm()}
                    {/* {this.state.amIFlying === 1 && this.renderLongForm()}
                    {this.state.amIFlying === 0 && this.notFlyingForm()} */}
                    </div>
                    <br />
                    <Row onClick={this.handleLoad}>
                        <HotelModalButton
                            hotelName={this.state.hotelName}

                            checkinDate={this.state.checkinDate}
                            checkinTime={this.state.checkinTime}

                            checkoutDate={this.checkoutDate}
                            checkoutTime={this.state.checkoutDate}

                            handleInputChange={this.handleInputChange}
                            getValue={this.getValue}
                            pushHotel={() => this.pushHotel()}
                        />
                        <ActivitiesModalButton
                            activityName={this.state.activityName}
                            activityDate={this.state.activityDate}
                            activityTime={this.state.activityTime}
                            
                            handleInputChange={this.handleInputChange}
                            getValue={this.getValue}
                            pushActivity={() => this.pushActivity()}
                        />
                    </Row>
                    <Row>
                        <Col>
                            <FormButton onClick={this.handleFormButton}>
                                Submit
                        </FormButton>
                        </Col>
                    </Row>
                    <div className="divider"></div>
                    <br />
                    <Row>
                        <Col s={2}>
                            <a href={"/itinerary/pass/" + this.props.userName}>
                                <ItineraryButton>
                                    <i className="material-icons right">card_travel</i>
                                    View Trips
                                </ItineraryButton>
                            </a>
                        </Col>
                    </Row>
                </RowContainer>
            </div >
        )
    };
}; 

Form.props = {
    userName: PropTypes.String
}

export default Form;
