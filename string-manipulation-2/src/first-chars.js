/* exported firstChars */
// Obtain string and length from function
// Use substring method of the string object to remove characters based on the length argument and assign value to newString variable
// return value of newstring

function firstChars(length, string) {
  var newString = string.substring(0, length);
  return newString;
}
