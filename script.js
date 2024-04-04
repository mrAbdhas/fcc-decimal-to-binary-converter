//Access HTML elements and assign them to variables.
const numberInput = document.getElementById("number-input");
const convertBtn = document.getElementById("convert-btn");
const result = document.getElementById("result");

//function handling decimal to binary conversion
const decimalToBinary = (input) => {
    //Setup array's to store decimal input, quotients, and remainders for the decimal to binary conversion process.
    const inputs = [];
    const quotients = [];
    const remainders = [];

    if (input == 0) {
        result.innerText = "0";
        return;
    }

    //Iterate until input becomes zero
    while (input > 0) {
        //Calculate the quotient by dividing input by 2 and rounding down.
        const quotient = Math.floor(input /2);

        //Calculate the remainder by finding the modulus of input divided by 2
        const remainder = input % 2;

        //append input to inputs array.
        inputs.push(input);
        //append quotient to quotients array.
        quotients.push(quotient);
        //append remainder to remainders array. 
        remainders.push(remainder);

        // Update input to the quotient for the next iteration
        input = quotient;
    }
    //reverse the remainders array and join it into a binary number string and set result innerText to it.
    result.innerText = remainders.reverse().join("");

};

//function checks user input value.
const checkUserInput = () => {
    //Check if the user input value is falsy or cannot be converted to an integer.
    if(!numberInput.value || isNaN(parseInt(numberInput.value))) {
        //Alert the user if no number entered or the number is invalid.
        window.alert("Please provide a decimal number")
        return;
        
    }
    //call decimalToBinary function with the parsed value of numberInput
    decimalToBinary(parseInt(numberInput.value));

    //clear value of numberInput
    numberInput.value = "";
};

//Click event listener for convert btn, logs value of number input 
convertBtn.addEventListener("click", checkUserInput);

//keydown event listener for input element, when Enter/return key is pressed.
numberInput.addEventListener("keydown", (e) => { //pass e as parameter to call back function. 
    //event object is created when event listener is triggede by an event.  
    // key property, holds the string value of the key pressed.
    if(e.key === "Enter") { 
        // call check user input fucntion
        checkUserInput();
    }
   
});

