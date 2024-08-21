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
displayable.forEach((number) => {
    let num = number.className;
    number.addEventListener("click", () => {
        display.value += num;
    });
});

const clear = document.querySelector(".clear");
clear.addEventListener("click", () => {
    display.value = "";
});
