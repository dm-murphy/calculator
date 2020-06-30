let displayValue = "";
let calcString = "";
let num1;
let operatorVariable;
let currentValue;

allNumbers();
chooseOperator();
equalize();
clearMe();

const display = document.querySelector('#display');
display.textContent = "0";

// Function for basic math operations

function simpleAdd(num1,num2) {
    return num1 + num2;
};

function simpleSubtract (num1,num2) {
    return num1 - num2;
};

function simpleMultiply (num1,num2) {
    return num1 * num2;
};

function simpleDivide (num1,num2) {
    return num1 / num2;
};

// Function that triggers math operation with provided operator value and user inputted numbers

function operate(operatorVariable, num1, num2) {
    if (operatorVariable == "+") {
        return simpleAdd(num1,num2);
    } else if (operatorVariable == "-") {
        return simpleSubtract(num1,num2);
    } else if (operatorVariable == "*") {
        return simpleMultiply(num1,num2);
    } else if (operatorVariable == "/") {
        return simpleDivide(num1,num2);
    };
};

// Initializes numbers into click events for adding to calcString variable

function allNumbers() {
  const fullNums = document.querySelectorAll('.num');
  fullNums.forEach(fullNums => {
    fullNums.addEventListener('click', numClick)
  });
};

function numClick(e) {
  calcString += Number(e.target.textContent);
  console.log(calcString);
  display.textContent = calcString;
};

// Functions to initialize operator click event and to store operator value

function chooseOperator() {
  const operButtons = document.querySelectorAll('.oper');
  operButtons.forEach(operButtons => {
    operButtons.addEventListener('click', operatorClick);
  });
};

function operatorClick(e) {
  if (operatorVariable == undefined) {
    operatorVariable = e.target.textContent;
    num1 = Number(calcString);
    calcString = "";
    console.log(operatorVariable);
    console.log(num1);
    console.log(calcString);
  } else {
      currentValue = operate(operatorVariable, num1, Number(calcString));
      display.textContent = currentValue;
      operatorVariable = e.target.textContent;
      num1 = currentValue;
      calcString = "";
      console.log(operatorVariable);  
    }
};

// Functions to initialize equal click event and to trigger operate function with provided variables

function equalize() {
  const equalButton = document.querySelector('#equals');
  equalButton.addEventListener('click', equalsClick);
};

function equalsClick() {
  currentValue = operate(operatorVariable, num1, Number(calcString));
  display.textContent = currentValue;
  console.log(currentValue);
  operatorVariable = "";
  num1 = "";
  calcString = Number(currentValue);
}

// Function to initialize clear button event and trigger clears function to reset everything

function clearMe() {
  const clearButton = document.querySelector('#clears');
  clearButton.addEventListener('click', clearsClick);
};

function clearsClick() {
  display.textContent = "0";
  operatorVariable = undefined;
  num1 = "";
  calcString = "";
}

// First, ask in Discord if you need to follow order of operations or not?

// Need to make it continue working after equals using existing value

// Repeating equals = should continue to add to result with previous operation?

// Problem is the if else statements in operator click. Think about start of calculator from reloaded page. Then think about start of new calculation with pre-existing
// values from an equals =.

// Instead of showing the operator in the display. How about like online-calculator app, you keep the operator button highlighted? Once
// a second number is selected after the operator, turn off the highlighted operator button. 