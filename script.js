// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {

  // criteria prompts for password
  var keylength = prompt("Password must be between 8 and 128 characters! Click OK to continue"); 
  var numbers = confirm("Your password needs a number! Click OK to continue");
  var symbols = confirm("Your password needs a symbol! Click OK to continue");
  var uppercase = confirm("Your password needs an uppercase letter! Click OK to continue");
  var lowercase = confirm("Your password needs a lowercase letter! Click OK to continue");


  // Password Characters
  var numeric ="0123456789";
  var uppercaseABC = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowercaseABC = "abcdefghijklmnopqrstuvwxyz";
  var specialSymbols = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
  var multiselect = "[]"; 
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
