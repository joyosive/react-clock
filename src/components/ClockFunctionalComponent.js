import React, {useState,useEffect, Component} from "react";
import DateUtils from "../helpers/DateUtils";
import '../index.css';

const ClockFunctional = (props) =>{

    const [currentTime, setCurrentTime] = useState(null);
    const [isClockRunning, setIsClockRunning] = useState(props.isClockRunning);
    const [intervalID, setIntervalID] = useState(null);


    useEffect(() => {
            setIsClockRunning(props.isClockRunning);
            if (props.isClockRunning === false){
                clearInterval(intervalID);
                setCurrentTime(null);
            }else {
                startTimer();
                setCurrentTime(DateUtils.getFormattedTimeFromDate(new Date()));
            }
        }, [props.isClockRunning]);

    const startTimer = () => {
        let interval = setInterval(
            () => tick(),
            1000
        );

        setIntervalID(interval);
    }

    const tick = () =>{
        setCurrentTime(DateUtils.getFormattedTimeFromDate(new Date()));
    }

    return (
        <div >
            <p className="clock">{isClockRunning ? currentTime : ""}</p>
        </div>
    );
}



export default ClockFunctional;
