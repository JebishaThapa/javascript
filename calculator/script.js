`use strict`;
const calculator = document.getElementById('calc-board');
const opt = document.getElementById('opt');

calculator.addEventListener('click',(e)=>{
    const btn = e.target.closest('button');
    if(!btn) return '';
    if(btn.id=== 'operators-equal'){
        try{
            const getOpt = opt.textContent;
            opt.textContent=`Result:${eval(getOpt)}`
        }catch(err){
            opt.textContent="Syntax Error"

        }
    }else{
        if (opt.textContent.startsWith('Result') || opt.textContent.includes('Syntax Error')) opt.textContent="";
        opt.textContent+=btn.textContent;
    }
})    