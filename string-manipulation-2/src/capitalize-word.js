/* exported capitalizeWord */
// Obtain string from function
// Assign value of newWord to first character in string to uppercase and concatenante after slicing string from second character and setting string to lowercase
// if newWord strictly equals 'Javascript' set value of newWord to 'JavaScript' and return value of NewWord
// Else return value of newWord
function capitalizeWord(word) {
  var newWord = word[0].toUpperCase() + word.slice(1).toLowerCase();
  if (newWord === 'Javascript') {
    newWord = 'JavaScript';
    return newWord;
  } else {
    return newWord;
  }
}
