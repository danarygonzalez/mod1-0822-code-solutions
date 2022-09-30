/* exported getValues */
// Obtain object from function
// Create new empty array
// Run loop for each value in the object
// push each value into new array
function getValues(object) {
  var newArray = [];
  for (const value in object) {
    newArray.push(object[value]);
  }
  return newArray;
}
