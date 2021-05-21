
var generateBtn = document.getElementById('generateBtn')



function enterPassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;


};



function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  console.log(password)

};

generateBtn.addEventListener("click", writePassword)


function generatePassword() {
  var passwordLength = prompt("Your Password must be longer than 8 Characters and Shorter than 128. What length of Password Would you like?");
  
  
  if (passwordLength < 8 ) {
    alert("The Password Length selected is too short");
    return "";
  } 

  if (passwordLength > 128 ) {
    alert("The Password Length selected is too  long");
    return "";
  } 

  var numbers = confirm("The Password will include Numbers?");

  var lowerCases = confirm("The Password will include Lowercase Letters?");

  var upperCases = confirm("The Password will include Uppercase Letters?");

  var special = confirm("The Password will include Special Characters");

  
  var minCount = 0;


  

  var minNumbers = "";
  var minLowerCases = "";
  var minUpperCases = "";
  var minSpecialChars = "";


  //Generator function - http://www.net-comber.com/charset.html

function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
  }
  
  function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
  }
  
  function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 9) + 49);
    
  }
  function getRandomSymbols() {
  
    const symbols = '!@#$%^&*(){}[]+<>/+?'
    return symbols [Math.floor(Math.random() * symbols.length)];

};


  if (numbers === true) {
    minNumbers = getRandomNumber();
    minCount++;

  }

  if (lowerCases === true) {
    minLowerCases = getRandomLower();
    minCount++;

  }

  if (upperCases === true) {
    minUpperCases = getRandomUpper();
    minCount++;

  }

  if (special === true) {
    minSpecialChars = getRandomSymbols();
    minCount++;

  }

 
  var randomGeneratedPassword = "";

 
  for (let i = 0; i < passwordLength; i++) {
    var randomNumber = Math.floor(Math.random() * passwordLength.length);

    randomGeneratedPassword += randomNumber;

  }

 
  randomGeneratedPassword += minNumbers;
  randomGeneratedPassword += minLowerCases;
  randomGeneratedPassword += minUpperCases;
  randomGeneratedPassword += minSpecialChars;


  return randomGeneratedPassword;

  
}





