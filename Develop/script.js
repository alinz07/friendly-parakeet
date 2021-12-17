// Assignment code here

var generatePassword = function() {
  var password="";
  var options=[];
  var lowerCase=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  var upperCase = lowerCase.map(function (a) {
    return a.toUpperCase();
  });
  var specCharSet=['/','[','!','@','#','$','%','^','&','*','(',')','_','+','\\','-','=','{','}',';',':','"','|',',','.','<','>','?','+',']'];
  var nummies=[0,1,2,3,4,5,6,7,8,9];
  var pwLength = 0;
  
  //ask what length you want the pw to be 8-128 and window alert selection or invaid input
  while (!(pwLength >= 8 && pwLength <=128)) {
    pwLength = window.prompt("between integers 8-128 inclusive, how many characters long would you like your password to be?");
    if (!(pwLength >= 8 && pwLength <=128)) {
      window.alert("Invalid input");
    }
    else {
      continue
    }
  }

  var criteriaTypes = function() {
    //use a while loop to ensure they choose at least one pw criteria
    while (options.length === 0) {
      var criteriaWord=""
      //window alert that they must choose one of the following 4 character types to include
      window.alert("You must choose one of the following four character types to generate a password.");
  
      //ask if they want to include lowercase letters and window alert
      if (window.prompt("Enter '1' to include lowercase letters, or leave blank and select okay")=== '1') {
        window.alert("Thank you, lowercase letters will be included.");
        //add all lowercase letters to the array 'options' so that we can pull the rest of the characters to fit the pwlength
        //I learned that I should've used options.concat(lowercase), because this way, I ended up with commas as strings in my 
        //options array and passwords were filled with commas. I use a for loop below to get rid of the commas instead of refactoring
        //because I got it to work and need to move on.
        options+=lowerCase;
        //add at least one of the lowercase letters to the criteriaWord to be add to password
        criteriaWord += lowerCase[Math.floor(Math.random() * lowerCase.length)];
      }
      else {
        window.alert("Lowercase letters will not be included.");
      }

      //ask if they want to include lowercase letters and window alert
      if (window.prompt("Enter '2' to include uppercase letters or leave blank and select okay")=== '2') {
        window.alert("Thank you, uppercase letters will be included.");
        //add all lowercase letters to the array 'options' so that we can pull the rest of the characters to fit the pwlength
        options+=upperCase;
        //add at least one of the lowercase letters to the criteriaWord to be add to password
        criteriaWord += upperCase[Math.floor(Math.random() * upperCase.length)];
      }
      else {
        window.alert("Uppercase letters will not be included.");
      }
  
      //ask if they want to include numbers and window alert
      if (window.prompt("Enter '3' to include numbers or leave blank and select okay")=== '3') {
        window.alert("Thank you, numbers will be included.");
        //add all lowercase letters to the array 'options' so that we can pull the rest of the characters to fit the pwlength
        options+=nummies;
        //add at least one of the lowercase letters to the criteriaWord to be add to password
        criteriaWord += nummies[Math.floor(Math.random() * nummies.length)];
      }
      else {
        window.alert("Numbers will not be included.");
      }
  
      //ask if they want to include special characters and window alert
      if (window.prompt("Enter '4' to include special characters or leave blank and select okay")=== '4') {
        window.alert("Thank you, special characters will be included.");
        //add all special characters to the array 'options' so that we can pull the rest of the characters to fit the pwlength
        options+=specCharSet;
        //add at least one of the lowercase letters to the criteriaWord to be add to password
        criteriaWord += specCharSet[Math.floor(Math.random() * specCharSet.length)];
      }
      else {
        window.alert("Special characters will not be included.");
      }

      } //end of while loop

      window.alert("Password criteria successfully set, thank you.");
      return criteriaWord;

    } //end of criteriaTypes() function

    //Concatenate the string returned by criteriaTypes() to the empty variable password. so far, password contains at least one of each selected criteria
  password+=criteriaTypes();

  //This is the for loop I could've gotten rid of had I used the array1.concat(array2) method
  charOptions=[];
  for (i=0; i<options.length; i++) {
    if (options[i] === ',') {
      continue;
    }
    else {
      charOptions+=options[i];
    }
  }

  //this is how I set the number of iterations in the following for loop to randomly get the rest of the characters for the
  //password using the types of characters selected by the user.
  var charToGo = pwLength - password.length;

  for (let i=0; i<charToGo; i++) {
    password+=charOptions[Math.floor(Math.random() * charOptions.length)];
  }

  return password;
} //end of generatePassword() function 

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
