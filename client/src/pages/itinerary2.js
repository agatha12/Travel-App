import React, { Component } from "react";
import API from "../utils/API";
import "./style.css";
// import Plane from "../images/plane.jpg";
import Item from '../components/Itinerary/item'
import { Button } from "react-materialize";
class Itinerary extends Component {

    state = {
        itinerary: []
    }

    componentDidMount() {
        this.getuserInput();
        setTimeout(() => { console.log(this.state) }, 2000)
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
    }

    render() {
        return (
            <div>
                {this.state.itinerary.length === 0 ?
                    (<div>
                        <h3 className="text-center">You haven't added a trip.</h3>
                        <a href="/itinerary"><Button>Itinerary</Button></a>
                    </div>) : (
                        <div>
                            {this.state.itinerary.map((item, index) => (
                                <Item
                                    key={index}
                                    _id={item._id}
                                    passengername={item.passengername}
                                    destination={item.destination}
                                    firstDepDate={item.firstDepDate}
                                    firstDepTime={item.firstDepTime}
                                    airport={item.airport}
                                    firstarrivalDate={item.firstarrivalDate}
                                    firstarrivalTime={item.firstarrivalTime}
                                    seconddepDate={item.seconddepDate}
                                    seconddepTime={item.seconddepTime}
                                    secondarrivalTime={item.secondarrivalTime}
                                    flightnumber={item.flightnumber}
                                    checkinDate={item.checkinDate}
                                    checkinTime={item.checkinTime}
                                    hotelName={item.hotelName}
                                    checkoutDate={item.checkoutDate}
                                    checkoutTime={item.checkoutTime}
                                    activityDate={item.activityDate}
                                    activityTime={item.activityTime}
                                    listActivity={item.listActivity}
                                    deleteIti={() => this.deleteIti(item._id)}
                                />
                            ))}
                        </div>
                    )}

            </div>
        )
    }
}

export default Itinerary;