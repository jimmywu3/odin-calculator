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

let firstNum;
let operator;
let secondNum;


const operate = (oper, num1, num2) => {
    switch(oper){
        case "+":
            return add(num1,num2);
        break;
        case "-":
            return subtract(num1,num2);
        break;
        case "*":
            return multiply(num1,num2);
        break;
        case "/": 
            return divide(num1,num2)
        break;
    }
}

const displayable = document.querySelectorAll("#displayable");
const operators = document.querySelectorAll("#operator");
const decimal = document.querySelector("#decimal");

displayable.forEach((number) => {
    number.addEventListener("click", () => {
        display.value += number.className;
        if(operator === undefined){
            if(firstNum === undefined)
                firstNum = number.className;
            else
                firstNum += number.className;
        } else {
            if(secondNum === undefined)
                secondNum = number.className;
            else
                secondNum += number.className;
        }
    });
});


// make it so that if there is already an operator we will run operate
operators.forEach((oper) => {
    oper.addEventListener("click", () => {
        if(operator !== undefined && secondNum !== undefined){
            let ans = Math.round(operate(operator, Number(firstNum), Number(secondNum)) * 100) / 100;
            if(Number.isFinite(ans)){
                operator = oper.className.trim();
                secondNum = undefined;
                firstNum = String(ans);
                display.value = ans + oper.className;                
            } else {
                operator = undefined;
                secondNum = undefined;
                firstNum = undefined;    
                display.value = "DO NOT DIVIDE BY 0";  
            }

        } else if(operator === undefined && firstNum !== undefined){
            display.value += oper.className;
            operator = oper.className.trim();
        } else if(operator !== undefined && firstNum !== undefined){
            display.value = firstNum + oper.className;
            operator = oper.className.trim();
        }
        
    });  
})

const decimalHelper = (num) => {
    if(num === undefined){
        console.log("con1");
        display.value += ".";
        num = ".";
    } else if(num.indexOf(".") === -1){
        console.log("con2")
        display.value += ".";
        num += ".";
    } 
    return num;
};

decimal.addEventListener("click", ()=> {
    if(operator === undefined){ // num1
        firstNum = decimalHelper(firstNum);
    } else { // num2
        secondNum = decimalHelper(secondNum);
    }
});

const clear = document.querySelector(".clear");
clear.addEventListener("click", () => {
    display.value = "";
    operator = undefined;
    firstNum = undefined;
    secondNum = undefined;
});

const equal = document.querySelector(".equal");
equal.addEventListener("click", () => {
    if(firstNum && operator && secondNum){
        let ans = Math.round(operate(operator, Number(firstNum), Number(secondNum)) * 100) / 100;
        if(Number.isFinite(ans)){
            operator = undefined;
            secondNum = undefined;
            firstNum = ans;
            display.value = ans;
        } else {
            operator = undefined;
            secondNum = undefined;
            firstNum = undefined;    
            display.value = "DO NOT DIVIDE BY 0";  
        }
    } 
});

const negative = document.querySelector(".negative");
negative.addEventListener("click", () => {
    if(operator === undefined){
        firstNum *= -1;
        console.log(firstNum);
        if(Number.isFinite(firstNum))
            display.value = firstNum;
        else
            firstNum = undefined;
    }else{
        secondNum *= -1;
        console.log(secondNum); 
        if(Number.isFinite(secondNum))
            display.value = firstNum + " " + operator + " " + secondNum;    
        else 
            secondNum = undefined;  
    }
});

/* To do

    Other additions: 
    - keyboard support

   - UI
   - On hover effect
   - Make display bigger (fontsize)
   - grey out operator when it is present on the display

*/