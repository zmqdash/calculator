//math operations
function add(a, b){
    let result = (a + b)
    equation.textContent += result
    console.log(result)
}

function subtract(a, b){
    let result = (a - b)
    equation.textContent += result
    console.log(result)
}

function divide(a, b){
    let result = (a / b)
    equation.textContent += result
    console.log(result)
}

function multiply(a, b){
    let result = (a * b)
    equation.textContent += result
    console.log(result)
}

function exponentiate(a, b){
    let result = (a ** b)
    equation.textContent += result
    console.log(result)
}

function operate(a, o, b){
        if (o === "+"){
        add(a, b)
        } else if (o === "-"){
        subtract(a, b)
        } else if (o === "/"){
        divide(a, b)
        } else if (o === "*"){
        multiply(a, b)
        } else if (o === "**"){
        exponentiate(a, b)
        }

}

//display

const buttons = document.querySelector('.buttons');

const plus = document.createElement("button")
plus.style.color = "white" 
plus.style.backgroundColor = "blue"
plus.style.width = "35px" 
plus.style.height = "35px"
plus.textContent = "+"
plus.value = "+"
buttons.appendChild(plus)
plus.addEventListener("click", updateDisplay)

const minus = document.createElement("button")
minus.style.color = "white" 
minus.style.backgroundColor = "blue"
minus.style.width = "35px" 
minus.style.height = "35px"
minus.textContent = "-"
minus.value = "-"
buttons.appendChild(minus)
minus.addEventListener("click", updateDisplay)

const division = document.createElement("button")
division.style.color = "white" 
division.style.backgroundColor = "blue"
division.style.width = "35px" 
division.style.height = "35px"
division.textContent = "÷"
division.value = "/"
buttons.appendChild(division)
division.addEventListener("click", updateDisplay)

const multiplication = document.createElement("button")
multiplication.style.color = "white" 
multiplication.style.backgroundColor = "blue"
multiplication.style.width = "35px" 
multiplication.style.height = "35px"
multiplication.textContent = "×"
multiplication.value = "*"
buttons.appendChild(multiplication)
multiplication.addEventListener("click", updateDisplay)

const power = document.createElement("button")
power.style.color = "white" 
power.style.backgroundColor = "blue"
power.style.width = "35px" 
power.style.height = "35px"
power.textContent = "^"
power.value = "**"
buttons.appendChild(power)
power.addEventListener("click", updateDisplay)

const equals = document.createElement("button")
equals.style.color = "white" 
equals.style.backgroundColor = "blue"
equals.style.width = "35px" 
equals.style.height = "35px"
equals.textContent = "="
buttons.appendChild(equals)
equals.addEventListener("click", evaluate)

//numbers and others
const one = document.createElement("button")
one.style.color = "white" 
one.style.backgroundColor = "blue"
one.style.width = "35px" 
one.style.height = "35px"
one.textContent = "1"
one.value = "1" 
buttons.appendChild(one)
one.addEventListener("click", updateDisplay)

const two = document.createElement("button")
two.style.color = "white" 
two.style.backgroundColor = "blue"
two.style.width = "35px" 
two.style.height = "35px"
two.textContent = "2"
two.value = "2" 
buttons.appendChild(two)
two.addEventListener("click", updateDisplay)

const three = document.createElement("button")
three.style.color = "white" 
three.style.backgroundColor = "blue"
three.style.width = "35px" 
three.style.height = "35px"
three.textContent = "3"
three.value = "3" 
buttons.appendChild(three)
three.addEventListener("click", updateDisplay)

const four = document.createElement("button")
four.style.color = "white" 
four.style.backgroundColor = "blue"
four.style.width = "35px" 
four.style.height = "35px"
four.textContent = "4"
four.value = "4" 
buttons.appendChild(four)
four.addEventListener("click", updateDisplay)

