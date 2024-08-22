const add = (num1, num2) => {
    return num1 + num2;
};

const subtract = (num1, num2) => {
    return num1 - num2;
};

const multiply = (num1, num2) => {
    return num1 * num2;
};

const divide = (num1, num2) => {
    return num1 / num2;
};

const display = document.querySelector("input");
let displayValue;

//not sure if i will use these
let firstNum;
let operator;
let secondNum;


const operate = (oper, num1, num2) => {
    switch(oper){
        case "+":
            add(num1,num2);
        break;
        case "-":
            subtract(num1,num2);
        break;
        case "*":
            multiply(num1,num2);
        break;
        case "/": 
            divide(num1,num2);
        break;
    }
}

const displayable = document.querySelectorAll("#displayable");
const operators = document.querySelectorAll("#operator");

// we can know which num variable we assigning to by checking if the operator type undefined or not (num1 is undefinded, num2 if defined)
displayable.forEach((number) => {
    number.addEventListener("click", () => {
        display.value += number.className;
        displayValue = display.value;
    });
});

//should also have some type of boolean expresion that tells calculator we move onto num2 when clicking an operator
// idea maybe make operator an object that holds the operator type and bool if operator has been chosen
// actually we can know if operator has been clicked by knowing the operator type, if same type is clicked then we will set it back to undefined
operators.forEach((oper) => {
    oper.addEventListener("click", () => {
        display.value += oper.className;
        displayValue = display.value;
        operator = oper.className.trim();
    });  
})

const clear = document.querySelector(".clear");
clear.addEventListener("click", () => {
    display.value = "";
    displayValue = display.value;
    operator = undefined;
});

/* To do
   - Make calculator behave more like phone calculator (similar to student example)
   - After clicking operator button, calculator must know that you are now entering number into num2
   - Clicking an operator when we are looking at num2 will run operate()
   
*/