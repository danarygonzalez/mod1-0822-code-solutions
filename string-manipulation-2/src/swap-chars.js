/* exported swapChars */
// Obtain firstIndex, SecondIndex and string from function
// split string into individual characters
// obtain the first index character from the string and assign it to the letterSwap variable
// replace the first index of the string with the second index of the string
// replace the second index of the string with the value of letterSwap
// join all characters into the value of string
// return value of string
function swapChars(firstIndex, secondIndex, string) {
  string = string.split('');
  var letterSwap = string[firstIndex];
  string[firstIndex] = string[secondIndex];
  string[secondIndex] = letterSwap;
  string = string.join('').toString();
  return string;
}
