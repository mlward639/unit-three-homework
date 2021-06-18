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

/* their text:  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password; END */


// Write password to the #password input   if having issue getting the password to populate, check the functionn names here
function generateButton() {
  //Prompts to give the length for password
  var characterLength = prompt("Enter length of password (8-128 characters).");
  console.log("character length pre parse: " + characterLength);
  var characterLength = parseInt(characterLength);
  console.log("character length: " + characterLength);
  //Error if character length parameters not met
  if (characterLength < 8 || characterLength > 128) {
    alert("Error: password must be between 8-128 characters.");
    generateButton();
  } else {
  
      //Prompts to select the character types for password
    var characterTypes = alert("Choose whether to include the following character types in your password.")
      console.log(characterTypes);
    var includeLowercase = prompt("Include lowercase characters? Y/N");
      includeLowercase = includeLowercase.toUpperCase();
      console.log("Lowercase? " + includeLowercase);
      if (includeLowercase === "Y") {
      characterOptions = characterOptions.concat(lowercase);
      };

    var includeUppercase = prompt("Include uppercase characters? Y/N");
      includeUppercase = includeUppercase.toUpperCase();
      console.log("Uppercase? " + includeUppercase);
      if (includeUppercase === "Y") {
        characterOptions = characterOptions.concat(uppercase);
      };

    var includeNumeric = prompt("Include numberic characters? Y/N");
      var includeNumeric = includeNumeric.toUpperCase();
      console.log("Numbers? " + includeNumeric);
      if (includeNumeric === "Y") {
        characterOptions = characterOptions.concat(numeric);
      };

    var includeSpecial = prompt("Include special characters? Y/N");
      includeSpecial = includeSpecial.toUpperCase();
      console.log("Special characters? " + includeSpecial);
      if (includeSpecial === "Y") {
        characterOptions = characterOptions.concat(special);
      };

    console.log("Chosen character options: " + characterOptions);

    //Error if no character types are selected 
    if (includeLowercase === "N" && includeUppercase === "N" && includeNumeric === "N" && includeSpecial === "N") {
        alert("Error: Must select at least one character type.");
        generateButton();
    } else {

      var generateRandomNumber = Math.floor(Math.random() * characterOptions.length);
      console.log("random number: " + generateRandomNumber);

      var randomCharacter = characterOptions[generateRandomNumber];
      console.log("random character: " + randomCharacter);

              //not working
      for (i=0; i < characterLength.length; i++) {
        generatePassword = generatePassword.push(randomCharacter);
        }
      console.log("Generated password: " + generatePassword);


      // add password text to webpage
      document.getElementById('password').value = "generated password goes here: " + generatePassword;

      return;
    }
  }
}

 
 

// Add event listener to generate button
//generateBtn.addEventListener("click", generateButton); //isnt this redundant




//now randomize character options with math fxn and loop based on number chosen i think
/* function generatePassword () {
  var generateRandomNumber = Math.floor(Math.random() * characterOptions.length)
  var generateCharacters = characterOptions[generateRandomNumber]

 for (i=0; i < characterLength.length; i++) {
    console.log("Generated password: " + generateCharacters);
  }

}

generatePassword () */


