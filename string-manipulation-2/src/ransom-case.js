/* exported ransomCase */
// Obtain string from function
// Separate each character from string and convert to upper case, assign values to variable newWord
// for each character increase by two and set index character to lowercase
// join each character
function ransomCase(string) {
  var newWord = string.toUpperCase().split('');
  for (var i = 0; i < newWord.length; i += 2) {
    newWord[i] = newWord[i].toLowerCase();
  }
  return newWord.join('');
}
