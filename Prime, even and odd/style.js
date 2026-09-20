const number = document.getElementById("number-input");
const btn = document.getElementById("btn");
const result = document.getElementById("board");



const prime = (num)=>{
    if(num<=1){
        return false;
    
    }
    for (let i = 2; i< num; i++){
       if(num % i ===0){
            return false;

    } 
    return true;
    }   
}
btn.addEventListener("click",()=>{
    const input = parseInt(number.value, 10);
    if(isNaN(input) || input<1){
        alert("Please Enter a valid number");
        return;
    }
    
   let checkOddEven = "";
   const checkOddEven=(input)=>{


   }
   
})