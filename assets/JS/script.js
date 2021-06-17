// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q','r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
var uppercase 
var numeric = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
var special 
var characterOptions= []


var special characters '\' has to be '\\''



// Write password to the #password input   if having issue getting the password to populate, check the functionn names here
function generateButton() {
/* their text:  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password; END */

  //Prompts to give the length for password
  var characterLength = prompt("Enter length of password (8-128 characters).");
  console.log("character length: " + characterLength);
  var characterLength = parseInt(characterLength);
  console.log("character length: " + characterLength);
  //Error if character length parameters not met
  if (characterLength < 8 || characterLength > 128) {
    alert("Error: password must be between 8-128 characters.")
    /* can you just put the function and then return here and remove the rest
    var characterLength = prompt("Enter length of password (8-128 characters).");
      if (characterLength < 8 || characterLength > 128) {
        alert("Error: password must be between 8-128 characters. Start over.")
        return; */
      };
  
  
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


  var includeSpecial = prompt("Include special characters? Y/N")
    includeSpecial = includeSpecial.toUpperCase();
    console.log("Special characters? " + includeSpecial);
    if (includeSpecial === "Y") {
      characterOptions = characterOptions.concat(special);
    };
    

  //Error if no character types are selected 
  if (includeLowercase === "N" && includeUppercase === "N" && includeNumeric === "N" && includeSpecial === "N") {
      alert("Error: Must select at least one character type.")
    };
    return;

    console.log(characterOptions);

}
now randomize character options with math fxn and loop based on number chosen i think

// Add event listener to generate button
generateBtn.addEventListener("click", generateButton); //isnt this redundant

/*
var characterOptions= []
add uppercase, lowercase, etc to this so it includes all the features and concaticate it together
and then this is your array with what they chose 
then choose the number included and 
then randomize this array */