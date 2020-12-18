const length = document.getElementById('getlength')
const upperCase = document.getElementById('getuppercase')
const lowerCase = document.getElementById("getlowercase")
const numbers = document.getElementById("getnumbers")
const symbols = document.getElementById("getsymbols")
const generateButton = document.querySelector(".generate-button")
const outputText = document.querySelector(".password-output")
const copyButton = document.querySelector(".copy-button")

let upperCaseHasChecked=false , lowerCaseHasChecked=false , numbersHasChecked=false , symbolsHasChecked=false
let functions = [{
                name : getRandomUpperCase,
                id:1
                 },
                 {
                name:getRandomLowercase,
                id:2
                 },
                 {
                name:getRandomNumbers,
                id:3
                 },
                 {
                name:getRandomSymbols,
                id:4
                 }]

function getRandomUpperCase(){
    return String.fromCharCode(Math.floor(Math.random()*26 + 65))
}

function getRandomLowercase(){
    return String.fromCharCode(Math.floor(Math.random()*26 + 97))
}

function getRandomNumbers(){
    return String.fromCharCode(Math.floor(Math.random()*10 + 48))
}

function getRandomSymbols(){
    let symbols ="~! @#$%^&*()_-+=|\:;<>.?/"
    return symbols[Math.floor(Math.random()*symbols.length)]
}

upperCase.addEventListener('click',()=>{
    upperCaseHasChecked =upperCase.checked

})

lowerCase.addEventListener('click',()=>{
    lowerCaseHasChecked=lowerCase.checked
})

numbers.addEventListener('click',()=>{
    numbersHasChecked = numbers.checked
})

symbols.addEventListener('click',()=>{
    symbolsHasChecked = symbols.checked
})

length.addEventListener('change',()=>{

})

generateButton.addEventListener('click',()=>{

   if(upperCaseHasChecked===false){
    functions=functions.filter(list=>list.id!==1)
   }
   if(lowerCaseHasChecked===false){
    functions=functions.filter(list=>list.id!==2)
   }
   if(numbersHasChecked===false){
    functions=functions.filter(list=>list.id!==3)
   }
   if(symbolsHasChecked===false){
    functions=functions.filter(list=>list.id!==4)
   }

   let outputPassword = ""
  for(i=0;i<length.value;i++){
      outputPassword+=functions[Math.floor(Math.random() *functions.length)].name()
  }
  outputText.innerText=outputPassword
})


copyButton.addEventListener('click',()=>{
  const aux = document.createElement('input')
  aux.setAttribute('value', outputText.innerHTML)
  document.body.appendChild(aux)
  aux.select()
  document.execCommand('copy')
  document.body.removeChild(aux);
})