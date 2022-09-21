// Math Object

var numOne = 90;
var numTwo = 40;
var numThree = 15;

var maximumValue = Math.max(numOne, numTwo, numThree);
console.log('maximumValue', maximumValue);

var heroes = ['Thor', 'Ant-Man', 'Dr Strange', 'Superman'];
var randomNumber = Math.random();
randomNumber = randomNumber * heroes.length;
var randomIndex = Math.floor(randomNumber);
console.log('randomIndex:', randomIndex);
var randomHero = heroes[randomIndex];
console.log('My favorite hero is:', randomHero);

// Array Method
var library = [
  {
    title: 'Dune',
    author: 'Frank Herbert'
  },
  {
    title: 'The Shining',
    author: 'Stephen King'
  },
  {
    title: 'Dracula',
    author: 'Bram Stoker'
  }
];

var lastBook = library.pop();
console.log('lastBook:', lastBook);
var firstBook = library.shift();
console.log('firstBook:', firstBook);

var js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};
var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};

library.push(js);
library.unshift(css);
library.splice(1, 1);
console.log('value of library:', library);

// String Method
var fullName = 'Danary Gonzalez';
var firstAndLastName = fullName.split(' ');
console.log('firstAndLastName:', firstAndLastName);
var firstName = firstAndLastName[0];
var sayMyName = firstName.toUpperCase();
console.log('sayMyName:', sayMyName);
