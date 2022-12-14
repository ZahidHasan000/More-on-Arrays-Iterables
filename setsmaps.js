/*  const ids = new Set([1, 3, 5]);
// ids.add(2);
ids.add(3);
console.log(ids);   */

/*  const ids = new Set(['Hi', 'From', 'Set!']);
ids.add(3);
if (ids.has('Hi')) {
  ids.delete('Hi');
}
for (const entry of ids.entries()) {
  // console.log(entry);
  console.log(entry[0]);
}   */

/*  const person1 = { name: 'Max' };
const person2 = { name: 'Manuel' };
const personData = new Map([[person1, [{ date: 'Yesterday', price: 10 }]]]);
personData.set(person2, [{ date: 'Two weeks ago', price: 100 }]);
console.log(personData);
console.log(personData.get(person1));

for (const entry of personData.entries()) {
  console.log(entry);
}

for (const [key, value] of personData.entries()) {
  console.log(key, value);
}

for (const key of personData.keys()) {
  console.log(key);
}

for (const value of personData.values()) {
  console.log(value);
}
console.log(personData.size);   */


/*  let person = { name: 'Max' };
const persons = new WeakSet();
persons.add(person);

// ... some operations
person = null;

console.log(persons);


let person2 = { name: 'Manuel' };
const persons2 = new WeakSet();
persons2.add(person2);

// ... some operations
// person = null;

console.log(persons2);   */

let person = { name: 'Max' };
const personData = new WeakMap();
personData.set(person, 'Extra info');
person = null;
console.log(personData);