var generateBtn = document.querySelector("#generate"); 

function generatePassword() {
    console.log("click the button");


function getRandomItem(list){
        return list[Math.floor((Math.random() * list.length))]
    }

var userInput = window.prompt ("how long is the password?")

var passwordLength = parseInt(userInput)

if (isNaN(passwordLength)) {
    window.alert("Not valid!")
    return
}

if (passwordLength < 8 || passwordLength > 128) {
    window.alert("Password must be between 8 and 128 characters")
    return
}

var userWantsLowercase = window.confirm("would you like to include lowercase letters in your password?")
var userWantsUppercase = window.confirm("would you like to include Uppercase letters in your password?")
var userWantsNumbers = window.confirm("would you like to include numbers in your password?")
var userWantsSymbols = window.confirm("would you like to include symbols in your password?")

var lowercaseList = [ "'a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k","l", "m", "n", "o","p", "q", "r", "s", "t", "u", "v", "w","x", "y", "z"]
var uppercaseList = [ "A", "B","C", "D", "E", "F", "G", "H", "I", "J","K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X","Y", "Z"]
var numbersList = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
var symbolList = [ "!", "@", "£", "$", "%", "^", "&", "*", "(", ")"]

var symbolList = ['@','{'];

var optionsCart = []


if (userWantsLowercase === true) {
   optionsCart.push(lowercaseList)
}

if (userWantsUppercase === true) {
    optionsCart.push(uppercaseList)
}
if (userWantsNumbers === true) {
    optionsCart.push(numbersList)
}
if (userWantsSymbols === true) {
    optionsCart.push(symbolList)
}
console.log(optionsCart)

var generatedPassword = ""

for (var i = 0; i < passwordLength; i++) {
    var randomList = getRandomItem(optionsCart)
    var randomChar = getRandomItem(randomList)
    generatedPassword += randomChar
}
console.log(generatedPassword)
return generatedPassword

}


function writePassword(){ 
    var password = generatePassword(); 
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

generateBtn.addEventListener("click", writePassword);
