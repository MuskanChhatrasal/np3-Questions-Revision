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
  }
  var output = splittedUserInput.join('')
  console.log(output)
}

mirrorButton.addEventListener('click', getMirrorInput)

userName.addEventListener('input',()=>{
  userOutput.innerText = userName.value;
})