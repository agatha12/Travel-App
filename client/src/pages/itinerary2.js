import React, { Component } from "react";
import API from "../utils/API";
import Item from '../components/Itinerary/item';
import { NewFooter } from "../components/Footer";

class Itinerary extends Component {

    state = {
        itinerary: []
    }

    componentDidMount() {
        this.getuserInput();
        setTimeout(() => { console.log(this.state.itinerary) }, 2000)
    }

    // gets user info for specific _id
    getuserInput() {
        API.getPass(this.props.match.params.id)
            .then(res => this.setState({ itinerary: res.data }))
            .catch(err => console.log(err));
    };

    deleteIti = id => {
        API.deleteForm(id)
        window.location.reload()
            .then(
                alert("You have just deleted your Itinerary"),

            )
            .catch(err => console.log(err))
    };

    activityList = (item, index) => {
        return (
            <Item
                key={index}
                _id={item._id}
                passengername={item.passengername}
                destination={item.destination}
                startDate={item.startDate}
                endDate={item.endDate}
                firstDepDate={item.firstDepDate}
                firstDepTime={item.firstDepTime}
                airport={item.airport}
                firstarrivalDate={item.firstarrivalDate}
                firstarrivalTime={item.firstarrivalTime}
                seconddepDate={item.seconddepDate}
                seconddepTime={item.seconddepTime}
                secondarrivalTime={item.secondarrivalTime}
                flightnumber={item.flightnumber}
                activityList={item.activityList}
                hotelList = {item.hotelList}
                deleteIti={() => this.deleteIti(item._id)} />
        )
    };

    render() {

        return (
            <div className="result_container">
                {this.state.itinerary.length === 0 ?
                    (<div className="no_trip">
                        <h3 className="text-center">You haven't added a trip.</h3>
                        <a href="/itinerary"><button className='light-blue lighten-3 btn-small'>
                        <i className="material-icons right">card_travel</i>
                        Itinerary
                        </button></a>
                    </div>) : (
                        <div>

                            {this.state.itinerary.map((item, index) => (this.activityList(item, index)))}
                            
                        </div>
                    )}
                <br />
                <NewFooter>
                    Test
                </NewFooter>
            </div>
        )
    }
}

export default Itinerary;