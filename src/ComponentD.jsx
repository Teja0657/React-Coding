import React,{useContext} from "react";
import { userContext } from "./UseContext";

// Consumer Component
function ComponentD(){
    const user=useContext(userContext);
    return(
        <div className="A">
            <h1>Component D</h1>
            <h2>Good Night {user}!!!</h2>
            
        </div>

    );
}
export default ComponentD;