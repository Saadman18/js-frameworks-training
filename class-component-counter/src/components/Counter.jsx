import React, {Component} from "react";

class Counter extends Component{
    constructor(props){
        super(props);

        this.state={
            count : 0
        }

        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
        this.reset = this.reset.bind(this); 
    }

    increment(){
        this.setState((state)=>{
            return(
                {count: this.state.count + 1}
            )
        });
    };

    decrement(){
        
        if(this.state.count>0)(

            this.setState((state)=>{
                return(
                    {count: this.state.count-1}
                )
            })
        )
    };

    reset(){
        this.setState((state)=>{
            return(
                {count: 0}
            )
        })
    };

    render(){
        return(
            <div className="center">
                <div className="container">
                    <h2>Counter is {this.state.count}</h2>
                    <div className="btns">
                        <button onClick= {this.increment} className="btn increase">+</button>
                        <button onClick = {this.reset} className="btn reset">Reset</button>
                        <button onClick= {this.decrement} className="btn decrease">-</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Counter