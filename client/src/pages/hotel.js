import React, { Component } from 'react';
import axios from 'axios';
import { request } from 'https';
import API from '../utils/API';
import HotelForm from "../components/HotelForm"
import moment from 'moment';


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
            isLoading: true,
            error: null
        };
    }

    componentDidMount() {

        API.searchHotel().then(response => {
            console.log("THIS IS FROM THE API " + response.data)
            this.setState({
                tokenerer: response.data,
                isLoading: false
            })
            console.log("is the token the same " + this.state.tokenerer)
            // this.hotelCaller();
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

        axios.get(url, { headers: { Authorization: 'JWT ' + this.state.tokenerer } })

            .then(response => {
                this.setState({
                    superHotel: response.data
                })
                console.log("0th response: " + response.data)
                console.log("First Hotel List State: " + this.state.superHotel.comparison[0])
                console.log("Second trip down the line " + this.state.superHotel.comparison[0].Hotel)
                console.log("Second trip down the line " + this.state.superHotel.comparison[1].Hotel)
                console.log("Second trip down the line " + this.state.superHotel.comparison[0].ratings)
                console.log("Second trip down the line " + this.state.superHotel.comparison[1]["review-highlights"])

                this.renderHotelInfo();
            }).catch(function (error) {

                console.log("Hotel call errors " + error);
            });

    }

    renderHotelInfo = () => {
        console.log(this.state.superHotel.comparison)
        return (

            this.state.superHotel.comparison.map((eachHotel, index) => {
                return (
                    <p key={index}>{eachHotel.Hotel}</p>
                )
            })
        )
    }

    render() {

        const truHotel = this.state.superHotel.comparison
        return (
            <div>
                <h1>Get Hotel</h1>
                <HotelForm
                    handleInputChange={this.handleInputChange}
                    handleFormButton={this.handleFormButton}
                    userCity={this.state.userCity}
                    checkInDate={this.state.checkInDate}
                    checkOutDate={this.state.checkOutDate}
                />
                <h1>Hotel Results</h1>

                <div>
                    {truHotel ?
                        <div>
                            {this.renderHotelInfo()}
                        </div>
                        : <p>No Results</p>
                    }
                </div>
            </div>
        );
    }
}

export default Hotel;







