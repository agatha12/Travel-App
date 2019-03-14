import React, { Component } from "react";
import API from "../utils/API";
import PropTypes from 'prop-types'
import { Row, Col, Toast } from "react-materialize";
import {Third} from "../components/ThirdSlider"
// import SearchFlight from "../components/SearchFlightForm";
// import FlightForm_Long from "../components/FlightForm_Long";
import "./style.css";
import UpdateItem from "../components/Update/update"




class Update extends Component {

    state = {
        
        itinerary: {
            destination: '',
            startDate: '',
            endDate: '',

            flightnumber: '',
            airport: '',            
            firstDepDate: '',
            firstDepTime: '',
            firstarrivalDate: '',
            firstarrivalTime: '',

            seconddepDate: '',
            seconddepTime: '',
            secondarrivalDate: '',
            secondarrivalTime: '',
            
            hotelList: [],

            activityList: []

        },
        newHotelList: [],
        newActivityList: [],
        newactivityName: "",
        newactivityDate: "",
        newactivityTime: "",
        newhotelName: "",
        newcheckinDate: "",
        newcheckinTime: "",
        newcheckoutDate: "",
        newcheckoutTime: ""
    }

    componentDidMount() {
        this.getuserInput();
        setTimeout(() => { console.log(this.state) }, 2000)
    }

