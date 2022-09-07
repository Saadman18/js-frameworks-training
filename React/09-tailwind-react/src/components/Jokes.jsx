import React from "react";

export default function Jokes(props){
    return(
        <div className="container flex flex-col justify-center items-center p-4">
            { props.setup && <h1 className="text-2xl font-bold">{props.setup}</h1>}
            { props.punchline && <p className="text-xl font-thin text-green-700 p-2">{props.punchline}</p>}
        </div>
    )
}