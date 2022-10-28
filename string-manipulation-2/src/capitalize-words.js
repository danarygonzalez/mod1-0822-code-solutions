/* exported capitalizeWords */
// Obtain string from function
// Set string to lowercase and split string by spaces, set new value to newString Variable
// Loop through each element of the array and capitalize first letter
// Join all elements in array back to string and separate by a space
function capitalizeWords(string) {
  var newString = string.toLowerCase().split(' ');
  for (var i = 0; i < newString.length; i++) {
    newString[i] = newString[i].charAt(0).toUpperCase() + newString[i].slice(1);
  }
  return newString.join(' ');
}
