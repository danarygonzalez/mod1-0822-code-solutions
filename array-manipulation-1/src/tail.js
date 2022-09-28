/* exported tail */
// Obtain array from function
// Create new empty array
// Run for loop with a starting point of 1 until you reach the length of the initial array
// push values of for loop to new array
// return value of new array
function tail(array) {
  var newArray = [];
  for (var i = 1; i < array.length; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}
