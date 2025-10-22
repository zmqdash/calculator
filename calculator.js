//arithmetic

function solveArithmetic(){
    joinedNums = []
    arr = []
    solution.length = 0
    currentNum = ""
    operatorsTyped = 0
    algOperatorsTyped -= Infinity
    document.removeEventListener("keydown", (event) => {
  if (event.key === "x") {
    x.click();
  }
});
    buttons.removeChild(arithmetic)
    buttons.appendChild(algebra)
    buttons.removeChild(x)
    buttons.removeChild(solve)
    equals.addEventListener("click", evaluate)
    one.removeEventListener("click", updateAlg)
    one.addEventListener("click", updateDisplay)
    two.removeEventListener("click", updateAlg)
    two.addEventListener("click", updateDisplay)
    three.removeEventListener("click", updateAlg)
    three.addEventListener("click", updateDisplay)
    four.removeEventListener("click", updateAlg)
    four.addEventListener("click", updateDisplay)
    five.removeEventListener("click", updateAlg)
    five.addEventListener("click", updateDisplay)
    six.removeEventListener("click", updateAlg)
    six.addEventListener("click", updateDisplay)
    seven.removeEventListener("click", updateAlg)
    seven.addEventListener("click", updateDisplay)
    eight.removeEventListener("click", updateAlg)
    eight.addEventListener("click", updateDisplay)
    nine.removeEventListener("click", updateAlg)
    nine.addEventListener("click", updateDisplay)
    zero.removeEventListener("click", updateAlg)
    zero.addEventListener("click", updateDisplay)
    decimal.removeEventListener("click", updateAlg)
    decimal.addEventListener("click", updateDisplay)
    plus.removeEventListener("click", updateAlg)
    plus.addEventListener("click", updateDisplay)
    minus.removeEventListener("click", updateAlg)
    minus.addEventListener("click", updateDisplay)
    division.removeEventListener("click", updateAlg)
    division.addEventListener("click", updateDisplay)
    multiplication.removeEventListener("click", updateAlg)
    multiplication.addEventListener("click", updateDisplay)
    power.removeEventListener("click", updateAlg)
    power.addEventListener("click", updateDisplay)
}

let arr = []
let operatorsTyped = 0
function updateDisplay(event){
    equation.textContent += event.target.value
    arr.push(event.target.value)
    console.log(arr)
    if (event.target.value === "+" || event.target.value === "-" ||
        event.target.value === "/" || event.target.value === "*" ||
        event.target.value === "**"){
        let newOperator = event.target.value
        console.log(newOperator)
        operatorsTyped++
        console.log(operatorsTyped)
        checkForSecondOperator(newOperator)
    }
}


function checkForSecondOperator(newOperator){
    if (operatorsTyped >= 2){
        evaluate()
        appendNewOperator(newOperator)
    }
}

function appendNewOperator(newOperator){
    equation.textContent += newOperator
    arr.push(newOperator)
    operatorsTyped += 2
    console.log(operatorsTyped)
}

function retainResult(result){
    arr = []
    let numString = result.toString()
    let split = numString.split('')
    arr = split.slice()
}

function evaluate(){
    operatorsTyped = 0
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
    let numbered = joinedNums.map(Number);
    clearForEquation()
    let a = numbered[0];
    let o = joinedNums[1];
    let b = numbered[2];
    operate(a, o, b)
  
}

function clearForEquation(){
    equation.textContent = ""
    operatorsTyped = 0 
}

function clearAll(){
    equation.textContent = ""
    arr = []
    operatorsTyped = 0 
    solution = []
    console.log(arr)
    console.log(solution)
}

