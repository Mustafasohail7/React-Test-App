import React, { useState } from 'react';
import './Room.css';

function Room(props) {
    let [isLit,setLit] = useState(props.Open);
    let [Temp,setTemp] = useState(props.Temp);
    return (
        <div className={`room ${isLit ? "lit" : "dark"}`}>
            <h3>Assignment #4</h3>
            The room is <b>{isLit? 'lit' : 'dark'}</b><br/><br/>
            <button onClick={ () => setLit(!isLit)}>
                Toggle Light
            </button><br/><br/>
            <button onClick={ () => setLit(true) }>
                Turn Light ON
            </button><br/><br/>
            <button onClick={ () => setLit(false) }>
                Turn Light OFF
            </button><hr/>
            Current Room Temperature: {Temp} °C
            <br/>
            Temperature modifier:
            <button onClick={ () => setTemp(++Temp) }> 
                +
            </button>
            <button onClick={ () => setTemp(--Temp) }>
                -
            </button>
        </div>
    )

}

export default Room;