var books = [
  {
    isbn: '978-0-385-12168-2',
    title: 'The Stand',
    author: 'Stephen King'
  },
  {
    isbn: '978-0-007-52987-2',
    title: 'Bird Box',
    author: 'Josh Malerman'
  },
  {
    isbn: '978-1-441-77976-2',
    title: 'The Woman in Black',
    author: 'John Lawrence'
  }
];
console.log('value of books:', books);
console.log('type of books:', typeof books);

console.log('value of JSON stringfy:', JSON.stringify(books));
console.log('type of JSON Stringfy:', typeof JSON.stringify(books));

var newString = '{"id":209340, "name":"Danary Gonzalez"}';
console.log('value of newString:', newString);
console.log('type of newString:', typeof newString);

var newObject = JSON.parse(newString);
console.log('result of newObject', newObject);
console.log('type of newObject', typeof newObject);
