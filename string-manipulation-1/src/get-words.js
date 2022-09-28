/* exported getWords */
// Obtain string or strings from function
// Assign empty array to newArray variable
// Check if string length not equal to 0
// IF TRUE Separate each string divided by a space and assign to newArray, return value of newArray
// ELSE return value of newArray
function getWords(string) {
  var newArray = [];
  if (string.length !== 0) {
    newArray = string.split(' ');
    return newArray;
  } else {
    return newArray;
  }
}
