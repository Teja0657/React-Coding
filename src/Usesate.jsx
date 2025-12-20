import React, {useState} from "react";
// {useState} - we use object destructuring just to get useState hook

function Usestate(){
    const [name, setName]=useState('Reddy');

    const [age,setAge]=useState(0);

    const [count, setCount]=useState(0);
    return(
        <>
        <p>Name:{name}</p>
        <button onClick={()=>setName('Teja')}>Set Name</button>

        <p>Age:{age}</p>
        <button onClick={()=>setAge(age +1)}>Increment Age</button>
        
        <p>Count:{count}</p>
        <button onClick={()=>setCount(count +1)}>Increment</button>
        <button onClick={()=>setCount(count -1)}>Decrement</button>
        <button onClick={()=>setCount(0)}>Reset</button>
    
        </>

        
    )
}
export default Usestate;