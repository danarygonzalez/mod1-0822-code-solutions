/* exported isUpperCased */
// Obtain string from function
// If original string stricly equals string in uppercase show TRUE
// Else show FALSE
function isUpperCased(word) {
  if (word === word.toUpperCase()) {
    return true;
  } else {
    return false;
  }
}
