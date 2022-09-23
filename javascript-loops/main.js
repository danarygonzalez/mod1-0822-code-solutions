/* exported getNumbersToTen,
            getEvenNumbersToTwenty,
            repeatWord,
            logEachCharacter,
            doubleAll,
            getKeys,
            getValues
 */

// getNumbersToTen Function
function getNumbersToTen() {
  var numbers = [];
  var currentNumber = 1;
  while (currentNumber <= 10) {
    numbers.push(currentNumber);
    currentNumber++;
  }
  return numbers;
}

// getEvenNumbersToTwenty
function getEvenNumbersToTwenty() {
  var evenNumbers = [];
  var currentNumber = 2;
  while (currentNumber <= 20) {
    evenNumbers.push(currentNumber);
    currentNumber += 2;
  }
  return evenNumbers;
}

// getNumbersToTen function
function repeatWord(word, times) {
  var count = 1;
  var repeated = '';
  while (count <= times) {
    repeated += word;
    count++;
  }
  return repeated;
}

// logEachCharacter function
function logEachCharacter(string) {
  var i = 0;
  for (; i < string.length; i++) {
    console.log(string[i]);
  }
}

// doubleAll function
function doubleAll(numbers) {
  var doubled = [];
  var i = 0;
  for (; i < numbers.length; i++) {
    doubled.push(numbers[i] * 2);
  }
  return doubled;
}

// getKeys function
function getKeys(object) {
  var keys = [];
  for (const key in object) {
    keys.push(key);
  }
  return keys;
}

// getValues function
function getValues(object) {
  var values = [];
  for (const key in object) {
    values.push(object[key]);
  }
  return values;
}
