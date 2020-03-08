/* Selectors */
const optionsForm = document.getElementById("generatorOptionsForm"); //Form for generated numbers
const minimumValue = document.getElementById("minimumValueInput"); //Minimum generated number value
const maximumValue = document.getElementById("maximumValueInput"); //Maximum generated number value
const numberAmount = document.getElementById("numberAmountInput"); //Amount of generated numbers
const decimalCheck = document.getElementById("decimalCheckbox"); //Checks if decimal checkbox is checked
const decimalValue = document.getElementById("decimalValueInput"); //Amount of numbers after decimal
const customString = document.getElementById("customStringInput"); //Custom user string for more randomness
const generatedNumbers = document.getElementById("generatedNumbers"); //<p> tag with generated numbers
const saveOptions = document.getElementById("saveOptionsButton"); //Targets Save button in modal

/* Initialize Chance.js */
const chance = new Chance();

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

    const instance = M.Modal.getInstance(document.getElementById("options"));
    instance.close();

  }
});

/* Form submit event listener */
optionsForm.addEventListener('submit', (e) => {
  e.preventDefault();
})

/* Materialize JS init */
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems, options);

    instances[0].options.dismissible = false; //Prevents user from closing modal by using keyboard or by clicking overlay.
  });