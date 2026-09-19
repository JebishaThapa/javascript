const text = document.getElementById("text");
const btn= document.getElementById("btn");
const list= document.getElementById(list);

function showTask(){
    if(text.value===""){
        alert("you must write something")
    }else{
        let li = document.createElement('li');
        li.innerHTML= text.value;
        list.appendChild(li);
    }
    text.value ="";
}
list.addEventListener('click',(e)=>{
    if(e.target.tagName==='LI'){
        e.target.classList.toggle("checked")
    }
})

