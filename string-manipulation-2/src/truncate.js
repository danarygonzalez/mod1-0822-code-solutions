/* exported truncate */
// Obtain length and string from function
// Return new value of string after replacing characters based on the value of length
function truncate(length, string) {
  return string.substring(0, length) + '...';
}
