/* exported initial */
// Obtain new array from function
// Create new empty array
// Run for loop until you reach the length of the array subtracted by 1
// push values of loop into new array
// return value of new array
function initial(array) {
  var newArray = [];
  for (var i = 0; i < array.length - 1; i++) {
    newArray.push(array[i]);
  }
  return newArray;
}
