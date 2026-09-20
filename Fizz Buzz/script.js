const input = document.getElementById("number-input");
const btn= document.getElementById("btn");
const result = document.getElementById("board");
btn.addEventListener("click",()=>{

    result.innerHTML="";
    
    const inputNum = parseInt(input.value, 10);
    if(isNaN(inputNum) || inputNum<1){
        alert("Please input a valid number");
    }
    for (let i =1; i<=inputNum; i++){
        const resultNum = document.createElement('p');

        if (i%3===0 && i%5===0){
           resultNum.innerText = "FizzBuzz";
        }else if(i%3===0){
            resultNum.innerText ="Fizz";
            
        }else if(i%5===0){
            resultNum.innerText ="Buzz";
        }else{
            resultNum.innerText= i;
        }
        result.appendChild(resultNum);
    }
    
})
