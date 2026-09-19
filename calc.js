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

const calc=(num1, operator, num2)=>{
    return [num1, operator, num2]
}
function main(){
    const [number1, operators, number2]=calc(43,"-", 89)
    if(operators ==="+"){
        return addtionNumbers(number1, number2);
    }else if(operators ==="-"){
        return subtractNumbers(number1, number2);
    }else if(operators==="*"){
        return multiplyNumbers(number1, number2);
    }else if(operators==="/"){
        return divideNumbers(number1, number2);
    }else{
        return "invalid operator";
    }
}main();