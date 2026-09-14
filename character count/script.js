const text= document.getElementById("text");
const character= document.getElementById("charCount");

text.addEventListener('input', ()=>{
    character.textContent = text.value.length;
})