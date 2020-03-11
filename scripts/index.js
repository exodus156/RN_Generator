/* Selectors */
const minimumValue = document.getElementById("minimumValueInput"); //Minimum generated number value
const maximumValue = document.getElementById("maximumValueInput"); //Maximum generated number value
const numberAmount = document.getElementById("numberAmountInput"); //Amount of generated numbers
const decimalCheck = document.getElementById("decimalCheckbox"); //Checks if decimal checkbox is checked
const decimalValue = document.getElementById("decimalValueInput"); //Amount of numbers after decimal
const customString = document.getElementById("customStringInput"); //Custom user string for more randomness
const generatedNumbers = document.getElementById("generatedNumbers"); //<p> tag with generated numbers
const numberWrapper = document.getElementById("numberWrapper");
const saveOptions = document.getElementById("saveOptionsButton"); //Targets Save button in modal
const generateButton = document.getElementById("Generate"); //Targets generate button

/* Initial values of form fields */
let min = null; //minimum Value
let max = null; //Maximum value
let numOf = null; //Number of generated numbers
let dec = 0; //Amount of numbers after decimal mark
let cust = null; //Custom string

/* Validation for save button */
saveOptions.addEventListener('click', () => {  

  if(minimumValue.value === ""||maximumValue.value === ""||numberAmount.value === ""){

    alert("Fields marked with * cannot be empty!");

  } else if(decimalCheck.checked&&decimalValue.value === ""){

    alert("Amount of numbers after decimal cannot be empty!");

  } else if(decimalCheck.checked === false&&decimalValue.value !== ""){

    alert("You cannot set amount of numbers after decimal without checking the checkbox first!")

  } else if(minimumValue.validity.valid !== true||maximumValue.validity.valid !== true||numberAmount.validity.valid !== true||decimalValue.validity.valid !== true){

    alert("Not all form fields are filled correctly, return to the form and correct fields that are marked in red");

  } else if(minimumValue.value >= maximumValue.value){

    alert("Minimum value cannot be higher or the same as maximum value!")

  } else {
    /* Updating values */
    min = parseInt(minimumValue.value);
    max = parseInt(maximumValue.value);
    numOf = parseInt(numberAmount.value);
    dec = 0;
    cust = 0;
    if(decimalValue.value !== ""){
      dec = parseInt(decimalValue.value);
    }
    if(customString.value !== ""){
      cust = "" + customString.value;
    }

    generateButton.classList.remove("disabled"); //Unlocks generate button

    /* Targets and closes modal */
    const instance = M.Modal.getInstance(document.getElementById("options"));
    instance.close();    
  }
});

/* Generate button event listener */
generateButton.addEventListener('click', () => {
  if(min !== null||max !== null|| numOf !== null){
    /* New seed generator */
    let seed = "" + cust + uuidv4();

    /* Initialize Chance.js */
    const chance = new Chance(seed);

    /* Activate and clear generated numbers area */
    if(numberWrapper.classList.contains("hidden")){
      numberWrapper.classList.remove("hidden");
    }
    generatedNumbers.innerText = null;

    /* Loop for generating numbers */
    for(i=0; i < numOf; i++){
      let insertValue = chance.floating({min: min, max: max, fixed: dec});
      generatedNumbers.textContent += `(${insertValue}) `;
    }
  } else{
    alert("Please define options before generating numbers.")
  }  
})

/* Materialize JS init */
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems, options);

    instances[0].options.dismissible = false; //Prevents user from closing modal by using keyboard or by clicking overlay.
  });