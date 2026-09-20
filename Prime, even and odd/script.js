const number = document.getElementById("number-input");
const btn = document.getElementById("btn");
const result = document.getElementById("opt");



const prime = (num)=>{
   num = parseInt(num , 10);
   for (let i=2; i<num; i++){
        if(num%i===0) return false;
   }
   return true;
}

const evenCheck = (num)=>{
    num = parseInt(num, 10);
    if(num%2!==0) return false;
    return true;
    
}

btn.addEventListener('click',()=>{
    const inpValue = number.value;
    if (isNaN(inpValue)){
        alert("please enter a num")
    }

    let primeString;
    let evenString;

    const isPrime = prime(inpValue);
    const isEven = evenCheck(inpValue);

    if(isPrime) primeString ='prime';
    else primeString ='composite';

    if (isEven) evenString='even';
    else evenString = 'odd';

    result.textContent=`${inpValue} is ${primeString} and ${evenString}.`;
})