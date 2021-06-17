// Assignment Code
var generateBtn = document.querySelector("#generate");



// Write password to the #password input
function writePassword() {
/* their text:  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password; END */

  //Prompts to give the length for password
  var characterLength = prompt("Enter length of password (8-128 characters).");
  console.log("character length: " + characterLength);
  //Error if character length parameters not met
  if (characterLength < 8 || characterLength > 128) {
    alert("Error: password must be between 8-128 characters.")
  };
    //Prompts to select the character types for password
  var characterTypes = alert("Choose whether to include the following character types in your password.")
    console.log(characterTypes);
  var characterTypesLowercase = prompt("Include lowercase characters? Y/N");
    characterTypesLowercase = characterTypesLowercase.toUpperCase();
    console.log("Lowercase? " + characterTypesLowercase);
  var characterTypesUppercase = prompt("Include uppercase characters? Y/N");
    console.log("Uppercase? " + characterTypesUppercase);
  var characterTypesNumeric = prompt("Include numberic characters? Y/N");
    console.log("Numbers? " + characterTypesNumeric);
  var characterTypesSpecial = prompt("Include special characters? Y/N")
    console.log("Special characters? " + characterTypesSpecial);
  //Error if no character types are selected 
  if (characterTypesLowercase === "N" && characterTypesUppercase === "N" && characterTypesNumeric === "N" && characterTypesSpecial === "N") {
      alert("Error: Must select at least one character type.")
    };

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

writePassword()