import React, { Component } from 'react';
import axios from 'axios';
import { request } from 'https';
import API from '../utils/API';
import HotelForm from "../components/HotelForm"
import PreloaderAnimate from "../components/PreloaderAnimation"
import moment from 'moment';
import hotel2 from "../images/hotel2.jpg";
import { Col, Row, Card, CardTitle, Carousel } from "react-materialize";



let queryURL = "https://api.makcorps.com/enterprise/v2/miami/2019-05-10/2019-05-17"


class Hotel extends Component {
    constructor(props) {
        super(props);

        this.state = {
            tokenerer: "",
            userCity: "",
            superHotel: [],
            checkInDate: "",
            startYear: "",
            startMonth: "",
            startDay: "",
            checkOutDate: "",
            endYear: "",
            endMonth: "",
            endDay: "",
            hotelRepsonse: "",
            baseURL: "https://cors-anywhere.herokuapp.com/https://api.makcorps.com/enterprise/v2",
            totalURL: "",
            isLoading: false,
            error: null
        };
    }

    componentDidMount() {

        API.searchHotel().then(response => {
            console.log("THIS IS FROM THE API " + response.data)
            this.setState({
                tokenerer: response.data,
            })
            console.log("is the token the same " + this.state.tokenerer)
        })

    }


    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
        this.changeDateWithMoment();
    }

    changeDateWithMoment = () => {
        let localCheckInDate = moment(this.state.checkInDate, 'DD MMMM YYYY');
        let localCheckOutDate = moment(this.state.checkOutDate, 'DD MMMM YYYY');
        let checkInYearFormat = localCheckInDate.format('YYYY');
        let checkInMonthFormat = localCheckInDate.format('MM');
        let checkInDayFormat = localCheckInDate.format('DD');
        let checkOutYearFormat = localCheckOutDate.format('YYYY');
        let checkOutMonthFormat = localCheckOutDate.format('MM');
        let checkOutDayFormat = localCheckOutDate.format('DD');
        // console.log(firstDepDate.format('L'));
        this.setState({
            startYear: checkInYearFormat,
            startMonth: checkInMonthFormat,
            startDay: checkInDayFormat,
            endYear: checkOutYearFormat,
            endMonth: checkInMonthFormat,
            endDay: checkOutDayFormat
        });
    };

    // let queryURL = "https://cors-anywhere.herokuapp.com/https://api.makcorps.com/enterprise/v2/miami/2019-05-10/2019-05-17"


    makeUserCity = () => {
        const { baseURL, userCity, startYear, startMonth, startDay, endYear, endMonth, endDay } = this.state;
        const totalURL = `${baseURL}/${userCity}/${startYear}-${startMonth}-${startDay}/${endYear}-${endMonth}-${endDay}`;
        console.log("YOU MADE THIS URL " + totalURL);
        return totalURL;
    };


    handleFormButton = event => {
        event.preventDefault()
        this.hotelCaller();
    };

    hotelCaller = () => {
        const url = this.makeUserCity();
        this.setState({ isLoading: true }, () => {
            axios.get(url, { headers: { Authorization: 'JWT ' + this.state.tokenerer } })
                .then(response => {
                    this.setState({
                        superHotel: response.data,
                        isLoading: false
                    })
                    this.renderHotelInfo()
                }).catch(function (error) {

                    console.log("Hotel call errors " + error);
                });
        });
    }

    // preLoaderCircle = () => {

    //     return (
    //         <div class="progress">
    //             <div class="indeterminate"></div>
    //         </div>

    //     )
    // }

    renderHotelInfo = () => {
        console.log(this.state.superHotel.comparison)
        return (
            this.state.superHotel.comparison.map((eachHotel, index) => {
                return (

                    <div className='collection-item'
                        key={index}>
                        <ul>
                            <li><strong>Hotel: </strong> {eachHotel.Hotel}</li>
                            <li><strong>Amenities: </strong> {eachHotel.amenities}</li>
                            <li><strong>Stars: </strong> {eachHotel.ratings}</li>
                        </ul>
                    </div>

                )
            })
        )
    }

    render() {

        const truHotel = this.state.superHotel.comparison
        const checkLoading = this.state.isLoading
        return (
            <div>
                <h1>Find your hotel</h1>
                <HotelForm
                    handleInputChange={this.handleInputChange}
                    handleFormButton={this.handleFormButton}
                    userCity={this.state.userCity}
                    checkInDate={this.state.checkInDate}
                    checkOutDate={this.state.checkOutDate}
                />

                <div>
                    {truHotel ?
                        <div className="container">
                            <div className="collection">
                                <h1>  Hotel Results</h1><br/>
                                {this.renderHotelInfo()}
                            </div>
                        </div>
                        :
                        (
                            checkLoading ?
                                <div className="container">
                                    <div className="collection">
                                        <h1>Loading..</h1> <br/>
                                        <PreloaderAnimate />
                                    </div>
                                </div>
                                :
                                <p></p>
                        )
                    }
                </div>
            </div>
        );
    }
}

export default Hotel;







