// Convert Minutes to Seconds
function convertMinutesToSeconds(minutes) {
  return minutes * 60;

}
var seconds = convertMinutesToSeconds(10);
console.log('convertMinutesToSeconds result:', seconds);

// Greet Function
function greet(name) {
  return 'Hello ' + name;
}
var greeting = greet('danary');
console.log('result of greet:', greeting);

// getArea function
function getArea(width, height) {
  return width * height;
}

var area = getArea(10, 20);
console.log('result of getArea:', area);

// getFirstName function
function getFirstName(person) {
  return person.firstName;
}
var firstNameResult = getFirstName({ firstName: 'Danary', lastName: 'Gonzalez' });
console.log('result of getFirstName:', firstNameResult);

// getLastElement function
function getLastElement(array) {
  return array[array.length - 1];
}
var lastElement = getLastElement(['propane', 'and', 'propane', 'accessories']);
console.log('getLastElement result:', lastElement);
