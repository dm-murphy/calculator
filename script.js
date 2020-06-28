// Your calculator is going to contain functions for all of the basic math operators you typically find on simple calculators,
// so start by creating functions for the following items and testing them in your browser’s console.

// add
// subtract
// multiply
// divide

function simpleAdd(a,b) {
    return a + b;
};

function simpleSubtract (a,b) {
    return a - b;
};

function simpleMultiply (a,b) {
    return a * b;
};

function simpleDivide (a,b) {
    return a / b;
};

// Create a new function operate that takes an operator and 2 numbers and then calls one of the above functions on the numbers.

function operate(operator, a, b) {
    if (operator == "+") {
        return simpleAdd(a,b);
    } else if (operator == "-") {
        return simpleSubtract(a,b);
    } else if (operator == "*") {
        return simpleMultiply(a,b);
    } else if (operator == "/") {
        return simpleDivide(a,b);
    };
};

//Create the functions that populate the display when you click the number buttons… 
// you should be storing the ‘display value’ in a variable somewhere for use in the next step.

let displayValue = "";

function populateDisplay(displayValue) {
  const display = document.querySelector('#display');
  display.textContent = displayValue;
};

//function to change displayValue from clicking number buttons..

// function changeDisplay() {
//   const numButton = document.querySelector('#one');
//   numButton.addEventListener('click', event => {
//     populateDisplay(1);
//   });
// };

function allNumbers() {
  const fullNums = document.querySelectorAll('.num');
  fullNums.forEach(fullNums => {
    fullNums.addEventListener('click', specialClick)
  });
};

function specialClick(e) {
  displayNum = Number(e.target.textContent);
  console.log(displayNum);
  displayValue = displayValue.toString() + displayNum.toString()
  //display.textContent = parseInt(displayValue);
  display.textContent = displayValue;
};

// Make the calculator work! You’ll need to store the first number that is input into the calculator when a user presses an operator,
// and also save which operation has been chosen and then operate() on them when the user presses the “=” key.

function chooseOperator() {
  const operButtons = document.querySelectorAll('.oper');
  operButtons.forEach(operButtons => {
    operButtons.addEventListener('click', operatorClick);
  });
};

function operatorClick(e) {
    displayOper = e.target.textContent;
    console.log(displayOper);
    displayValue = displayValue + displayOper;
    display.textContent = displayValue;
}

// Equals

function equalize() {
  const equalButton = document.querySelector('#equals');
  equalButton.addEventListener('click', equalsClick);
};

function equalsClick() {
  equalOper = "=";
  console.log(equalOper);
  console.log(displayValue.split(""))
  displayValue = displayValue + equalOper;
  result = displayValue.split("");
  console.log(result);
  display.textContent = displayValue;

}


// Think you might need to use reduce adn rethink original functions for operations. Also the equalize could just go right to 
// solving the problem and spitting it out.


