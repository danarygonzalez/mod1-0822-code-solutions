/* exported reverse */
// Obtain array from function
// Create new empty array
// Create a new for loop where i equals the length of the array subtracted by one until the the value of i reaches 0
// push value of each index within the original array to the new array
// return value of new array

function reverse(array) {
  var newArray = [];
  for (var i = array.length - 1; i >= 0; i--) {
    newArray.push(array[i]);
  }
  return newArray;
}
