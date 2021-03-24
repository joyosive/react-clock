import React, { Component } from "react"
import DateUtils from "../helpers/DateUtils";
import LogItem from "./LogItem";
import Clock from "./Clock";
import '../index.css';
import ClockFunctional from "./ClockFunctionalComponent";

class Timer extends Component {

    constructor(props) {
        super(props);

        /*
        * Date types of state:
        *
        * isClockRunning: Bool
        * currentTimerStartTime: Date
        * currentTimerStopTime: Date
        * durationArray : [{
        *   startTime:Date,
        *   stopTime:Date,
        *   displayString: String }]
        *
        */

        this.state = {
            isClockRunning:false,
            currentTimerStartTime:null,
            currentTimerStopTime:null,
            durationArray:[]
        }

        this.handleStartButtonClick = this.handleStartButtonClick.bind(this)
        this.handleStopButtonClick = this.handleStopButtonClick.bind(this)
        this.handleResetButtonClick = this.handleResetButtonClick.bind(this)
    }

    render() {
        return <div >
            <div className="container">
                <table className="timerTable">
                    <tbody>
                    <tr>
                        <td><span>Start Time:</span></td>
                    </tr>
                    <tr>
                        <td><input
                            id="txtStartTime"
                            type="text"
                            value={
                                this.state.currentTimerStartTime ? DateUtils.getFormattedTimeFromDate(this.state.currentTimerStartTime): ""
                            }
                            readOnly/></td>
                    </tr>
                    <tr>
                        <td><span>End Time:</span></td>
                    </tr>
                    <tr><td>
                        <input
                            id="txtEndTime"
                            type="text"
                            value={
                                this.state.currentTimerStopTime ? DateUtils.getFormattedTimeFromDate(this.state.currentTimerStopTime): ""
                            }
                            readOnly/>
                    </td></tr>
                    <tr><td><button onClick={this.handleStartButtonClick}>Start </button></td></tr>
                    <tr><td><button onClick={this.handleStopButtonClick}>Stop </button></td></tr>
                    <tr><td><button onClick={this.handleResetButtonClick}>Reset </button></td></tr>
                    </tbody>
                </table>
            </div>

            <div>

                {/*Added both classes

                1.Clock (Using React.Component)
                2.ClockFunctional (Using Hooks)
                */}
                
                {/*<Clock isClockRunning={this.state.isClockRunning}/>*/}
                <ClockFunctional isClockRunning={this.state.isClockRunning} />

            </div>
            <div >
                <ul>{this.getListOfDurationItem()}</ul>
            </div>
        </div>;
    }

    getListOfDurationItem(){

        return this.state.durationArray.map((item,index) =>
            <li className="container-item" key={index} style={listItemType}> <LogItem displayString={item.displayString}/></li>
        );
    }

    //CLICK HANDLERS
    handleStartButtonClick(event){

        this.setState({
            isClockRunning:true,
            currentTimerStopTime:null,
            currentTimerStartTime: new Date()
        })
    }

    handleStopButtonClick(event){

        if (this.state.currentTimerStartTime === null){

            alert("Please start the timer.")

        }else {

            let stopTime = new Date()
            let startTime = this.state.currentTimerStartTime;
            let durationItem = {
                startTime:startTime,
                stopTime:stopTime,
                displayString: DateUtils.getDurationDisplayString(startTime, stopTime)
            }

            this.setState({
                isClockRunning:false,
                currentTimerStopTime:stopTime,
                durationArray:[...this.state.durationArray, durationItem]
            });
        }
    }

    handleResetButtonClick(event){
        this.setState({
            isClockRunning:false,
            currentTimerStartTime:null,
            currentTimerStopTime:null,
            durationArray:[]
        })
    }
}

const listItemType = {
    listStyleType: 'none'
}

export default Timer;
