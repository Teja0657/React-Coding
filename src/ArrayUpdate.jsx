import { func } from 'prop-types';
import React,{useState} from 'react';
function MyArray(){
    const [food,setFood]=useState(['Pizza','Burger','Pasta']);
    
    function handleAddFood(){
        const newFoods=document.getElementById('newFood').value;
        document.getElementById('newFood').value='';
        setFood(f=>[...f,newFoods]);
    }

    function handleRemoveFood(i){
        setFood(food.filter((_,index)=>index!==i));
    }
    return(
        <div>
            <h2>List of Food Items</h2>
            <ul>
                {food.map((item,index)=>(
                    <li key={index} onClick={()=>{handleRemoveFood(index)}}>{item}</li>
                ))}
            </ul>
            <input type="text" id="newFood" placeholder="Add new food item"/>
            <button onClick={handleAddFood}>Add Food</button>

        </div>

    );
}
export default MyArray;