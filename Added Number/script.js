 const inputValue = document.getElementById("inputValue");
 const btn = document.getElementById("btn");
 const outputBox = document.getElementById("output-box");
 const largestBox = document.getElementById("largest-box");
 let arr = [];
 function addedArray(){
    let input = parseInt(inputValue.value, 10);
    if(inputValue && !isNaN(input)){
        arr.push(input);
    }
    for (let i=0; i<arr.length; i++){
        let list = document.createElement("li");
        list.textContent=arr[i];
        outputBox.appendChild(list);
    }

function highestNumber(){
    let maxNumber = arr[0];
    for(let i=0; i<arr.length; i++){
        if (arr[i]>maxNumber){
            maxNumber=arr[i];
        }

    }
    largestBox.textContent=maxNumber;

btn.addEventListener('click',()=>{
    addedArray();

})
 }
}