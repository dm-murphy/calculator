let calcString = "";
let num1;
let operatorVariable;
let currentValue;
let decimalStatus;
let backString;

allNumbers();
chooseOperator();
equalize();
clearMe();
decimalize();
backSpace();


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

// Functions to initialize number click event and to store number value

function allNumbers() {
  const fullNums = document.querySelectorAll('.num');
  fullNums.forEach(fullNums => {
    fullNums.addEventListener('click', numClick)
  });
};

function numClick(e) {
  if (calcString.length < 15) {
    calcString += Number(e.target.textContent);
    console.log(calcString);
    display.textContent = calcString;
  };
};

// Functions to initialize backspace button and remove last number

function backSpace() {
  const backButton = document.querySelector('#backspace');
  backButton.addEventListener('click', backClick)
};

function backClick() {
  calcString = calcString.split("");
  backString = calcString.pop();
  if (backString == ".") {
    decimalStatus = undefined;
  };
  calcString = calcString.join("");
  display.textContent = calcString;
}

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
    decimalStatus = undefined;
    console.log(operatorVariable);
    console.log(num1);
    console.log(calcString);
  } else {
      currentValue = operate(operatorVariable, num1, Number(calcString));
      display.textContent = Math.round((currentValue + Number.EPSILON) * 1000) / 1000;
      operatorVariable = e.target.textContent;
      num1 = currentValue;
      calcString = "";
      decimalStatus = undefined;
      console.log(operatorVariable);  
    }
};

// Functions to initialize equal click event and to trigger operate function with provided variables

function equalize() {
  const equalButton = document.querySelector('#equals');
  equalButton.addEventListener('click', equalsClick);
};

function equalsClick(e) {
  if ((operatorVariable == "/") && (calcString == 0)) {
    console.log("You want to divide by zero?");
    display.textContent = "You want to divide by zero?";
    disableButtons();
  } else if (operatorVariable != undefined) {
    currentValue = operate(operatorVariable, num1, Number(calcString));
    display.textContent = Math.round((currentValue + Number.EPSILON) * 1000) / 1000;
    console.log(currentValue);
    operatorVariable = undefined;
    num1 = "";
    calcString = "";
    disableButtons();
  }
}

// Functions to initialize decimal button and activate decimal click event

function decimalize() {
  const decimalButton = document.querySelector('#decimal');
  decimalButton.addEventListener('click', decimalClick);
};

function decimalClick(e) {
  if (decimalStatus == undefined) {
    calcString += e.target.textContent;
    display.textContent = calcString;
    decimalStatus = 1;
  }
}


function disableButtons() {
  const equalButton = document.querySelector('#equals');
  equalButton.disabled = true;
  const operButtons = document.querySelectorAll('.oper');
  operButtons.forEach(operButtons => {
    operButtons.disabled = true;
    });
  const fullNums = document.querySelectorAll('.num');  
  fullNums.forEach(fullNums => {
    fullNums.disabled = true;
    });
  const decimalButton = document.querySelector('#decimal');
  decimalButton.disabled = true;
  const backButton = document.querySelector('#backspace');
  backButton.disabled = true;
  }

function enableButtons() {
  const equalButton = document.querySelector('#equals');
  equalButton.disabled = false;
  const operButtons = document.querySelectorAll('.oper');
  operButtons.forEach(operButtons => {
    operButtons.disabled = false;
    });
  const fullNums = document.querySelectorAll('.num');  
  fullNums.forEach(fullNums => {
    fullNums.disabled = false;
    });
  const decimalButton = document.querySelector('#decimal');
  decimalButton.disabled = false;
  const backButton = document.querySelector('#backspace');
  backButton.disabled = false;
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
  equalsStatus = undefined;
  decimalStatus = undefined;
  enableButtons();
}

// Add keyboard support

// Styling:

// Instead of showing the operator in the display. How about like online-calculator app, you keep the operator button highlighted? Once
// a second number is selected after the operator, turn off the highlighted operator button. 