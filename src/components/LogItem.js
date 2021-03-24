import React,{ useState } from 'react'

const LogItem = (props) => {

    return (
        <div>
            <p>{props.displayString}</p>
        </div>
    );
}

export default LogItem;
