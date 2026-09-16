const inputField= document.getElementById("input-field");
const btn=document.getElementById("btn");
const largestNum = document.getElementById("largest-num");
const array = document.getElementById("array");
const enteredNumber = document.getElementById('entered');

let list=[]
btn.addEventListener('click', ()=>{
    if(inputField.textContent){
        const num = parseInt(inputField.value, 10);
        const addedList = document.createElement('li');
        addedList.textContent=num;
        array.appendChild(addedList);
        enteredNumber.textContent=array;
    }

 
})