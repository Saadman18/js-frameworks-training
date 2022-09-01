import React, {useState} from "react";

export default function counterFunc(){
    let [counter, setCounter] = useState(0);

    function increment(){
        setCounter(counter+1);
    }

    function decrement(){
        if(counter<=0) return;
            setCounter(counter-1);
    }

    function reset(){
        setCounter(0);
    }


    return(
        <div className="center">
            <div className="container">
                <h2>Counter is {counter} </h2>
                <div className="btns">
                    <button onClick= {increment} className="btn increase">+</button>
                    <button onClick = {reset} className="btn reset">Reset</button>
                    <button onClick= {decrement} className="btn decrease">-</button>
                </div>
            </div>
        </div>
    )

};