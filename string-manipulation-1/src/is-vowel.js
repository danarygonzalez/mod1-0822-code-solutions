/* exported isVowel */
// Obtain character from function
// If character equals a or A return TRUE
// Else If character equals e or E return TRUE
// Else If character equals i or I return TRUE
// Else if character equals o or O return TRUE
// Else if character equals u or U return TRUE
// Else return FALSE
function isVowel(char) {
  if (char === 'a' || char === 'A') {
    return true;
  } else if (char === 'e' || char === 'E') {
    return true;
  } else if (char === 'i' || char === 'I') {
    return true;
  } else if (char === 'o' || char === 'O') {
    return true;
  } else if (char === 'u' || char === 'U') {
    return true;
  } else {
    return false;
  }
}
