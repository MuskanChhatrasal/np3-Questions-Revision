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