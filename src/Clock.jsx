
import { func } from "prop-types";
import React,{useState,useEffect} from "react";

function Clock(){
    const[time,setTime]=useState(new Date());
    let hrs=time.getHours();
    const min=time.getMinutes();
    const sec=time.getSeconds();
    let ampm=hrs>=12?'PM':'AM';
    hrs=hrs%12;

    useEffect(()=>{
        const intervalId=setInterval(()=>{
            setTime(new Date());
        },1000);
        return()=>clearInterval(intervalId);
    },[]);

    function addLeadingZero(num){
        return (num<10?'0':"")+num ;
    }

    return(
        <div>
            <h2>Clock</h2>  
            <span>{addLeadingZero(hrs)}:{addLeadingZero(min)}:{addLeadingZero(sec)} {ampm}</span>

            
        </div>

    );


}
export default Clock;