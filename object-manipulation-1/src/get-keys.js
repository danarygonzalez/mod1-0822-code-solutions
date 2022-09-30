/* exported getKeys */
// Obtain object from function
// Create new empty array
// Create loop for each property in the object
// Push property to object
function getKeys(object) {
  var newArray = [];
  for (const key in object) {
    newArray.push(key);
  }
  return newArray;
}
