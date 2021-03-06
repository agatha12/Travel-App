import React, { Component } from 'react';
import axios from 'axios';
import { request } from 'https';
import API from '../utils/API';
import HotelForm from "../components/HotelForm"
import PreloaderAnimate from "../components/PreloaderAnimation"
import moment from 'moment';
import { Col, Row, Card, CardTitle, Carousel } from "react-materialize";


class Hotel extends Component {
    constructor(props) {
        super(props);

        this.state = {
            tokenerer: "",
            userCity: "",
            superHotel: [],
            hotelLength: "",
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
            this.setState({
                tokenerer: response.data,
            })
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
        this.setState({
            startYear: checkInYearFormat,
            startMonth: checkInMonthFormat,
            startDay: checkInDayFormat,
            endYear: checkOutYearFormat,
            endMonth: checkInMonthFormat,
            endDay: checkOutDayFormat
        });
    };


    makeUserCity = () => {
        const { baseURL, userCity, startYear, startMonth, startDay, endYear, endMonth, endDay } = this.state;
        const totalURL = `${baseURL}/${userCity}/${startYear}-${startMonth}-${startDay}/${endYear}-${endMonth}-${endDay}`;
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
                    console.log(this.state.superHotel.comparison)
                    this.renderHotelInfo()
                }).catch(function (error) {

                });
        });
    }

    renderHotelInfo = () => {
        return (
            this.state.superHotel.comparison.map((eachHotel, index) => {
                return (
                    <div className='collection-item grey lighten-3'
                        key={index}>
                        <Col m={6} s={12}>
                            <Card textClassName='black-text' title={eachHotel.Hotel} actions={[<strong>Vendor: {eachHotel.vendor2}</strong>]}>
                                <ul>
                                    <br />
                                    <li><strong>Amenities: </strong> {eachHotel.amenities}, {eachHotel["amenities(Executive)"]}, {eachHotel.features}</li>
                                    <br />
                                    <li><strong>Stars: </strong> {eachHotel.ratings}</li>
                                    <br />
                                    <li><strong>Price: </strong>{eachHotel["vendor2-price"]}</li>
                                </ul>
                            </Card>
                        </Col>
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
                <div className="center">
                    <HotelForm
                        handleInputChange={this.handleInputChange}
                        handleFormButton={this.handleFormButton}
                        userCity={this.state.userCity}
                        checkInDate={this.state.checkInDate}
                        checkOutDate={this.state.checkOutDate}
                    />
                </div>
                <br />
                <div>
                    {truHotel ?
                        <div className="container grey lighten-3">
                            <div className="collection grey lighten-3">
                                <blockquote>
                                    <br /><h4>{truHotel.length} hotel results</h4><br />
                                </blockquote>
                                {this.renderHotelInfo()}
                            </div>
                        </div>
                        :
                        (
                            checkLoading ?
                                <div className="container grey lighten-3">
                                    <div className="collection">
                                        <blockquote>
                                            <h4>Loading..</h4> <br />
                                        </blockquote>
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







