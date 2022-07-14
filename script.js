const userName = document.querySelector('#user-name');

const mirrorButton = document.querySelector('#mirror-button')
const userOutput = document.querySelector('#user-output')

function getMirrorInput() {
  var userInput = userName.value;
  var splittedUserInput = userInput.split('')
  console.log(splittedUserInput)
  let i = 0, j = splittedUserInput.length - 1;
  while (i <= j) {
    var temp = splittedUserInput[i];
    splittedUserInput[i] = splittedUserInput[j];
    splittedUserInput[j] = temp;
    i++;
    j--;
  }
  var output = splittedUserInput.join('')
  return output
}

mirrorButton.addEventListener('click', () => {
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

var totalQuantity = { jeansQuantity: 0, tshirtQuantity: 0 }

function getTotalQuantity(acc, curr) {
  if (curr.item === "jeans") {
    return { ...acc, jeansQuantity: acc.jeansQuantity + curr.quantity }
  } else {
    return { ...acc, tshirtQuantity: acc.tshirtQuantity + curr.quantity }
  }
}

console.log(arr.reduce(getTotalQuantity, totalQuantity))
// Expected Output:
// {
// 	jeansQuantity: 10, 
// 	tshirtQuantity: 8
// }

// Question 3: Consider the below given storeData.

const storeData = {
  women: {
    top: {
      id: "at12",
      availability: [
        { id: 1, color: "blue", quantity: 5, inStock: true },
        { id: 2, color: "black", quantity: 3, inStock: true }
      ]
    },
    jeans: {
      id: "aj12",
      availability: [
        { id: 3, color: "dark blue", quantity: 0, inStock: false },
        { id: 4, color: "dark blue", quantity: 5, inStock: true },
        { id: 5, color: "black", quantity: 5, inStock: true }
      ]
    },
    purse: {
      id: "ap12",
      availability: [
        { id: 6, color: "red", quantity: 5, inStock: true },
        { id: 7, color: "white", quantity: 0, inStock: false }
      ]
    }
  },
  men: {
    shirt: {
      id: "ms12",
      availability: [
        { id: 8, color: "yellow", quantity: 5, inStock: true },
        { id: 9, color: "black", quantity: 3, inStock: true }
      ]
    },
    jeans: {
      id: "mj12",
      availability: [
        { id: 10, color: "blue", quantity: 0, inStock: false },
        { id: 11, color: "black", quantity: 9, inStock: true }
      ]
    },
    wallet: {
      id: "mw12",
      availability: [
        { id: 12, color: "blue", quantity: 15, inStock: true },
        { id: 13, color: "black", quantity: 10, inStock: true }
      ]
    }
  }
};
// 3a: Find and console the quantity of dark blue women jeans in stock.

const darkBlueQuant = storeData.women.jeans.availability.find((data) => data.color === "dark blue" && data.inStock === true)

console.log(darkBlueQuant.quantity)

const total = { menWalletQuant: 0 };

const getWallet = (acc, curr) => {
  return { ...acc, menWalletQuant: acc.menWalletQuant + curr.quantity }
}
const totalWalletQuant = storeData.men.wallet.availability.reduce(getWallet, total)

console.log(totalWalletQuant)

// -------------------------------------------
// QUESTIONS 13TH APRIL

// Question 1: Given the below data for clothing stock.

const clothingStock = [
  { id: "0a1", color: "blue", category: "men shirt", item: "Regular Fit Men Shirt", inStock: true },
  { id: "0a2", color: "black", category: "women top", item: "Regular Fit Women Top", inStock: true },
  { id: "0a3", color: "grey", category: "men shirt", item: "Slim Fit Men Shirt", inStock: false },
  { id: "0a4", color: "grey", category: "men tshirt", item: "Slim Fit Men Tshirt", inStock: false },
  { id: "0a5", color: "red", category: "women top", item: "Slim Fit Women Top", inStock: true },
  { id: "0a6", color: "yellow", category: "men shirt", item: "Casual Fit Men Shirt", inStock: true },
  { id: "0a7", color: "orange", category: "men shirt", item: "Straight Fit Men Shirt", inStock: true },
  { id: "0a8", color: "orange", category: "women top", item: "Casual Fit Women Top", inStock: false }
]

// 1a. Console all the different colours available for men's shirts.

function differentColours(arr){
  for(let i=0;i<arr.length;i++){
    if(arr[i].category === "men shirt"){
      console.log(arr[i].color)
    }
  }
}
function colorsAndInStock(arr){
  for(let i=0;i<arr.length;i++){
    if(arr[i].category === "men shirt" && arr[i].inStock === true){
      console.log(arr[i].color)
    }
  }
}

function itemInStock(arr){
  let inStockArray = [];
  for(let i=0;i<arr.length;i++){
    if(arr[i].inStock === true){
      inStockArray.push(arr[i])
    }
  }
  return inStockArray;
}
console.log(differentColours(clothingStock))
console.log(colorsAndInStock(clothingStock))
console.log(itemInStock(clothingStock))