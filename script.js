//Access HTML elements and assign them to variables.
const numberInput = document.getElementById("number-input");
const convertBtn = document.getElementById("convert-btn");
const result = document.getElementById("result");

//function checks user input value.
const checkUserInput = () => {
    console.log(numberInput.value);
}