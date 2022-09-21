/* exported isUnderFive,
            isEven,
            startsWithJ,
            isOldEnoughToDrink,
            isOldEnoughToDrive,
            isOldEnoughToDrinkAndDrive,
            categorizeAcidity,
            introduceWarnerBro
 */

// isUnderFive function

function isUnderFive(number) {
  if (number < 5) {
    return true;
  } else {
    return false;
  }
}

// isEven function

function isEven(number) {
  if (number % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

// startsWithJ function

function startsWithJ(string) {
  if (string.charAt(0) === 'J') {
    return true;
  } else {
    return false;
  }
}

// isOldEnoughToDrink function

function isOldEnoughToDrink(person) {
  if (person.age >= 21) {
    return true;
  } else {
    return false;
  }
}

// isOldEnoughToDrive function

function isOldEnoughToDrive(person) {
  if (person.age >= 16) {
    return true;
  } else {
    return false;
  }
}

// isOldEnoughToDrinkAndDrive function

function isOldEnoughToDrinkAndDrive(person) {
  if (person.age >= 0) {
    return false;
  }
}

// categorizeAcidity function

function categorizeAcidity(pH) {
  if (pH > 1 && pH < 7) {
    return 'acid';
  } else if (pH === 7) {
    return 'neutral';
  } else if (pH > 7 && pH <= 14) {
    return 'base';
  } else {
    return 'ivalid pH level';
  }
}

// introduceWarnerBro function

function introduceWarnerBro(name) {
  if (name === 'yakko' || name === 'wakko') {
    return "We're the warner brothers!";
  } else if (name === 'dot') {
    return "I'm cute~";
  } else {
    return 'Goodnight everybody!';
  }
}