function operate(a, o, b){
        if (o === "+"){
        add(a, b, solution)
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

function add(a, b){
    let result = (a + b)
    //algebra solutions:
    if (solution[0] === "x"){
    appendToX(solution, result)
    } else {
    //arithmetic:
    equation.textContent += result
    console.log(result)
    retainResult(result)}
}

function subtract(a, b){
    let result = (a - b)
    //algebra solutions:
    if (solution[0] === "x"){
    appendToX(solution, result)
    } else {
    //arithmetic:
    equation.textContent += result
    console.log(result)
    retainResult(result)}
    
}

function divide(a, b){
    let result = (a / b)
    //algebra solutions:
    if (solution[0] === "x"){
    appendToX(solution, result)
    } else {
    //arithmetic:
    equation.textContent += result
    console.log(result)
    retainResult(result)}

}

function multiply(a, b){
    let result = (a * b)
    //algebra solutions:
    if (solution[0] === "x"){
    appendToX(solution, result)
    } else {
    //arithmetic:
    equation.textContent += result
    console.log(result)
    retainResult(result)}

}

function exponentiate(a, b){
    let result = (a ** b)
    //algebra solutions:
    if (solution[0] === "x"){
    appendToX(solution, result)
    } else {
    //arithmetic:
    equation.textContent += result
    console.log(result)
    retainResult(result)}

}

//basic algebra

function solveAlgebra(){
    document.addEventListener("keydown", (event) => {
  if (event.key === "x") {
    x.click();
  }
});
    algOperatorsTyped = 0
    operatorsTyped -= Infinity
    console.log(operatorsTyped)
    buttons.removeChild(algebra)
    buttons.appendChild(arithmetic)
    buttons.appendChild(solve)
    buttons.appendChild(x)
    equals.removeEventListener("click", evaluate)
    equals.addEventListener("click", updateAlg)
    equals.value = "="
    one.removeEventListener("click", updateDisplay)
    one.addEventListener("click", updateAlg)
    two.removeEventListener("click", updateDisplay)
    two.addEventListener("click", updateAlg)
    three.removeEventListener("click", updateDisplay)
    three.addEventListener("click", updateAlg)
    four.removeEventListener("click", updateDisplay)
    four.addEventListener("click", updateAlg)
    five.removeEventListener("click", updateDisplay)
    five.addEventListener("click", updateAlg)
    six.removeEventListener("click", updateDisplay)
    six.addEventListener("click", updateAlg)
    seven.removeEventListener("click", updateDisplay)
    seven.addEventListener("click", updateAlg)
    eight.removeEventListener("click", updateDisplay)
    eight.addEventListener("click", updateAlg)
    nine.removeEventListener("click", updateDisplay)
    nine.addEventListener("click", updateAlg)
    zero.removeEventListener("click", updateDisplay)
    zero.addEventListener("click", updateAlg)
    decimal.removeEventListener("click", updateDisplay)
    decimal.addEventListener("click", updateAlg)
    plus.removeEventListener("click", updateDisplay)
    plus.addEventListener("click", updateAlg)
    minus.removeEventListener("click", updateDisplay)
    minus.addEventListener("click", updateAlg)
    division.removeEventListener("click", updateDisplay)
    division.addEventListener("click", updateAlg)
    multiplication.removeEventListener("click", updateDisplay)
    multiplication.addEventListener("click", updateAlg)
    power.removeEventListener("click", updateDisplay)
    power.addEventListener("click", updateAlg)
}


let algOperatorsTyped = 0
let numericOperand = []

function updateAlg(event){
  equation.textContent += event.target.value
  arr.push(event.target.value);
    if (event.target.value === "+" || event.target.value === "-" ||
    event.target.value === "/" || event.target.value === "*" ||
    event.target.value === "**" || event.target.value === "="){
      for (let i = 0; i <= arr.length; i++){
        if (arr[i] === "1" || arr[i] === "2" || arr[i] === "3" ||
            arr[i] === "4" || arr[i] === "5" || arr[i] === "6" || 
            arr[i] === "7" || arr[i] === "8" || arr[i] === "9" || 
            arr[i] === "0" || arr[i] === ".") {
              numericOperand = arr.splice(i, 1)
              console.log(numericOperand)
      }
    }
}
}

let solution = [];
function solveForX(event) {
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] === "=") {
        arr.splice(i, 1)
    }
    else if (arr[i] === "x") {
        solution.push(arr[i]);
        solution.push("=");
        arr.splice(i, 1);
    }
    else if (arr[i] === "+") {
        arr[i] = "-"
        const item = arr.splice(i, 1)[0];
        arr.push(item);
    }
    else if (arr[i] === "-") {
        arr[i] = "+"
        const item = arr.splice(i, 1)[0];
        arr.push(item);
    }
    else if (arr[i] === "*") {
        arr[i] = "/"
        const item = arr.splice(i, 1)[0];
        arr.push(item);
    }
    else if (arr[i] === "/") {
        arr[i] = "*"
        const item = arr.splice(i, 1)[0];
        arr.push(item);
    }
    }
    arr.push(numericOperand[0])
    evaluate()
    
  }

