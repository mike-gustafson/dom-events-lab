/*-------------------------------- Constants --------------------------------*/

/*-------------------------------- Variables --------------------------------*/
let numArray = []
let newNum
let num1 = 0
let num2 = 0
let operator = ''
let result = 0

/*------------------------ Cached Element References ------------------------*/
const operatorButtons = document.querySelectorAll('.button.operator')
const numberButtons = document.querySelectorAll('.button.number')
const equalsButton = document.querySelector('.button.equals')
const display = document.querySelector('.display')
display.innerText = result

/*----------------------------- Event Listeners -----------------------------*/
operatorButtons.forEach(button => {button.addEventListener('click', preformOperation) })
numberButtons.forEach(button => { button.addEventListener('click', enterNumber) })
equalsButton.addEventListener('click', preformEquals)

/*-------------------------------- Functions --------------------------------*/
function preformOperation(event) {
    num1 = newNum
    numArray = []
    operator = event.target.innerText
    if (operator === 'C' ) {
            numArray = [] 
            num1 = 0
            num2 = 0
            result = 0
            display.innerText = result
    }
}

function enterNumber(event) {
    numArray.push(event.target.innerText)
    newNum = Number(numArray.join(''))
    display.innerText = newNum
}

function preformEquals() {
    num2 = newNum
    numArray = []
    switch (operator) {
        case '+':
            result = num1 + num2
            break
        case '-':
            result = num1 - num2
            break
        case '*':
            result = num1 * num2
            break
        case '/':
            result = num1 / num2
            break
    }
    display.innerText = result
    newNum = result
    num2 = 0
}