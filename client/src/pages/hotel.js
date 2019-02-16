
import React, { Component } from 'react';
import axios from 'axios';
import { request } from 'https';
import API from '../utils/API';

// let queryURL = "https://cors-anywhere.herokuapp.com/https://api.makcorps.com/enterprise/v2/"

let queryURL = "https://cors-anywhere.herokuapp.com/https://api.makcorps.com/enterprise/v2/miami/2019-05-10/2019-05-17"

// https://cors-anywhere.herokuapp.com/https://api.makcorps.com/enterprise/v2/miami/2019-05-10/2019-05-17

class Hotel extends Component {
    constructor(props) {
        super(props);

        this.state = {
            tokenerer: "",
            userCity: "miami",
            startYear: "2019",
            startMonth: "05",
            startDay: "10",
            endYear: "2019",
            endMonth: "05",
            endDay: "17",
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
        })

        const url = this.makeUserCity();

        console.log("is the token the same" + this.state.tokenerer)

        this.hotelCaller();
            // axios.get(url, { headers: { Authorization: 'JWT ' + this.state.tokenerer } })

            //     .then(response => {
            //         this.setState({
            //             hoteler: response.data.comparison[0].Hotel,
            //             isLoading: false
            //         })

            //         console.log(this.state.hoteler)

            //     })
            //     .catch(function (error) {
            //         console.log("Hotel call errors " + error);
            //     })
        }
    

handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
        [name]: value
    });
}

    // let queryURL = "https://cors-anywhere.herokuapp.com/https://api.makcorps.com/enterprise/v2/miami/2019-05-10/2019-05-17"


makeUserCity = () => {
        const { baseURL, userCity, startYear, startMonth, startDay, endYear, endMonth, endDay } = this.state;
        const totalURL = `${baseURL}/${userCity}/${startYear}-${startMonth}-${startDay}/${endYear}-${endMonth}-${endDay}`;
        console.log("YOU MADE THIS URL " + totalURL);
        return totalURL;
};


    handleFormSubmit = event => {
        event.preventDefault()
            .then(res => {
                if (res.data.status === "error") {
                    throw new Error(res.data.message);
                }
                this.setState({ results: res.data.message, error: "" });
            })
            .catch(err => this.setState({ error: err.message }));
    };

    hotelCaller = () => {

        const url = this.makeUserCity();

        axios.get(url, { headers: { Authorization: 'JWT ' + this.state.tokenerer } })

            .then(response => {
                this.setState({
                    hoteler: response.data.comparison[0].Hotel
                })

                console.log(this.state.hoteler)

            }).catch(function (error) {

                console.log("Hotel call errors" + error);
            });
    
    }

    render() {
        return (
            <div>
                <p>This is your token {this.state.tokenerer}</p>
                <p>This is your hotel {this.state.hoteler}</p>

            </div>
        );

    }
}
export default Hotel;







