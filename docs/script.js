// Assignment code here
//var generate = window.prompt('You need a new password!');

// lowercase, uppercase, numeric, and/or special characters
/*

1)create a bucket of possible characters
2) random number function (returnes between 0 and bucket.length-1
3) loop for password length # of times
4)append random char from bucket 

array for each prompt
array for bucket
if yes append string to bucket

*/
function generatePassword() {
  var passwordLength = window.prompt("How long should your password be?");
  if (passwordLength === null) {
    return;
  }

  //if len is too low or high goes back up to generate password function
  if (passwordLength < 8 || passwordLength > 128) {
    return generatePassword();
  }

  var useUpper = window.confirm("Do you want uppercase values? Y/N");
  var useLower = window.confirm("Do you want lowercase values? Y/N");
  var useNumbers = window.confirm("Do you want numeric values? Y/N");
  var useSymbols = window.confirm("Do you want special values? Y/N");

  var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var symbols = ["&", "!", "$", "%", "#", "@", "?", "*"];
  var upper = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  var lower = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  if (!useNumbers && !useSymbols && !useLower && !useUpper) {
    alert("please choose some criteria");
    return;
  }

  var bucket = [];
  var password = "";
  if (useNumbers) {
    bucket.push(...numbers);
  }
  if (useSymbols) {
    bucket.push(...symbols);
  }
  if (useLower) {
    bucket.push(...lower);
  }
  if (useUpper) {
    bucket.push(...upper);
  }
  console.log(bucket);

  for (var x = 0; x < passwordLength; x++) {
    var randNumber = getRandomInt(bucket.length);
    var nextCharacter = bucket[randNumber];
    password = password + nextCharacter;
  }

  return password;
}
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
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
