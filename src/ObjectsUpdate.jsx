import React, {useState} from 'react';

function MyComponent(){
    const [car,setCar]=useState({year:2025, make:'Ford',model:'Mustang'});
    const [email,setEmail]=useState();
    function handleYearChange(e){
        setCar(car=>({...car,year:e.target.value}));
    }
    function handleMakeChange(e){
        setCar(c=>({...c,make:e.target.value}));
    }
    function handleModelChange(e){
        setCar(c=>({...c,model:e.target.value}));
    }
    return(
        <div>
            <p>My Favourite Car is: {car.year} {car.make} {car.model}</p>

            <input type='number' value={car.year} onChange={handleYearChange}/><br/>
            <input type='text' value={car.make} onChange={handleMakeChange}/><br/>
            <input type='text' value={car.model} onChange={handleModelChange}/><br/>
            <input type='email' value={email} placeholder='enter your mail' onChange={(e)=>{setEmail(e.target.value)}}/>
            <p>Eamil:{email}</p>
        </div>
    );
}
export default MyComponent;