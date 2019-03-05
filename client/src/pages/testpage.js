import React, { Component } from "react";
import { AreYouFlying2 } from "../components/AreYouFlying"

class TestPage extends Component {
    state = {
        radio1: '',
        FlightAPIWorked: ''
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
        console.log(this.state.flying)
    }
    nowee = e => {
        console.log(this.state)
    }
    onRadioChange = e => {
        const yesOrNo = parseInt(e.target.value)
        this.setState({
            [e.target.name]: yesOrNo
        })
    };

    render() {
        return (
            <div>
                <h1>Test Test</h1>
                {/* <p>{this.state.flying || 'Not Flying'}</p> */}
                <AreYouFlying2
                    onRadioChange={this.onRadioChange}
                />
                <p>Value: {this.state.group1}</p>
            </div>
        )
    };

    // render() {
    //     return (
    //         <form>
    //             <p>
    //                 <label>
    //                     <input onChange={this.onRadioChange} name="group1" type="radio" value="Red"/>
    //                     <span>Red</span>
    //                 </label>
    //             </p>
    //             <p>
    //                 <label>
    //                     <input onChange={this.onRadioChange} name="group1" type="radio" value="Yellow" />
    //                     <span>Yellow</span>
    //                 </label>
    //             </p>
    //             <p>{this.state.group1}</p>
    //         </form>
    //     )
    // };
};

export default TestPage;