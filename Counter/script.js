const number = document.getElementById('number');
const button = document.getElementById('increase');

let num =0;
button.addEventListener('click', ()=>{
    num++;
    number.textContent=num;
    
})