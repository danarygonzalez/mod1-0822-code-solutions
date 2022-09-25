/* exported includesSeven */
function includesSeven(array) {
  var validResult = false;
  for (var i = 0; i < array.length; i++) {
    if (array[i] === 7) {
      validResult = true;
      break;
    }
  }
  return validResult;
}
