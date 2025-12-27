import React,{useContext} from "react";
import { userContext } from "./UseContext";
import ComponentD from "./ComponentD";

function ComponentC(){
    const user=useContext(userContext);
    return(
        <div className="A">
            <h1>Component C</h1>
            <h2>Hey {user}!!!</h2>
            <ComponentD/>
        </div>

    );
}
export default ComponentC;