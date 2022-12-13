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
    
    // Loop to get each character type to include in the password
    while (sumCharType <= 0) {
        for (let i = 0; i < validCharType.length; i++) {
            while (!validCharType[i]) {
                pwCharType[i] = ValidateYesOrNo(window.prompt("Include " + charTypeCriteria[i] + " characters in the password? (Y/N or Yes/No)"));
        
                // Make sure the user entered something valid to break the loop
                if (pwCharType[i] >= 0) {
                    validCharType[i] = true;
                } 
                else {
                    window.alert("Invalid selection. Try again.");
                }
            }

            // If all character types are rejected, inform and restart the loop
            sumCharType = pwCharType.reduce((psum, a) => psum + a, 0);
            if (sumCharType <= 0 && i == (validCharType.length - 1)) {
                window.alert("You must select at least one character type to use.");
                validCharType = [false, false, false, false]
                i=-1; continue;
            }
        }
    }

    // use the user-entered criteria to generate the password
    for (let i = 0; i < pwLength; i++) {
        const singChar = randomChar(pwCharType);
        pwText = pwText.concat(singChar);
    }

    return pwText;
}

// Function to validate the yes/no options for character types to include in the password
function ValidateYesOrNo(yon) {
    let result;
    yon = yon.toUpperCase();
    if ((yon == "Y") || (yon == "YE") || (yon == "YES")) {
        result = 1;
    }
    else if ((yon == "N") || (yon == "NO")) {
        result = 0;
    }
    else {
        result = -1;
    }
    return result;
}

// Randomize individual character function
function randomChar(criteria) {
    let result = "";
    let allChars = ["abcdefghijklmnopqrstuvwxyz","ABCDEFGHIJKLMNOPQRSTUVWXYZ","0123456789"," !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~"];
    let totPossible = 0;
    let realChoices = "";
  
    // For each criterion selected, add those characters to the possible real choices
    for (let i = 0; i < criteria.length; i++) {
      const crit = criteria[i];
      if (crit == 1) {
        realChoices = realChoices.concat(allChars[i]);
      }
    }
  
    // Randomize and return the result
    totPossible = realChoices.length;
    result = realChoices.charAt(Math.floor(Math.random() * totPossible));
    return result;
  }