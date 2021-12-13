// Assignment code here

var generatePassword = function() {

  var password="";
  var options=[];
  var lowerCase=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  var upperCase = lowerCase.map(function (a) {
    return a.toUpperCase();
  });
  var specCharSet=[];
  var nummies=[];
  
  //ask what length you want the pw to be 8-128 and window alert selection or invaid input
  pwLength = window.prompt("between integers 8-128 inclusive, how many characters long would you like your password to be?");

  var criteriaTypes = function() {
    var criteriaWord=""
    //window alert that they must choose one of the following 4 character types to include
    window.alert("You must choose one of the following four character types to generate a password.");
  
    //ask if they want to include lowercase letters and window alert
    if (window.prompt("Enter '1' to include lowercase letters")=== '1') {
      window.alert("Thank you, lowercase letters will be included.");
      //add all lowercase letters to the array 'options' so that we can pull the rest of the characters to fit the pwlength
      options+=lowerCase;
      //add at least one of the lowercase letters to the criteriaWord to be add to password
      criteriaWord += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    }
    else {
      window.alert("Lowercase letters will not be included.");
    }
  
  
    //ask if they want to include uppercase letters and window alert
  
    //ask if they want to include numbers and window alert
  
    //ask if they want to include special characters and window alert
  
    //check they chose one of the four options or run again
  
    if (options.length === 0) {
      window.alert("You must select one of the four character types. Thank you for understanding.");
      criteriaTypes();
    }
    else {
      window.alert("Password criteria successfully set, thank you.");
      return criteriaWord;
    }
  }

  if (!(pwLength >= 8 && pwLength <=128)) {
    window.alert("That is not a valid length, please try again.");
    generatePassword();
  }
  
  else {
    password+=criteriaTypes();
    //more code to add more characters from options to criteria word to reach the desired pw length
    return password;
  }
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
