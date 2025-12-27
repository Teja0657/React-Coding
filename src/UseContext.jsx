// useContext()- It is a react hook that allows you to 
//             hare values between multiple levels of components 
//             without passing props through each level


// provider component.
import React, {useState, createContext} from "react";
import ComponentB from "./ComponentB";

export const userContext=createContext();

function ComponentA(){
    const [name,setName]=useState('Teja')

    return(
        <div className="A">
            <h1>Component A</h1>
            <h2>Hello {name}!!!</h2>
            <userContext.Provider value={name}> 
                <ComponentB user={name}/>
            </userContext.Provider>
          
        </div>

    );
}
export default ComponentA;