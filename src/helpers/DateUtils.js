import moment from "moment";

class DateUtils {

    static getFormattedTimeFromDate(inputDate){
        return moment(inputDate).format("hh:mm:ss A");
    }

    static getDurationDisplayString = (startTime,stopTime) => {
        var millisec = Math.abs(stopTime - startTime);
        var seconds = Math.floor((millisec / 1000).toFixed(2));
        var minutes = Math.floor((millisec / (1000 * 60)).toFixed(1));

        if(minutes > 0) // calculate offset
            seconds = Math.abs(seconds - (minutes * 60));

        const duration = "Duration => minutes: " + minutes + " " + "seconds: " + seconds;
        console.log(duration);
        return duration;
    }
}

export default DateUtils;
