import {Component} from "react";
import PropTypes from 'prop-types';
import DateUtils from "../helpers/DateUtils";
import '../index.css';

class Clock extends Component {

    intervalID = null;

    constructor(props) {
        super(props);
        this.state = {
            currentTime:null
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.isClockRunning !== this.state.isClockRunning) {

            if (nextProps.isClockRunning === false){
                clearInterval(this.intervalID);
            }else {
                this.startTimer();
                this.setState({
                    currentTime:DateUtils.getFormattedTimeFromDate(new Date())
                })
            }
        }
    }

    startTimer(){

        this.intervalID = setInterval(
            () => this.tick(),
            1000
        );
    }
    tick(){

        this.setState({
            currentTime:DateUtils.getFormattedTimeFromDate(new Date()),
        })
    }

    render() {
        if (this.props.isClockRunning){

            return (
                <div >
                    <p className="clock">{this.state.currentTime}</p>
                </div>
            );
        }else {

            return (
                <div/>
            );
        }

    }
}


Clock.propTypes = {
    isClockRunning: PropTypes.bool
}

export default Clock;
