// onChange- event handler used primarilywith form elements
// ex.<input>,<textarea>, <select>, <radio>
// Triggers a function every time the value of the input changes.



import React, {useState} from 'react'

function Onchange(){
    const [name, setName]=useState();
    function nameChange(event){
        setName(event.target.value);
    }
    return(
        <>
            <input value={name} onChange={nameChange} placeholder='Type ur name'/>
            <p>Name:{name}</p>
        </>
    );
}
export default Onchange