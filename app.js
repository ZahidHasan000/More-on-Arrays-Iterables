/* const number = [1, 2, 3];
console.log(number);  */

/*  const moreNumber = new Array(); //[]
console.log(moreNumber);  */

/* const moreNumber = new Array('Hi', 'Welcome!');
console.log(moreNumber);  */

/* const moreNumber = new Array(1, 5);
console.log(moreNumber);  */

/* const moreNumber = new Array(5);
console.log(moreNumber);  */

/* const moreNumber2 = Array(5);
console.log(moreNumber2);  */

/* const moreNumber3 = Array(5, 3);
console.log(moreNumber3);  */

/* const yetMoreNumbers = Array.of(1, 2);
console.log(yetMoreNumbers);  */

/* const moreNumber4 = Array.from(1, 2, 3);
console.log(moreNumber4);   */

/* const moreNumber5 = Array.from(3);
console.log(moreNumber5);  */

/* const moreNumber6 = Array.from("Hi");
console.log(moreNumber6);  */

/* const listItems = document.querySelectorAll('li');
console.log(listItems);  */

/* const arrayListItem = Array.from(listItems);
console.log(arrayListItem);  */

/* const hobbies = ['cooking', 'sports'];
const personalData = [30, 'Max', { moreDetail: [] }];
console.log(personalData[2]);  */

/* const analyticsData = [[1, 1.6], [-5.4, 2.1]];
for (const data of analyticsData) {
  for (const dataPoint of data) {
    console.log(dataPoint);
  }
}  */

/* const hobbies = ['Sports', 'Cooking'];
hobbies.push('Coding');
hobbies.unshift('Reading');
// hobbies.pop();
const poppedValue = hobbies.pop();
hobbies.shift();
console.log(hobbies);   */

/* const hobbies2 = ['Sports', 'Cooking'];
hobbies2[1] = 'Coding';
// hobbies2[5] = 'Reading'; //rarely used
// hobbies2[4] = 'Reading';
console.log(hobbies2, hobbies2[4]);  */

/*  const hobbies3 = ['Sports', 'Cooking'];
// hobbies3.splice(0, 0);
hobbies3.splice(1, 2, 'Good Food', 'gardening');
console.log(hobbies3);

// hobbies3.splice(1, 1);
const removedElement = hobbies3.splice(-2, 1);
console.log(hobbies3);  */

// const testResult = [1, 5.3, 10.99, -5, 10];
// console.log(testResult.slice());

/*  const testResult = [1, 5.3, 10.99, -5, 10];
// const storedResult = testResult.slice();
// const storedResult = testResult.slice(-4, -2);
// const storedResult = testResult.slice(2, 4);
const storedResult = testResult.slice(3);
testResult.push(7.5);
console.log(storedResult, testResult);   */

/*  const testResult = [1, 5.3, 10.99, -5, 10];
const storedResult = testResult.concat([2.5, 4.9]);
testResult.push(7.5);
console.log(storedResult, testResult);   */

/*  const testResults = [1, 5.3, 10.99, -5, 10.99, 8];
const storedResult = testResults.concat([2.5, 4.9]);
testResults.push(7.5);
console.log(storedResult, testResults);
console.log(testResults.indexOf(5.3));
// console.log(testResult.indexOf(10.99));
// console.log(testResult.lastIndexOf(10.99));
console.log(testResults.includes(6));
// console.log(testResults.IndexOf(10.99) !== -1);  //problem   */

/*  const personData = [{ name: 'Max' }, { name: 'Manuel' }, { name: 'Zahid' }, { name: 'Manuel' }, { name: 'Hasan' }];
console.log(personData.indexOf({ name: 'Manuel' }));

const Manuel = personData.find((person, idx, persons) => {
  return person.name === 'Manuel';
});
Manuel.name = 'Pavel';
console.log(Manuel, personData);
// console.log(Manuel);

const MaxIndex = personData.findIndex((person, idx, persons) => {
  return person.name === 'Max';
});

console.log(MaxIndex);   */

/*  const prices = [10.99, 5.99, 4.69, 8.96];
const tax = 0.19;
const taxAdjustedPrices = [];

//  for (const price of prices) {
//   taxAdjustedPrices.push(price * (1 + tax));
// }  

prices.forEach((price, indx, prices) => {
  const priceObj = { index: indx, taxAdjPrice: price * (1 + tax) };
  taxAdjustedPrices.push(priceObj);
});
console.log(taxAdjustedPrices);  */

/*  const prices = [10.99, 5.99, 4.69, 8.96];
const tax = 0.19;

const taxAdjustedPrices = prices.map((price, indx, prices) => {
  const priceObj = { index: indx, taxAdjPrice: price * (1 + tax) };
  return priceObj;
});
console.log(prices, taxAdjustedPrices);   */


/*   const prices = [10.99, 5.99, 4.69, 8.96];
const sortedPrices = prices.sort((a, b) => {
  // if (a > b) {
  //   return 1;
  // } else if (a === b) {
  //   return 0;
  // } else {
  //   return -1
  // }

  if (a > b) {
    return -1;
  } else if (a === b) {
    return 0;
  } else {
    return 1;
  }
});
// console.log(sortedPrices.reverse());
console.log(sortedPrices);  */


/*  const prices = [10.99, 5.99, 4.69, 8.96];
const sortedPrices = prices.sort((a, b) => {
  if (a > b) {
    return -1;
  } else if (a === b) {
    return 0;
  } else {
    return 1;
  }
});
console.log(sortedPrices);

const filteredArray = prices.filter((price, indx, prices) => {
  return price > 6;
});
console.log(filteredArray);   */


/*  const prices = [10.99, 5.99, 4.69, 8.96];
const filteredArray = prices.filter(price => price > 6);
console.log(filteredArray);   */


/*  const prices = [10.99, 5.99, 4.69, 8.96];

// let sum = 0;
// prices.forEach((price) => {
//   sum += price;
// });
// console.log(sum);

const sum = prices.reduce((preValue, currValue) => preValue + currValue, 0);

// const sum = prices.reduce((priveousValue, currentValue, currentIndex, prices) => {
//   return priveousValue + currentValue;
// }, 0);
console.log(sum);   */

/*  const data = 'New York; 10.99; 2000';
const transformedData = data.split(';');
transformedData[1] = +transformedData[1];
console.log(transformedData);

const nameFragments = ['Max', 'Manuel'];
const name = nameFragments.join(' ');
console.log(name);   */


/*  const nameFragments = ['Max', 'Manuel'];
const name = nameFragments.join(' ');
console.log(name);

const copiedNameFragments = [...nameFragments];
nameFragments.push('Mr');
console.log(nameFragments, copiedNameFragments);

const prices = [10.99, 5.99, 3.99, 6.59];
console.log(Math.min(...prices));

// const persons = [{ name: 'Max', age: 30 }, { name: 'Manuel', age: 32 }];
// const coppiedPersons = [...persons];
// persons.push({ name: 'Hasan', age: 29 });

// persons[0].age = 31;

// console.log(persons, coppiedPersons);

const persons = [{ name: 'Max', age: 30 }, { name: 'Manuel', age: 32 }];
const coppiedPersons = persons.map(person => ({
  name: person.name,
  age: person.age
}));
persons.push({ name: 'Hasan', age: 29 });

persons[0].age = 31;

console.log(persons, coppiedPersons);  */


const nameData = ['Max', 'Manuel', 'Mr', 30];
const [firstName, lastName, ...otherInformation] = nameData;
console.log(firstName, lastName, otherInformation);