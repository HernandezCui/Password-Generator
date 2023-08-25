// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


function generatePassword() {

  // Password Characters 
    var numericChar = "0123456789";
    var specialChar = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
    var lowerCaseChar = "abcdefghijklmnopqrstuvwxyz";
    var upperCaseChar = "ABCDEFGHIJKLMNOPQRSTUVVWXYZ";

  
  //  Password length
    var characterLength = prompt("In order to generate a password, you must enter the length of characters you desire that are in between 8 and 128 characters!");
      if (characterLength < 8 || characterLength > 128) {
        alert("Character length does not match requirements");
      }
  
// criteria prompts 
    var getNumber = confirm("Do you want to include NUMBERS?");
    var getSpecialCharacters = confirm("Do you want to include SPECIAL CHARACTERS?");
    var getLowerCase = confirm("Do you want to include LOWERCASE characters?");
    var getUpperCase = confirm("Do you want to include UPPERCASE characters?");
  
    // validate one character type
      if (!getNumber || !getSpecialCharacters || !getLowerCase || !getUpperCase) {
        alert ("Must select at least one type of character")
       }
  



    
      
    } 