function appendToX(solution, result){
      solution.push(result)
      console.log(solution)
      xEquals = solution.join('')
      equation.textContent = xEquals
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
document.addEventListener("keydown", (event) => {
  if (event.key === "+" || (event.key === "=" && event.shiftKey)) {
    plus.click();
  }
});


const minus = document.createElement("button")
minus.style.color = "white" 
minus.style.backgroundColor = "blue"
minus.style.width = "35px" 
minus.style.height = "35px"
minus.textContent = "-"
minus.value = "-"
buttons.appendChild(minus)
minus.addEventListener("click", updateDisplay)
document.addEventListener("keydown", (event) => {
  if (event.key === "-") {
    minus.click();
  }
});

const division = document.createElement("button")
division.style.color = "white" 
division.style.backgroundColor = "blue"
division.style.width = "35px" 
division.style.height = "35px"
division.textContent = "÷"
division.value = "/"
buttons.appendChild(division)
division.addEventListener("click", updateDisplay)
document.addEventListener("keydown", (event) => {
  if (event.key === "/") {
    division.click();
  }
});

const multiplication = document.createElement("button")
multiplication.style.color = "white" 
multiplication.style.backgroundColor = "blue"
multiplication.style.width = "35px" 
multiplication.style.height = "35px"
multiplication.textContent = "×"
multiplication.value = "*"
buttons.appendChild(multiplication)
multiplication.addEventListener("click", updateDisplay)
document.addEventListener("keydown", (event) => {
  if (event.key === "*") {
    multiplication.click();
  }
});

const power = document.createElement("button")
power.style.color = "white" 
power.style.backgroundColor = "blue"
power.style.width = "35px" 
power.style.height = "35px"
power.textContent = "^"
power.value = "**"
buttons.appendChild(power)
power.addEventListener("click", updateDisplay)
document.addEventListener("keydown", (event) => {
  if (event.key === "^") {
    power.click();
  }
});

const equals = document.createElement("button")
equals.style.color = "white" 
equals.style.backgroundColor = "blue"
equals.style.width = "35px" 
equals.style.height = "35px"
equals.textContent = "="
buttons.appendChild(equals)
equals.addEventListener("click", evaluate)
document.addEventListener("keydown", (event) => {
  if (event.key === "=") {
    equals.click();
  }
});


const one = document.createElement("button")
one.style.color = "white" 
one.style.backgroundColor = "blue"
one.style.width = "35px" 
one.style.height = "35px"
one.textContent = "1"
one.value = "1" 
buttons.appendChild(one)
one.addEventListener("click", updateDisplay)
document.addEventListener("keydown", (event) => {
  if (event.key === "1") {
    one.click();
  }
});

const two = document.createElement("button")
two.style.color = "white" 
two.style.backgroundColor = "blue"
two.style.width = "35px" 
two.style.height = "35px"
two.textContent = "2"
two.value = "2" 
buttons.appendChild(two)
two.addEventListener("click", updateDisplay)
document.addEventListener("keydown", (event) => {
  if (event.key === "2") {
    two.click();
  }
});

const three = document.createElement("button")
three.style.color = "white" 
three.style.backgroundColor = "blue"
three.style.width = "35px" 
three.style.height = "35px"
three.textContent = "3"
three.value = "3" 
buttons.appendChild(three)
three.addEventListener("click", updateDisplay)
document.addEventListener("keydown", (event) => {
  if (event.key === "3") {
    three.click();
  }
});

const four = document.createElement("button")
four.style.color = "white" 
four.style.backgroundColor = "blue"
four.style.width = "35px" 
four.style.height = "35px"
four.textContent = "4"
four.value = "4" 
buttons.appendChild(four)
four.addEventListener("click", updateDisplay)
document.addEventListener("keydown", (event) => {
  if (event.key === "4") {
    four.click();
  }
});

const five = document.createElement("button")
five.style.color = "white" 
five.style.backgroundColor = "blue"
five.style.width = "35px" 
five.style.height = "35px"
five.textContent = "5"
five.value = "5" 
buttons.appendChild(five)
five.addEventListener("click", updateDisplay)
document.addEventListener("keydown", (event) => {
  if (event.key === "5") {
    five.click();
  }
});

const six = document.createElement("button")
six.style.color = "white" 
six.style.backgroundColor = "blue"
six.style.width = "35px" 
six.style.height = "35px"
six.textContent = "6"
six.value = "6" 
buttons.appendChild(six)
six.addEventListener("click", updateDisplay)
document.addEventListener("keydown", (event) => {
  if (event.key === "6") {
    six.click();
  }
});

const seven = document.createElement("button")
seven.style.color = "white" 
seven.style.backgroundColor = "blue"
seven.style.width = "35px" 
seven.style.height = "35px"
seven.textContent = "7"
seven.value = "7" 
buttons.appendChild(seven)
seven.addEventListener("click", updateDisplay)
document.addEventListener("keydown", (event) => {
  if (event.key === "7") {
    seven.click();
  }
});


const eight = document.createElement("button")
eight.style.color = "white" 
eight.style.backgroundColor = "blue"
eight.style.width = "35px" 
eight.style.height = "35px"
eight.textContent = "8"
eight.value = "8" 
buttons.appendChild(eight)
eight.addEventListener("click", updateDisplay)
document.addEventListener("keydown", (event) => {
  if (event.key === "8") {
    eight.click();
  }
});

const nine = document.createElement("button")
nine.style.color = "white" 
nine.style.backgroundColor = "blue"
nine.style.width = "35px" 
nine.style.height = "35px"
nine.textContent = "9"
nine.value = "9" 
buttons.appendChild(nine)
nine.addEventListener("click", updateDisplay)
document.addEventListener("keydown", (event) => {
  if (event.key === "9") {
    nine.click();
  }
});

const zero = document.createElement("button")
zero.style.color = "white" 
zero.style.backgroundColor = "blue"
zero.style.width = "35px" 
zero.style.height = "35px"
zero.textContent = "0"
zero.value = "0" 
buttons.appendChild(zero)
zero.addEventListener("click", updateDisplay)
document.addEventListener("keydown", (event) => {
  if (event.key === "0") {
    zero.click();
  }
});

const decimal = document.createElement("button")
decimal.style.color = "white" 
decimal.style.backgroundColor = "blue"
decimal.style.width = "35px" 
decimal.style.height = "35px"
decimal.textContent = "."
decimal.value = "." 
buttons.appendChild(decimal)
decimal.addEventListener("click", updateDisplay)
document.addEventListener("keydown", (event) => {
  if (event.key === ".") {
    decimal.click();
  }
});

const clear = document.createElement("button")
clear.style.color = "white" 
clear.style.backgroundColor = "blue"
clear.style.width = "35px" 
clear.style.height = "35px"
clear.textContent = "cl" 
buttons.appendChild(clear)
clear.addEventListener("click", clearAll)

const algebra = document.createElement("button")
algebra.style.color = "white"
algebra.style.backgroundColor = "purple"
algebra.style.width = "210px"
algebra.style.height = "45px"
algebra.textContent = "algebra"
buttons.appendChild(algebra)
algebra.addEventListener("click", solveAlgebra)

const arithmetic = document.createElement("button")
arithmetic.style.color = "white"
arithmetic.style.backgroundColor = "purple"
arithmetic.style.width = "105px"
arithmetic.style.height = "45px"
arithmetic.textContent = "arithmetic"
arithmetic.addEventListener("click", solveArithmetic)

const x = document.createElement("button")
x.style.color = "white"
x.style.backgroundColor = "purple"
x.style.width = "35px"
x.style.height = "45px"
x.textContent = "x"
x.value = "x"
x.addEventListener("click", updateAlg)


const solve = document.createElement("button")
solve.style.color = "white"
solve.style.backgroundColor = "purple"
solve.style.width = "70px"
solve.style.height = "45px"
solve.textContent = "solve"
solve.addEventListener("click", solveForX)



//display of numbers

const display = document.querySelector('.display');
display.style.border = "0.0033px solid black"

const equation = document.createElement("div")
equation.style.color = "black"
equation.style.backgroundColor = "white"
equation.style.width = "210px"
equation.style.height = "50px"
display.appendChild(equation)

