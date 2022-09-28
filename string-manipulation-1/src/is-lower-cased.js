/* exported isLowerCased */
// Obtain string from Function
// If string stricly equals value of the same string in all lowercase then return TRUE
// Else return FALSE
function isLowerCased(word) {
  if (word === word.toLowerCase()) {
    return true;
  } else {
    return false;
  }
}
