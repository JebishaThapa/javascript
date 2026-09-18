const addtionNumbers=(num1, num2)=>{
    return num1 + num2;
}
const subtractNumbers=(num1, num2)=>{
    return num1 - num2;
}
const multiplyNumbers=(num1, num2)=>{
    return num1*num2;
}
const divideNumbers=(num1, num2)=>{
    if(num2==0){
        return Error
    }
    return num1/num2
}


const main=(number1, operator, number2)=>{
    if(operator ==="+"){
        return addtionNumbers(number1, number2);
    }else if(operator ==="-"){
        return subtractNumbers(number1, number2);
    }else if(operator==="*"){
        return multiplyNumbers(number1, number2);
    }else if(operator==="/"){
        return divideNumbers(number1, number2);
    }else{
        return "invalid operator";
    }
}