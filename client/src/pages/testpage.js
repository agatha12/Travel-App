import React, { Component } from "react";
// import {SelectTimes, SelectDate } from "../components/Input";

class TestPage extends Component {
    state = {
        firstDepTime: ''
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    }

    render() {
        return (
            <div>
                <h1>Test Test</h1>
                {/* <SelectTimes /> */}
                {/* <SelectDate /> */}
            </div>
        );

    }
};

export default TestPage;