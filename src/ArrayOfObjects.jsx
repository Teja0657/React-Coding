import React,{useState} from "react";
function ArrayOfObjects() {
    const [cars,setCars]=useState([]);
    const[year,setYear]=useState(new Date().getFullYear());
    const[make,setMake]=useState('');
    const[model,setModel]=useState('');
    function handleAddCar(){
        const newCar={year:year,make:make,model:model};
        setCars(c=>[...c,newCar]);
        setYear(new Date().getFullYear());
        setMake('');
        setModel('');

    }
    function handleRemoveCar(index){
        setCars(c=>c.filter((_,i)   => i!==index));
    }
    function handleYearChange(e){
        setYear(e.target.value);
    }
    function handleMakeChange(e){
        setMake(e.target.value);
    }   
    function handleModelChange(e){
        setModel(e.target.value);
    }   
    return(
        <div> 
            <h2>Car List </h2>
            <ul>
            {cars.map((car,index)=>(
                <li key={index} onClick={()=>handleRemoveCar(index)}> 
                    {car.year}-{car.make}-{car.model}
                </li>
            ))}
              </ul>

            <input type='number' value={year} onChange={handleYearChange}/><br/>
            <input type='text' value={make} placeholder='enter car make' onChange={handleMakeChange}/><br/>
            <input type='text' value={model} placeholder='enter car model' onChange={handleModelChange}/><br/>
            <button onClick={handleAddCar}>Add Car</button>

          

        </div>

    );

}
export default ArrayOfObjects;