    // gets user info for specific _id
    getuserInput() {
        API.getForm(this.props.match.params.id)
            .then(res => this.setState({ itinerary: res.data,
                                         newHotelList: res.data.hotelList,
                                         newActivityList: res.data.activityList }))
            .catch(err => console.log(err));
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    onChange = (e) => {
        const state = this.state.itinerary
        state[e.target.name] = e.target.value;
        this.setState({ itinerary: state });
    }

    handleUpdate = e => {

        e.preventDefault();

        const { startDate, endDate, 
            destination,flightnumber, airport, 
            firstDepDate, firstDepTime, firstarrivalDate,
            firstarrivalTime, seconddepDate, seconddepTime,
            secondarrivalDate, secondarrivalTime,
            // hotelName, checkinDate, checkinTime,
            // checkoutDate, checkoutTime
        } = this.state.itinerary
        const activityList = this.state.newActivityList
        const hotelList=this.state.newHotelList

        alert("Update Complete");
        console.log({
            startDate, endDate,
            flightnumber, airport, destination,
            firstDepDate, firstDepTime, firstarrivalDate,
            firstarrivalTime, seconddepDate, seconddepTime,
            secondarrivalDate, secondarrivalTime, hotelList,
            activityList
        })

        API.updateForm(this.props.match.params.id, {
            startDate, endDate,
            flightnumber, airport, destination,
            firstDepDate, firstDepTime, firstarrivalDate,
            firstarrivalTime, seconddepDate, seconddepTime,
            secondarrivalDate, secondarrivalTime, hotelList,
            activityList
            // hotelName, checkinDate, checkinTime,
            // checkoutDate, checkoutTime
        }).then((result) => {
                console.log(result.data)
                // this.props.history.push("/itinerary/" + this.props.match.params.id)
            })
        console.log(this.state)
    }
    delHotel = index => {
        console.log(index)

        let newArray = this.state.newHotelList
        newArray.splice((index), 1)
        
         this.setState({
             newHotelList: newArray
             
         })
    }
    updateHotel = (hotel, index) => {
        console.log(hotel)
        console.log(this.state.newHotelList[index])
        let newArray = []
        let hotels = this.state.newHotelList
        hotels.map((hotelFromList, i) => {

            if(i===index){
                console.log(index)
                console.log("equal"+i)
                newArray.push(hotel)
                if (i===(hotels.length-1)){
                    console.log(newArray)
                    this.setState({
                        newHotelList: newArray
                    })
            }
            }
         
            else{
                console.log(index)
                console.log("not equal"+i)
                newArray.push(hotels[i])
                if (i===(hotels.length-1)){
                    console.log(newArray)
                    this.setState({
                        newHotelList: newArray
                    })
            }
                
            }
        })
   
}

    addHotel = () => {
        let newHotel = {
            hotelName: this.state.newhotelName,
            checkinDate: this.state.newcheckinDate,
            checkinTime: this.state.newcheckinTime,
            checkoutDate: this.state.newcheckoutDate,
            checkoutTime: this.state.newcheckoutTime
        }
   
        let newArray = [...this.state.newHotelList, newHotel]

        
         this.setState({
             newHotelList: newArray
             
         })
         
    }

    delActivity = index => {
        console.log(index)
        console.log(this.state.newActivityList[index])
        let newArray = this.state.newActivityList
        newArray.splice((index), 1)
        
         this.setState({
             newActivityList: newArray
             
         })
    }
    
    updateActivity = (updatedActivity, index) => {
        console.log(updatedActivity)
        console.log(this.state.newActivityList[index])
        let newArray = []
        let activities = this.state.newActivityList
        activities.map((activityFromList, i) => {

            if(i===index){
                console.log(index)
                console.log("equal"+i)
                newArray.push(updatedActivity)
                if (i===(activities.length-1)){
                    console.log(newArray)
                    this.setState({
                        newActivityList: newArray
                    })
            }
            }
         
            else{
                console.log(index)
                console.log("not equal"+i)
                newArray.push(activities[i])
                if (i===(activities.length-1)){
                    console.log(newArray)
                    this.setState({
                        newActivityList: newArray
                    })
            }
                
            }
        })
   
}

    addActivity = () => {

        let newAct = {
            activityName: this.state.newactivityName,
            activityDate: this.state.newactivityDate,
            activityTime: this.state.newactivityTime
        }
        console.log(newAct)
        
        let newArray = [...this.state.newActivityList, newAct]
        console.log(newArray)
        
         this.setState({
             newActivityList: newArray
             
         })
    }
    render() {
        
        console.log(this.state)
        
        return (
            <div>
                <Third/>
                <UpdateItem
                    passengername={this.state.itinerary.passengername}
                    
                    destination={this.state.itinerary.destination}
                    startDate={this.state.itinerary.startDate}
                    endDate={this.state.itinerary.endDate}

                    flightnumber={this.state.itinerary.flightnumber}
                    airport={this.state.itinerary.airport}
                    firstDepDate={this.state.itinerary.firstDepDate}
                    firstDepTime={this.state.itinerary.firstDepTime}
                    firstarrivalDate={this.state.itinerary.firstarrivalDate}
                    firstarrivalTime={this.state.itinerary.firstarrivalTime}

                    seconddepDate={this.state.itinerary.seconddepDate}
                    seconddepTime={this.state.itinerary.seconddepTime}
                    secondarrivalDate={this.state.itinerary.secondarrivalDate}
                    secondarrivalTime={this.state.itinerary.secondarrivalTime}
                    
                    hotelList={this.state.newHotelList}
                    activityList={this.state.newActivityList}

                    hotelName={this.state.newhotelName}
                    checkinDate={this.state.newcheckinDate}
                    checkinTime={this.state.newcheckinTime}
                    checkoutDate={this.state.newcheckoutDate}
                    checkoutTime={this.state.newcheckoutTime}

                    activityName={this.state.newActivityName}
                    activityDate={this.state.newActivityDate}
                    activityTime={this.state.newActivityTime}

                    handleUpdate={this.handleUpdate}
                    onChange={this.onChange} 
                    handleInputChange={this.handleInputChange}
                    delHotel ={this.delHotel}
                    updateHotel={this.updateHotel}
                    delActivity={this.delActivity}
                    updateActivity={this.updateActivity}
                    addHotel ={this.addHotel}
                    addActivity={this.addActivity}/>
            </div>

        )
    }
}

export default Update