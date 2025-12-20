// We are going to create a button using css properties. 
// By the there are 3 types to use the CSS properties.They are:

// 1. External- means we use "index.css" file which is an external source file.

// 2. MODULES- We create a separate folder of module and place the "Button.jsx" file in it and we import it to the "App.jsx" 
            // and then create a css file named "Button.module.css" and write the css properties in this file 
            // and import this to the "Button.jsx" file.

// 3. Inline- We directly create an object and write the css properties in it and use it as a "style=" attribute.

function Button(){

    return(
        <button className="button">Click me</button>
    );
}
export default Button;