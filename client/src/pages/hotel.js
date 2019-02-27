import React, { Component } from 'react';
import axios from 'axios';
import { request } from 'https';
import API from '../utils/API';
import { Input, Year, Month, Day, FormButton } from "../components/Input";


// let queryURL = "https://cors-anywhere.herokuapp.com/https://api.makcorps.com/enterprise/v2/"

let queryURL = "https://cors-anywhere.herokuapp.com/https://api.makcorps.com/enterprise/v2/miami/2019-05-10/2019-05-17"

// https://cors-anywhere.herokuapp.com/https://api.makcorps.com/enterprise/v2/miami/2019-05-10/2019-05-17

class Hotel extends Component {
    constructor(props) {
        super(props);

        this.state = {
            tokenerer: "",
            userCity: "",
            superHotel: [],
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

        console.log("is the token the same" + this.state.tokenerer)
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

                console.log(this.state.hoteler)

            }).catch(function (error) {

                console.log("Hotel call errors " + error);
            });
        this.renderHotelInfo();

    }

    renderHotelInfo = () => {
        if (this.state.hoteler.comparison){
            return (
                <div>
                    {this.state.hoteler.comparison.map(eachHotel => {
                        return (
                            <p>{eachHotel.hotel}</p>
                        )
                        })
                    }
                </div>
            )
        }
        else {
            return (
                <h3>NO RESULTS BOI</h3>
            )
        }
    }

    render() {
        return (
            <div>
                <p>This is your token {this.state.tokenerer}</p>
                <p>This is your hotel {this.state.hoteler}</p>

                <form>
                    <Input
                        name="userCity"
                        placeholder="Enter City"
                        value={this.state.userCity}
                        onChange={this.handleInputChange} />
                    <FormButton onClick={this.handleFormButton}>
                        Submit
                    </FormButton>
                </form>

            </div>
        );

    }
}
export default Hotel;







