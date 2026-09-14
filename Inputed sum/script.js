const firstnum = document.getElementById("first-number");
const secondnum= document.getElementById("second-number");
const btn = document.getElementById("btn");
const result = document.getElementById("result");

btn.addEventListener('click', ()=>{
    if(!isNaN(firstnum.value) && !isNaN(secondnum.value) && firstnum.value!=="" && secondnum.value!=="" ){
        result.textContent= `Output: ${parseInt(firstnum.value, 10) + parseInt(secondnum.value, 10)}`;
    
    
    }else{
       result.textContent = "Invalid! Enter a number"; 
    }
    
})
