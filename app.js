/*-------------------------------- Constants --------------------------------*/
const display = document.querySelector('.display')
console.log(display)

const numberButtons = document.querySelectorAll('.button.number')
const operatorButtons = document.querySelectorAll('.button.operator')
const equalsButton = document.querySelector('.button.equals')
/*-------------------------------- Variables --------------------------------*/
let numArray = []
let newNum
let num1 = 0
let num2 = 0

let operator = ''

let result = 0
display.innerText = result

/*------------------------ Cached Element References ------------------------*/



/*----------------------------- Event Listeners -----------------------------*/



/*-------------------------------- Functions --------------------------------*/

const enterNumber = (event) => {
    numArray.push(event.target.innerText)
    console.log(numArray)
    newNum = Number(numArray.join(''))
    console.log(newNum)
    display.innerText = newNum
}

const preformOperation = (event) => {
    num1 = newNum
    numArray = []
    operator = event.target.innerText
    switch (operator) {
        case 'C':
            numArray = [] 
            num1 = 0
            num2 = 0
            result = 0
            display.innerText = result
            console.log('num1:', num1, 'num2:',num2, 'numArray:',numArray)
            break
    }
    console.log (num1, operator, num2)
}

const preformEquals = (event) => {
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

numberButtons.forEach(button => {
    button.addEventListener('click', enterNumber)
})

operatorButtons.forEach(button => {
    button.addEventListener('click', preformOperation)
})

equalsButton.addEventListener('click', preformEquals)
