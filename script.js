const userName = document.querySelector('#user-name');

const mirrorButton = document.querySelector('#mirror-button')

function getUserInput(){
  console.log(userName.value)
}

mirrorButton.addEventListener('click', getUserInput)