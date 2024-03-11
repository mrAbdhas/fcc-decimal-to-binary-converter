//Access HTML elements and assign them to variables.
const numberInput = document.getElementById("number-input");
const convertBtn = document.getElementById("convert-btn");
const result = document.getElementById("result");

//function checks user input value.
const checkUserInput = () => {
    console.log(numberInput.value);
};

//Click event listener for convert btn, logs value of number input 
convertBtn.addEventListener("click", checkUserInput);

//keydown event listener for input element, when Enter/return key is pressed.
numberInput.addEventListener("keydown", (e) => { //pass e as parameter to call back function. 
    //event object is created when event listener is triggede by an event.  
    // key property, holds the string value of the key pressed.
    if(e.key == "Enter") { 
        // call check user input fucntion
        checkUserInput();
    }
   
});

