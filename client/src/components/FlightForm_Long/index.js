import React from "react";
import { SelectDate, Hour, Minute, Timezone, Container } from "../Input";
// import API from "../utils/API";
// import PropTypes from 'prop-types'
// import { Row, Col, Button, Toast } from "react-materialize";
// import SearchFlight from "../components/SearchFlight";

export default function (props) {
    //This for the flight modal - if API is not available the user can enter all the information manually
    const {firstDepDate, firstDepTime, firstarrivalDate , firstarrivalTime } = props;
    const {seconddepDate, seconddepTime, secondarrivalDate , secondarrivalTime } = props;
    const {handleInputChange} = props;

    return (
        <div>
            <SelectDate
                name="firstDepDate"
                onChange={handleInputChange}
                value={firstDepDate}
                label="Pick a Date" />

            <Container value={firstDepTime}>
                <Hour
                    onChange={handleInputChange}
                    name="dept_hour" />
                <Minute
                    name="dept_min"
                    onChange={handleInputChange} />
                <Timezone
                    name="dept_time"
                    onChange={handleInputChange} />
            </Container>


            <h4>Arrival Date</h4>
            <SelectDate
                name="firstarrivalDate"
                onChange={handleInputChange}
                value={firstarrivalDate}
                label="Pick a Date" />

            <Container value={firstarrivalTime}>
                <Hour
                    onChange={handleInputChange}
                    name="arr_hour" /><Minute
                    name="arr_min"
                    onChange={handleInputChange} />
                <Timezone
                    name="arr_time"
                    onChange={handleInputChange} />
            </Container>


            <h4>Departure Date</h4>
            <SelectDate
                name="seconddepDate"
                onChange={handleInputChange}
                value={seconddepDate}
                placeholder="Pick a Date" />

            <Container value={seconddepTime}>
                <Hour
                    onChange={handleInputChange}
                    name="deptwo_hour" /><Minute
                    name="deptwo_min"
                    onChange={handleInputChange} />
                <Timezone
                    name="deptwo_time"
                    onChange={handleInputChange} />
            </Container>

            <h4>Arrival Date</h4>
            <SelectDate
                name="secondarrivalDate"
                onChange={handleInputChange}
                value={secondarrivalDate}
                placeholder="Pick a Date" />

            <Container value={secondarrivalTime}>
                <Hour
                    onChange={handleInputChange}
                    name="arrtwo_hour" />
                <Minute
                    name="arrtwo_min"
                    onChange={handleInputChange} />
                <Timezone
                    name="arrtwo_time"
                    onChange={handleInputChange} />
            </Container>

        </div>
    )
}
