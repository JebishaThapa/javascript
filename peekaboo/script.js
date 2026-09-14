const btn = document.getElementById('btn');
const para = document.getElementById('paragraph');
btn.addEventListener('click', ()=>{
    if (para.style.display ==="none"){
        para.style.display ="block";
    }else{
            para.style.display="none";
    }
});