const five = document.createElement("button")
five.style.color = "white" 
five.style.backgroundColor = "blue"
five.style.width = "35px" 
five.style.height = "35px"
five.textContent = "5"
five.value = "5" 
buttons.appendChild(five)
five.addEventListener("click", updateDisplay)

const six = document.createElement("button")
six.style.color = "white" 
six.style.backgroundColor = "blue"
six.style.width = "35px" 
six.style.height = "35px"
six.textContent = "6"
six.value = "6" 
buttons.appendChild(six)
six.addEventListener("click", updateDisplay)

const seven = document.createElement("button")
seven.style.color = "white" 
seven.style.backgroundColor = "blue"
seven.style.width = "35px" 
seven.style.height = "35px"
seven.textContent = "7"
seven.value = "7" 
buttons.appendChild(seven)
seven.addEventListener("click", updateDisplay)

const eight = document.createElement("button")
eight.style.color = "white" 
eight.style.backgroundColor = "blue"
eight.style.width = "35px" 
eight.style.height = "35px"
eight.textContent = "8"
eight.value = "8" 
buttons.appendChild(eight)
eight.addEventListener("click", updateDisplay)

const nine = document.createElement("button")
nine.style.color = "white" 
nine.style.backgroundColor = "blue"
nine.style.width = "35px" 
nine.style.height = "35px"
nine.textContent = "9"
nine.value = "9" 
buttons.appendChild(nine)
nine.addEventListener("click", updateDisplay)

const zero = document.createElement("button")
zero.style.color = "white" 
zero.style.backgroundColor = "blue"
zero.style.width = "35px" 
zero.style.height = "35px"
zero.textContent = "0"
zero.value = "0" 
buttons.appendChild(zero)
zero.addEventListener("click", updateDisplay)

const decimal = document.createElement("button")
decimal.style.color = "white" 
decimal.style.backgroundColor = "blue"
decimal.style.width = "35px" 
decimal.style.height = "35px"
decimal.textContent = "."
decimal.value = "." 
buttons.appendChild(decimal)
decimal.addEventListener("click", updateDisplay)

const clear = document.createElement("button")
clear.style.color = "white" 
clear.style.backgroundColor = "blue"
clear.style.width = "35px" 
clear.style.height = "35px"
clear.textContent = "cl" 
buttons.appendChild(clear)
clear.addEventListener("click", clearAll)

//display of numbers

const display = document.querySelector('.display');
display.style.border = "0.0033px solid black"

const equation = document.createElement("div")
equation.style.color = "black"
equation.style.backgroundColor = "white"
equation.style.width = "210px"
equation.style.height = "50px"
display.appendChild(equation)

let arr = []
function updateDisplay(event){
    equation.textContent += event.target.value
    arr.push(event.target.value)
    console.log(arr)
}

function evaluate(event){
    let joinedNums = []
    let currentNum = ""
    for (let i = 0; i <= arr.length; i++){
        if (arr[i] === "0" || 
        arr[i] === "1" || arr[i] === "2" || 
        arr[i] === "3" || arr[i] === "4" || 
        arr[i] === "5" || arr[i] === "6" || 
        arr[i] === "7" || arr[i] === "8" || 
        arr[i] === "9" || arr[i] === "."){
        currentNum += arr[i]
        } else if (arr[i] === "+" || 
        arr[i] === "+" || arr[i] === "-" || 
        arr[i] === "/" || arr[i] === "*" || 
        arr[i] === "**"){
        joinedNums.push(currentNum)
        joinedNums.push(arr[i])
        currentNum = ""
        }
    }
    joinedNums.push(currentNum)
    console.log(joinedNums)
    clearForEquation()
    let numbered = joinedNums.map(Number);
    let a = numbered[0];
    let o = joinedNums[1];
    let b = numbered[2];
    operate(a, o, b)
}

//clear just the display when equals is clicked so only the result displays
function clearForEquation(){
    equation.textContent = ""
}

//clear the display and the array when clear is clicked
function clearAll(){
    equation.textContent = ""
    arr = []
    console.log(arr)
}