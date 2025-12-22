import React, {useState}  from "react";

function ColorPicker(){
    const [color, setColor] = useState("green");

    const handleChangeColor = (e) => {
        setColor(e.target.value);
    };

    return(
        <div class="container">
            <h1>Color Picker</h1>
            <div class="colour" style={{backgroundColor:color}}>
                <p>Selected color:{color}</p>
            </div> 
            <label>Choose the color</label>
            <input type='color' value={color} onChange={handleChangeColor}/>
        </div>
    );
}
export default ColorPicker;
