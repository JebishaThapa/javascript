const btn= document.getElementById('btn');
const passField = document.getElementById('password-input');

btn.addEventListener('click', ()=>{
    if (passField.type=== 'password'){
        passField.type ='text';
        btn.textContent='Hide';
    }else{
        passField.type='password';
        btn.textContent='Show';
    }
})