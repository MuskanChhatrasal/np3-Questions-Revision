const userName = document.querySelector('#user-name');

const mirrorButton = document.querySelector('#mirror-button')
const userOutput = document.querySelector('#user-output')

function getMirrorInput(){
  var userInput = userName.value;
  var splittedUserInput = userInput.split('')
  console.log(splittedUserInput)
  let i=0,j=splittedUserInput.length-1;
  while(i<=j){
    var temp = splittedUserInput[i];
    splittedUserInput[i] = splittedUserInput[j];
    splittedUserInput[j] = temp;
    i++;
    j--;
  }
  var output = splittedUserInput.join('')
  return output
}

mirrorButton.addEventListener('click', ()=>{
  userOutput.innerText = getMirrorInput();
  // getMirrorInput
})

// userName.addEventListener('input',()=>{
//   userOutput.innerText = getMirrorInput();
// })

// Question 2: Consider the data below. Get the total quantity of jeans and tshirt in an object.

const arr = [
    { category: "men", color: "blue", quantity: 5, item: "jeans" },
    { category: "women", color: "blue", quantity: 5, item: "jeans" },
    { category: "women", color: "blue", quantity: 6, item: "tshirt" },
    { category: "men", color: "blue", quantity: 2, item: "tshirt" }
  ];

var totalQuantity = {jeansQuantity: 0, tshirtQuantity: 0}

function getTotalQuantity(acc, curr){
  if(curr.item === "jeans"){
    return {...acc, jeansQuantity: acc.jeansQuantity + curr.quantity}
  }else{
    return {...acc, tshirtQuantity: acc.tshirtQuantity + curr.quantity}
  }
}

console.log(arr.reduce(getTotalQuantity, totalQuantity))
// Expected Output:
// {
// 	jeansQuantity: 10, 
// 	tshirtQuantity: 8
// }