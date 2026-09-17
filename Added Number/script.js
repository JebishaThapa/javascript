 const inputValue = document.getElementById("inputValue");
 const btn = document.getElementById("btn");
 const outputBox = document.getElementById("output-box");
 const largestBox = document.getElementById("largest-box");
 let arr = []; //a new array empty
 function addedArray(){
    const input = parseInt(inputValue.value, 10); //made inputvalue in integer kasto? kun wala?
    if(!isNaN(input)){
        //if it is not a number error and return back no return? bahira kassari aaux
        arr.push(input);
        inputValue.value="";

    outputBox.textContent= `Output: [${arr}]`;
    }else{
        outputBox.textContent="Enter only Numbers!"
    }

    
}
function clearArray(){
    const error = inputValue.value;
    if(error.toLowerCase()==="clear"){
        outputBox.textContent="Output: cleared";
        arr=[];
        inputValue.value="";//aaba feri add garna refresh nai?anii kun hello? how to call 
        largestBox.textContent="";
    }
}
function highestNumber(){
    let maxNumber = arr[0];
    for(let i=0; i<arr.length; ++i){//how to clear them 
        if (arr[i]>maxNumber){
            maxNumber=arr[i];
        }

    }
    
    largestBox.textContent=`The largest number is: ${maxNumber}`;
}

btn.addEventListener('click',()=>{
    addedArray();
    highestNumber();
    clearArray();

});
