/* exported countdown */
// function countdown(number) {
//   var numbers = [];
//   var i = number;
//   for (; number >= 0; number--) {
//     numbers.push(i);
//   }
//   return numbers;
// }

function countdown(number) {
  var numbers = [];
  var currentNumber = number;
  while (currentNumber >= 0) {
    numbers.push(currentNumber);
    currentNumber--;
  }
  return numbers;
}
