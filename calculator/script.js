const oopt=document.getElementById("opt");
const btn1=document.getElementById("btn1");
const btn2=document.getElementById("btn2");
const btn3=document.getElementById("btn3");
const btn4=document.getElementById("btn4");
const btn5=document.getElementById("btn5");
const btn6=document.getElementById("btn6");
const btn7=document.getElementById("btn7");
const btn8=document.getElementById("btn8");
const btn9=document.getElementById("btn9");
const btn0=document.getElementById("btn0");
const operatorPlus = document.getElementById("operators-plus");
const operatorMinus = document.getElementById("operators-minus");
const operatorEqual = document.getElementById("operators-equal");


const btns =[
    btn1, btn2, btn3, btn4, btn5, btn6, btn7, btn8, btn9 ,btn0, operatorEqual, operatorMinus, operatorPlus
]

let prev="";
let doneEqual =false;
for (const btn of btns){
    if(btn!== operatorEqual){
        
        btn.addEventListener("click",()=>{
            if (doneEqual) prev="";
            oopt.textContent=`${prev}${btn.textContent}`;
            doneEqual=false
            prev= oopt.textContent;
        })
    }else{
        btn.addEventListener("click",()=>{
            doneEqual=true;
            try{
                const getOpt = oopt.textContent;
                oopt.textContent=`Result: ${eval((getOpt))}`
            }catch(error){
                oopt.textContent=("Syntax Error")
            }
            
            
        })
        
    }
    
}