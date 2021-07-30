import React, { useState } from 'react';
import axios from 'axios';
function MongoPrint() {
    const [stateretText, setretText] = useState('loading data .....');
    // const uri = "mongodb+srv://shubhamv:password_123@reactdemo.1usly.mongodb.net/reactdemo?retryWrites=true&w=majority";
    axios.post('http://localhost:3001/data')
        .then(res => {
            console.log('Inside Result')
            setretText(res.data.data);
        })
    return (<div><p>{stateretText}</p></div>);
}

export default MongoPrint;