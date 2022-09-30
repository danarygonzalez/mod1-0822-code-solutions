/* exported toObject */
// Obtain array from function
// Create empty object
// Assign the first value of the array to the newObject as a key and assign second value as the property
// return value of newObject
function toObject(keyValuePair) {
  var newObject = {};
  newObject[keyValuePair[0]] = keyValuePair[1];
  return newObject;
}
