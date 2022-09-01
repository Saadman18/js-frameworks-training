import React, {useState} from "react";

export default function InputForm(){
    const [input, updateInput] = useState('');
 
    const postChange = (event) =>{
        updateInput(event.target.value); 
    }

    return(
        <div>
            <form >
                <input type="text" value={input} onChange={postChange} />
                <h1>{input}</h1>
            </form>
        </div>

    );
}