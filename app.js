/*-------------------------------- Variables --------------------------------*/
let numArray = [];
let newNum;
let num1 = 0;
let num2 = 0;
let operator = '';

/*------------------------ Cached Element References ------------------------*/
const allButtons = document.querySelectorAll('.button');
const display = document.querySelector('.display');
display.innerText = 0;

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
            operator = ''
            display.innerText = num1;
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
            num1 = num1 + num2;
            break;
        case '-':
            num1 = num1 - num2;
            break;
        case '*':
            num1 = num1 * num2;
            break;
        case '/':
            num1 = num1 / num2;
            break;
        default:
            num2 = 0
            return
    }
    display.innerText = num1;
}