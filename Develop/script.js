// Assignment code here
var generate = window.prompt('You need a new password!');
var passwordlen = window.prompt("How long should your password be?");
var upper = window.prompt("Do you want uppercase values? Y/N");
var lower = window.prompt("Do you want lowercase values? Y/N");
var numval = window.prompt("Do you want numeric values? Y/N");
var specialval = window.prompt("Do you want special values? Y/N");
// lowercase, uppercase, numeric, and/or special characters

function generatePassword () {
var useSymbols = true;
var useNumbers = true;
var useLower = true;
var useUpper = true;
var passwordLength = 8;

var numbers = ["0","1","2","3","4","5","6","7","8","9"]
var symbols = ["&","!","$"]
var upper = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
var lower = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]

var bucket = []
var password = ""
if (useNumbers) {
  bucket.push(numbers);
}
if (useSymbols){
  bucket.push (symbols);
}
if (useLower){
  bucket.push (lower);
}
if (useUpper){
  bucket.push(upper);
}

for (var x=0; x < passwordLength; x++) {
  var randNumber = getRandom(0, bucket.length)
}

password = password + nextCharacter;

/*

1)create a bucket of possible characters
2) random number function (returnes between 0 and bucket.length-1
3) loop for password length # of times
4)append random char from bucket 

array for each prompt
array for bucket
if yes append string to bucket

math.random (26)

string myString = "";
for (var i=0;i<100;i++) {
    myRandomLetter = generateSingleLetter();
    myString = myString + myRandomLetter();
}


charAt()

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
var sentence = 'abcdefghijklmnopqrstuvwxyz + ABCDEFGHIJKLMNOPQRSTUVWXYZ';

var index = (getRandomInt(52));

*/
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword(); 
  var minNumberofChars = 8;
  var maxNumberofChars = 128;
    if(writePassword.length < minNumberofChars || writePassword.length > maxNumberofChars){
    return "error";}
    

  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);