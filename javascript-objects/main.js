// Student Object

var student = {
  firstName: 'Danary',
  lastName: 'Gonzalez',
  age: 30
};

var fullName = student.firstName + ' ' + student.lastName;
console.log('value of fullName:', fullName);
student.livesinIrvine = false;
student.previousOcccupation = 'IT Consultant';
console.log('value of livesinIrvine:', student.livesinIrvine);
console.log('value of previousOccupation:', student.previousOcccupation);
console.log('value of student', student);

// Vehicle Object

var vehicle = {
  make: 'Ferrari',
  model: '250 GTO',
  year: '1962'
};

vehicle['color'] = 'blue';
vehicle['isConvertible'] = false;
console.log('value of [color]:', vehicle['color']);
console.log('value of [isConvertible]:', vehicle['isConvertible']);
console.log('value of vehicle:', vehicle);

// Pet Object
var pet = {
  name: 'augusto',
  type: 'dog'
};
delete pet.name;
delete pet.type;
console.log('value of pet:', pet);
