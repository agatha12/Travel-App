import React from 'react';
import { Row, Col, Toast } from "react-materialize";
import { RowContainer, ReactModal, FlightModal, HotelModal, UserInput, SelectDate, Hour, Minute, Timezone, FormButton, ItineraryButton, Container, ModalInput } from "../Input";



class UpdateHotel extends React.Component {
    state = {
        hotelName: "",
        checkinDate: "",
        checkinTime: "",
        checkoutDate: "",
        checkoutTime: "",
        index: ""
        }

    componentDidMount = () => {
        this.setState({
            hotelName: this.props.hotelName,
            checkinDate: this.props.checkinDate,
            checkinTime: this.props.checkinTime,
            checkoutDate: this.props.checkoutDate,
            checkoutTime: this.props.checkoutTime,
            index: this.props.index
        })
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };




  render() {
      console.log(this.state)
    return (
      <div>



                                     <label>Hotel Name</label>
                                    <Row>
                                        <ModalInput
                                            name="hotelName"
                                            icon="room_service"
                                            value={this.state.hotelName}
                                            onChange={this.handleInputChange} 
                                            />
                                    </Row>
                                    <Row>

<Col>
    <label>Check-in Date</label>
    <SelectDate
        name="checkinDate"
        value={this.state.checkinDate}
        onChange={this.handleInputChange} 
        />
</Col>
<Col></Col>
<Col>
    <label>Check-in Time</label>
    <UserInput
        name="checkinTime"
        icon="access_time"
        value={this.state.checkinTime}
        onChange={this.handleInputChange} 
        />
</Col>
</Row>



<h4>Hotel Check-Out</h4>
<Row>
    <Col>
        <label>Check-out Date</label>
        <SelectDate
            name="checkoutDate"
            onChange={this.handleInputChange}
             value={this.state.checkoutDate} 
            />
    </Col>
    <Col>
        <label>Check-out Time</label>
        <UserInput
            name="checkoutTime"
            value={this.state.checkoutTime}
            onChange={this.handleInputChange} 
            />
    </Col>
</Row> 
<Row>
                                        <button onClick={() => {
                                            let updatedHotel = {
                                                hotelName: this.state.hotelName,
                                                checkinDate: this.state.checkinDate,
                                                checkinTime: this.state.checkinTime,
                                                checkoutDate: this.state.checkoutDate,
                                                checkoutTime: this.state.checkoutTime    
                                            }
                                            let index = this.state.index
                                            this.props.updateHotel(updatedHotel, index)}}>Update</button>
                                    </Row>

        
      </div>
    );
  }
}



export default UpdateHotel
                                 
