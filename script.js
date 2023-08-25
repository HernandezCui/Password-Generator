// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {

// Password Characters 
  var passwordOptions = { 
    numeric: "0123456789",
    specialChar: "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~",
    lowerCaseABC: "abcdefghijklmnopqrstuvwxyz",
    upperCaseABC: "ABCDEFGHIJKLMNOPQRSTUVVWXYZ"
  }

  var passInfo = "";
  var passChars = [];

  // criteria prompts for password
  var characterLength = prompt("In order to generate a password, you must enter the length of characters you desire that are in between 8 and 128 characters!");
    if (characterLength < 8 && characterLength > 128) {
      alert("Character length does not match requirements");
    }

  var getNumber = confirm("Do you want to include NUMBERS?");
    if (getNumber) {
      passInfo += passwordOptions.numeric;
      passChars.push(getRandomChar(passwordOptions.numeric));
    }

  var getSpecialCharacters = confirm("Do you want to include SPECIAL CHARACTERS?");
    if (getSpecialCharacters) {
      passInfo += passwordOptions.specialChar;
      passChars.push(getRandomChar(passwordOptions.specialChar));
    }

  var getLowerCase = confirm("Do you want to include LOWERCASE characters?");
    if (getLowerCase) {
      passInfo += passwordOptions.lowerCaseABC;
      passChars.push(getRandomChar(passwordOptions.lowerCaseABC));
    }
      
  var getUpperCase = confirm("Do you want to include UPPERCASE characters?");
      if (getUpperCase) {
          passInfo += passwordOptions.upperCaseABC;
          passChars.push(getRandomChar(passwordOptions.upperCaseABC));
        }
  } 






  
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
