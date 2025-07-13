import React, { useState } from "react";
import './Counter.css';

const Counter = () => {
    const [count, setCount] = useState(0);

    const add = () => {
        setCount(count+1); 
    };

    const sub = () => {
        if (count > 0) {
            setCount(count-1);
        } else {
            setCount(count); 
        }
    };

    return(
        <div className="container">
            <button className="minus_btn" type="button" onClick={sub}> - </button>
            <h1 className="numbers">{count}</h1>
            <button className="plus_btn" type="button" onClick={add}> + </button>
        </div>
    );
};

export default Counter;