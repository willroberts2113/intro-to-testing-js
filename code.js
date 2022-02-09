// helloWorld function
function helloWorld() {
    return "Hello, World!";
}

let nameInput = "Alex"
function sayHello(name) {
    if(name === true){
        return "Hello, World!";
    }else{
        return "Hello, " + name + "!";
    }
}

let randomNum = 5;
function isFive(randomNum) {
    if(randomNum === 5){
        return true;
    }else{
        return false;
    }
}

function isEven(randomNum){
    if(randomNum % 2 == 0){
        return true;
    }else{
        return false;
    }
}

const alphabet = "aBcdeFghiJklmnOpqrsTuvwxYz"
let randomVowel = alphabet[Math.floor(Math.random() * alphabet.length)]
console.log(randomVowel)

function isVowel(vowelInput){
    if(randomVowel.toLowerCase() == "a" || "e" || "i" || "o" || "u" || "y"){
        return true;
    }else{
        return false;
    }
}

// const helloWorld = function() {
//     return "Hello, World!";
// }