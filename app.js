const length = document.getElementById('getlength')
const upperCase = document.getElementById('getuppercase')
const lowerCase = document.getElementById("getlowercase")
const numbers = document.getElementById("getnumbers")
const symbols = document.getElementById("getsymbols")
const generateButton = document.querySelector(".generate-button")
const outputText = document.querySelector(".password-output")
const copyButton = document.querySelector(".copy-button")


let functions = [{
                name : getRandomUpperCase,
                id:1,
                HasChecked: false
                 },
                 {
                name:getRandomLowercase,
                id:2,
                HasChecked: false
                 },
                 {
                name:getRandomNumbers,
                id:3,
                HasChecked: false
                 },
                 {
                name:getRandomSymbols,
                id:4,
                HasChecked: false
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
    functions[0].HasChecked = upperCase.checked
    

})

lowerCase.addEventListener('click',()=>{
    functions[1].HasChecked=lowerCase.checked
})

numbers.addEventListener('click',()=>{
    functions[2].HasChecked = numbers.checked
})

symbols.addEventListener('click',()=>{
    functions[3].HasChecked = symbols.checked
})


generateButton.addEventListener('click',()=>{


 const finalFunction = functions.filter(fun => fun.HasChecked===true)

   let outputPassword = ""
  for(i=0;i<length.value;i++){
      outputPassword+=finalFunction[Math.floor(Math.random() *finalFunction.length)].name()
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
  alert('password copied to clipboard')
})
