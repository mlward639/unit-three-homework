// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q','r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var uppercase = lowercase.map(lowercase => lowercase.toUpperCase());
var numeric = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
var special = ['`', '~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '=', '+', '[', '{', ']', '}', '\\', '|', ';', ':', "'", '"', ',', '<', '.', '>', '/', '?'];
var characterOptions= [];
var characterLength = '';
var characterLength = '';
var generatePassword = [];

console.log("lowercase array: " + lowercase);
console.log("uppercase array: " + uppercase);
console.log("numeric array: " +numeric);
console.log("special array: " + special);

// Write password to the #password input  

//this function is triggered by click of Generate Password based off of HTML code
function generateButton() {
  //Prompts to give the length for password
  var characterLength = prompt("Enter length of password (8-128 characters).");
  console.log("character length pre parse: " + characterLength);
  //Change string to number
  var characterLength = parseInt(characterLength);
  console.log("character length: " + characterLength);
  //Error if character length parameters not met causing function to start over
  if (characterLength < 8 || characterLength > 128) {
    alert("Error: password must be between 8-128 characters.");
    generateButton();
  //If character length parameters are met, it will continue 
  } else {
  
    //Prompts to select the character types for password

    //lowercase
    var characterTypes = alert("Choose whether to include the following character types in your password.")
      console.log(characterTypes);
    var includeLowercase = prompt("Include lowercase characters? Y/N");
      //in each prompt, changed user input of Y/N to uppercase if they entered lowercase y/n
      includeLowercase = includeLowercase.toUpperCase();
      console.log("Lowercase? " + includeLowercase);
      // Error message if Y or N not chosen
      if (includeLowercase !== "Y" && includeLowercase !== "N") {
        alert("Error: You must enter either Y or N.");
        generateButton();
      };
      //if they chose lowercase, that array will be included in password generation
      if (includeLowercase === "Y") {
      characterOptions = characterOptions.concat(lowercase);
      };

    //uppercase
    var includeUppercase = prompt("Include uppercase characters? Y/N");
      includeUppercase = includeUppercase.toUpperCase();
      console.log("Uppercase? " + includeUppercase);
      //Error if Y/N not chosen
      if (includeUppercase !== "Y" && includeUppercase !== "N") {
        alert("Error: You must enter either Y or N");
        generateButton();
      };
      //if they chose uppercase, that array is included in password generation
      if (includeUppercase === "Y") {
        characterOptions = characterOptions.concat(uppercase);
      };

    //numeric
    var includeNumeric = prompt("Include numeric characters? Y/N");
      var includeNumeric = includeNumeric.toUpperCase();
      console.log("Numbers? " + includeNumeric);
      //Error if Y/N not chosen
      if (includeNumeric !== "Y" && includeNumeric !== "N") {
        alert("Error: You must enter either Y or N");
        generateButton();
      }
      //if they chose numeric, that array is included in password generation
      if (includeNumeric === "Y") {
        characterOptions = characterOptions.concat(numeric);
      };

    //special
    var includeSpecial = prompt("Include special characters? Y/N");
      includeSpecial = includeSpecial.toUpperCase();
      console.log("Special characters? " + includeSpecial);
      //Error if Y/N not chosen
      if (includeSpecial !== "Y" && includeSpecial !== "N") {
        alert("Error: You must enter either Y or N");
        generateButton();
      }
      //if they chose special, that array is included in password generation
      if (includeSpecial === "Y") {
        characterOptions = characterOptions.concat(special);
      };

    console.log("Chosen character options: " + characterOptions);

    //Error if no character types are selected 
    if (includeLowercase === "N" && includeUppercase === "N" && includeNumeric === "N" && includeSpecial === "N") {
        alert("Error: Must select at least one character type.");
        generateButton();
    } else {

      console.log(characterLength, characterOptions)

      for (let i=0; i < characterLength; i++) {
      var generateRandomNumber = Math.floor(Math.random() * characterOptions.length);
      console.log("random number: " + generateRandomNumber);

      var randomCharacter = characterOptions[generateRandomNumber];
      console.log("random character: " + randomCharacter);

      generatePassword.push(randomCharacter);
      } 

      generatePassword = generatePassword.join('');
    
      console.log("Generated password: " + generatePassword);

      // add password text to webpage
      document.getElementById('password').value = generatePassword;
      
      return;
    }
  }
}


// Removed event listener to generate button b/c the html file included an on click function so it created a redundant loop through prompts. So could have removed Event listener or the code in HTML
//generateBtn.addEventListener("click", generateButton);  
