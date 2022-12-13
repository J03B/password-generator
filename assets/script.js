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

// ADDING CODE BELOW TO GENERATE THE PASSWORD
function generatePassword() {
    let pwLength;
    let validLength = false;
    let pwCharType = [0, 0, 0, 0];
    let sumCharType = 0;
    let validCharType = [false, false, false, false];
    let charTypeCriteria = ["lowercase", "uppercase", "numeric", "special"];
    let pwText = "";
    
    // First, prompt for the length of the password
    while (!validLength) {
      pwLength = window.prompt("Enter the length of the password");
  
      // validate the length is an integer between 8 and 128
      if (pwLength % 1 == 0) {
        if (pwLength >= 8 && pwLength <= 128) {
          validLength = true;
        }
        else {
          window.alert("You must enter a value between 8 and 128.");
        }
      }
      else {
        window.alert("You must enter an integer (whole number). This will be the length of the password.");
      } 
    }
    
}