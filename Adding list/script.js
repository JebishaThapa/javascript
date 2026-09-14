const input = document.getElementById("todo-input");
const btn = document.getElementById("todo-button");
const list = document.getElementById("list");

btn.addEventListener('click', () =>{
    if(input.value!=''){
        let listItem = document.createElement('li');
        listItem.textContent=input.value;
        list.appendChild(listItem);
        input.value='';
    }

    
})