const display = document.querySelector("[data-display]");
const dot = document.querySelector("[data-dot]");
const clear = document.querySelector("[data-clear]");
const numb = document.querySelectorAll("[data-numb");
const operate = document.querySelectorAll("[data-oper]");
const aClear = document.querySelector("[data-allClear]");
const equality = document.querySelector("[data-total]");

var displayValue = "";
var num1 = "";
var num2 = "";
var operator = "";

// user input
numb.forEach((button) => {
    button.addEventListener('click', toDisplay);
});

operate.forEach((button) => {
    button.addEventListener('click', setOperator);
});

equality.addEventListener('click', setArguments);

// calculate user input
function toDisplay(e) {
    var butText = e.target.textContent; {
        displayValue += butText;
        display.innerText = displayValue;
    }
};

function setOperator(e) {
    if (operator === "") {
        operator = e.target.textContent;
        setArguments();
    } else setArguments();
    displayValue == "";
    operator = e.target.textContent;
};

function setArguments() {
    if (!num1) {
        num1 = displayValue;
        displayValue = "";
    } else num2 = displayValue;
    displayValue = "";
    beginOperation();
};

// calculate operations
function beginOperation() {
    if (num1 && num2) {
        num1 = operations(operator, num1, num2);
        display.innerText = num1;
        displayValue = "";
    } else return;
};

function operations(operator, num1, num2) {
    switch (operator) {
        case "+":
            return Number(num1) + Number(num2);
        case "-":
            return Number(num1) - Number(num2);
        case "*":
            return Number(num1) * Number(num2);
        case "/":
            return Number(num1) / Number(num2);
    }
};

// clear the screen
function clearScreen() {
    displayValue = "";
    display.innerText = "";
};

clear.addEventListener("click", clearScreen);

// clear the calculator
function allClear() {
    clearScreen();
    num1 = "";
    num2 = "";
    operator = "";
    displayValue = "";
};

aClear.addEventListener('click', allClear);