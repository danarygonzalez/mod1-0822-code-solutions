/* exported capitalize */
// Obtain string from function
// Convert first character to uppercase and convert remaining string to lower case, concatenant both values
// Return new value of string
function capitalize(word) {
  return word[0].toUpperCase() + word.slice(1).toLowerCase();
}
