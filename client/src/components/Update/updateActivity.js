import React from 'react';
import { Row, Col, Toast } from "react-materialize";
import { RowContainer, ReactModal, FlightModal, HotelModal, UserInput, SelectDate, Hour, Minute, Timezone, FormButton, ItineraryButton, Container, ModalInput } from "../Input";



class UpdateActivity extends React.Component {
    state = {
        activityName: "",
        activityDate:"",
        activityTime: "",
        index: ""
        }

        componentDidMount = () => {
            console.log(this.props)
            this.setState({
                activityName: this.props.activityName,
                activityDate: this.props.activtyDate,
                activityTime: this.props.activityTime,
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
      console.log(this.props)
    return (
      <div>
                                    <Row>
                                        <ModalInput
                                            onChange={this.handleInputChange}
                                            name="activityName"
                                            value={this.state.activityName}
                                            icon="directions_walk"
                                            placeholder="Activity" />
                                    </Row>
                                    <Row>
                                        <Col>
                                            <label>Activity Date</label>
                                            <SelectDate
                                                name="activityDate"
                                                onChange={this.handleInputChange}
                                                value={this.state.activityDate} />
                                        </Col>
                                        <Col>
                                            <UserInput
                                                name="activityTime"
                                                icon="access_time"
                                                value={this.state.activityTime}
                                                onChange={this.handleInputChange} 
                                                />
                                        </Col>
                                    </Row>
<Row>
                                        <button onClick={() => {
                                            let updatedActivity = {
                                                activityName: this.state.activityName,
                                                activityDate: this.state.activityDate,
                                                activityTime: this.state.activityTime
                                            }
                                            let index = this.state.index
                                            this.props.updateActivity(updatedActivity, index)}}>Update Activity</button>
                                            <button onClick={() => { this.props.delActivity(this.state.index) }}>Delete Activity</button>
                                    </Row>
                 
        
      </div>
    );
  }
}



export default UpdateActivity
                                 
