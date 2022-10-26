const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M",
"N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e",
"f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w",
"x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`",
"!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",
",","|",":",";","<",">",".","?","/"];

let passOneEl = document.getElementById("pass-one")
let passTwoEl = document.getElementById("pass-two")
let randomPassOne = ""
let randomPassTwo = ""

function getRandomPassOne() {
    for (let i = 0; i < 16; i ++) {
        randomPassOne +=  characters[Math.floor(Math.random() * characters.length)]
    }
    return randomPassOne
}
function getRandomPassTwo() {
    for (let i = 0; i < 16; i ++) {
        randomPassTwo +=  characters[Math.floor(Math.random() * characters.length)]
    }
    return randomPassTwo
}
function generatePassword() {
    passOneEl.textContent = getRandomPassOne()
    passTwoEl.textContent = getRandomPassTwo()
}

