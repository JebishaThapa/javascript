const input= document.getElementById('input-name');
const button = document.getElementById('greetbtn');
const output = document.getElementById('output');


button.addEventListener('click', () =>{
    const text=input.value;
    output.textContent = `Hello ${text}`;

})