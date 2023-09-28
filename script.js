//Challenge 1: Store the user's first name, last name, age, country, and state in your browser's localStorage using the setItem() method and print the localStorage in the console.
const firstName = 'rajat';
const lastName = ' ';
const age = 25;
const country = 'India';
const state = 'Karnataka';
localStorage.setItem('firstName', firstName);
localStorage.setItem('lastName', lastName);
localStorage.setItem('age', age);
localStorage.setItem('country', country);
localStorage.setItem('state', state);
console.log(localStorage);
//Challenge 2: Get the users data stored on your browser's localStorage using the getItem() method and print the localStorage in the console.
console.log(localStorage);
//Challenge 3: Using removeItem() method, remove the "state" data stored in your browser's localStorage and print the localStorage in the console.
localStorage.removeItem('state');
console.log(localStorage);
//Challenge 4: Using clear() method to remove all the data stored in your browser's localStorage and print the localStorage in the console.
localStorage.clear();
console.log(localStorage);
//Challenge 5: Using JSON.stringify() convert the given object into the string and print the same.
const obj = { name: 'rajat', age: 25, city: 'karnataka' };
const myJSON = JSON.stringify(obj);
console.log(myJSON);

const user = {
  firstName: 'Rajat',
  age: 25,
  skills: ['HTML', 'CSS', 'JS', 'React'],
};
