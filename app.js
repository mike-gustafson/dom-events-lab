/*-------------------------------- Constants --------------------------------*/

/*-------------------------------- Variables --------------------------------*/
let numArray = [];
let newNum;
let num1 = 0;
let num2 = 0;
let operator = '';
let result = 0;

/*------------------------ Cached Element References ------------------------*/
const allButtons = document.querySelectorAll('.button');
const display = document.querySelector('.display');
display.innerText = result;

/*----------------------------- Event Listeners -----------------------------*/
allButtons.forEach(button => {
    if (button.classList.contains('number')) {
        button.addEventListener('click', enterNumber);
    } else if (button.classList.contains('operator')) {
        button.addEventListener('click', preformOperation);
    } else if (button.classList.contains('equals')) {
        button.addEventListener('click', preformEquals);
    }
});

/*-------------------------------- Functions --------------------------------*/
function preformOperation(event) {
    num1 = newNum;
    numArray = [];
    operator = event.target.innerText;
    if (operator === 'C' ) {
            numArray = [];
            num1 = 0;
            num2 = 0;
            result = 0;
            display.innerText = result;
    }
}

function enterNumber(event) {
    numArray.push(event.target.innerText);
    newNum = Number(numArray.join(''));
    display.innerText = newNum;
}

function preformEquals() {
    num2 = newNum;
    numArray = [];
    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
    }
    display.innerText = result;
    newNum = result;
    num2 = 0;
}