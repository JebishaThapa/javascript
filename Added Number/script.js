 const inputValue = document.getElementById("inputValue");
 const btn = document.getElementById("btn");
 const outputBox = document.getElementById("output-box");
 const largestBox = document.getElementById("largest-box");
 let arr = [];
 function addedArray(){
    let input = parseInt(inputValue.value, 10);
    if(isNaN(input)){
        alert("Please enter a valid number");
        return;
        
    }
    arr.push(input);
    inputValue.value="";

    outputBox.textContent= `Output: [${arr}]`;

    highestNumber();
}
function highestNumber(){
    let maxNumber = arr[0];
    for(let i=0; i<arr.length; i++){
        if (arr[i]>maxNumber){
            maxNumber=arr[i];
        }

    }
    largestBox.textContent=`The largest number is: ${maxNumber}`;
}
btn.addEventListener('click',()=>{
    addedArray();

});
