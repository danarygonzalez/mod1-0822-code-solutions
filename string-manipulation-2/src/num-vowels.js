/* exported numVowels */
// Obtain string from function
// Set Vowel Counter to 0
// Set all characters within string to lowercase and split by character, assign new value to NewString variable
// Run for loop for each character within string
// Run if statement to check if each character is equal to a vowel
// if true increase vowel counter variable by 1
// return final value of vowel counter
function numVowels(string) {
  var newString = string.toLowerCase().split('');
  var vowelCounter = 0;
  for (var i = 0; i < newString.length; i++) {
    if (newString[i] === 'a' || newString[i] === 'e' || newString[i] === 'i' || newString[i] === 'o' || newString[i] === 'u') {
      vowelCounter++;
    }
  }
  return vowelCounter;
}
