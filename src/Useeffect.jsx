import { useEffect, useState } from "react";

function Useeffect(){

    const [count,setCount]=useState(0);
    const [cal,setCal]=useState(0); 
    useEffect(()=>{
       setCal(()=>count**2)
    });
    return(
        <>
        <p>Count:{count}</p>
        <button onClick={()=>setCount(count+1)}>Increment</button>
        <p>Calculation:{cal}</p>
        </>
    );
}
export default Useeffect; 