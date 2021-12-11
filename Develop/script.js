// Assignment code here

var generatePassword = function() {

  //ask what length you want the pw to be 8-128 and window alert selection or invaid input

  var password="";

  pwLength = window.prompt("between integers 8-128 inclusive, how many characters long would you like your password to be?");

    while (!pwLength >= 8 && !pwLength<=128) {
      window.prompt("That is not a valid length, please try again.");
      generatePassword();
    }
  
  return password;
}

var typeCriteria = function() {
    //window alert that they must choose one of the following 4 character types to include

  //ask if they want to include lowercase letters and window alert

  //ask if they want to include uppercase letters and window alert

  //ask if they want to include numbers and window alert

  //ask if they want to include special characters and window alert

  //check they chose one of the four options or run again
}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
